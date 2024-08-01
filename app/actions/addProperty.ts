"use server";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import cloudinary from "@/config/cloudinary";

async function addProperty(formData: FormData) {
  await connectDB();

  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error("User ID is required");
  }

  const { userId } = sessionUser;

  // Access all values for amenities and images
  const amenities = formData.getAll("amenities") as string[];
  const images = formData.getAll("images") as File[];

  // Create the propertyData object with embedded seller_info
  const propertyData = {
    type: formData.get("type") as string,
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    location: {
      street: formData.get("location.street") as string,
      city: formData.get("location.city") as string,
      state: formData.get("location.state") as string,
      zipcode: formData.get("location.zipcode") as string,
    },
    beds: formData.get("beds") as string,
    baths: formData.get("baths") as string,
    square_feet: formData.get("square_feet") as string,
    amenities,
    rates: {
      weekly: formData.get("rates.weekly") as string,
      monthly: formData.get("rates.monthly") as string,
      nightly: formData.get("rates.nightly") as string,
    },
    seller_info: {
      name: formData.get("seller_info.name") as string,
      email: formData.get("seller_info.email") as string,
      phone: formData.get("seller_info.phone") as string,
    },
    owner: userId,
    images: [] as string[], // Initialize images as an empty array of strings
  };

  const imageUrls: string[] = [];

  for (const imageFile of images) {
    if (imageFile instanceof File) {
      const imageBuffer = await imageFile.arrayBuffer();
      const imageArray = Array.from(new Uint8Array(imageBuffer));
      const imageData = Buffer.from(imageArray);

      // Convert the image data to base64
      const imageBase64 = imageData.toString("base64");

      // Make request to upload to Cloudinary
      const result = await cloudinary.uploader.upload(
        `data:image/png;base64,${imageBase64}`,
        {
          folder: "propertypulse",
        },
      );

      imageUrls.push(result.secure_url);
    }
  }

  propertyData.images = imageUrls;

  const newProperty = new Property(propertyData);
  await newProperty.save();

  revalidatePath("/", "layout");

  redirect(`/properties/${newProperty._id}`);
}

export default addProperty;
