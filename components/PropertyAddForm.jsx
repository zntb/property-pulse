"use client";
import addProperty from "@/app/actions/addProperty";
import {
  TextInput,
  TextArea,
  SelectInput,
  CheckboxInput,
  FileInput,
} from "./AddPropertyInputs";
import { propertyTypes } from "@/utils/propertyTypes";
import { amenities } from "@/utils/amenities";

const PropertyAddForm = () => {
  return (
    <form action={addProperty}>
      <h2 className="text-3xl text-center font-semibold mb-6">Add Property</h2>

      <SelectInput
        id="type"
        name="type"
        label="Property Type"
        options={propertyTypes}
        required
      />

      <TextInput
        id="name"
        name="name"
        label="Listing Name"
        placeholder="eg. Beautiful Apartment In Miami"
        required
      />

      <TextArea
        id="description"
        name="description"
        label="Description"
        placeholder="Add an optional description of your property"
      />

      <div className="mb-4 bg-blue-50 p-4">
        <label className="block text-gray-700 font-bold mb-2">Location</label>
        <TextInput id="street" name="location.street" placeholder="Street" />
        <TextInput id="city" name="location.city" placeholder="City" required />
        <TextInput
          id="state"
          name="location.state"
          placeholder="State"
          required
        />
        <TextInput id="zipcode" name="location.zipcode" placeholder="Zipcode" />
      </div>

      <div className="mb-4 flex flex-wrap">
        <div className="w-full sm:w-1/3 pr-2">
          <TextInput
            id="beds"
            name="beds"
            type="number"
            label="Beds"
            required
          />
        </div>
        <div className="w-full sm:w-1/3 px-2">
          <TextInput
            id="baths"
            name="baths"
            type="number"
            label="Baths"
            required
          />
        </div>
        <div className="w-full sm:w-1/3 pl-2">
          <TextInput
            id="square_feet"
            name="square_feet"
            type="number"
            label="Square Feet"
            required
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Amenities</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {amenities.map((amenity) => (
            <CheckboxInput
              key={amenity.id}
              id={amenity.id}
              name="amenities"
              label={amenity.label}
              value={amenity.value}
            />
          ))}
        </div>
      </div>

      <div className="mb-4 bg-blue-50 p-4">
        <label className="block text-gray-700 font-bold mb-2">
          Rates (Leave blank if not applicable)
        </label>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <TextInput
            id="weekly_rate"
            name="rates.weekly"
            type="number"
            label="Weekly"
          />
          <TextInput
            id="monthly_rate"
            name="rates.monthly"
            type="number"
            label="Monthly"
          />
          <TextInput
            id="nightly_rate"
            name="rates.nightly"
            type="number"
            label="Nightly"
          />
        </div>
      </div>

      <TextInput
        id="seller_name"
        name="seller_info.name"
        label="Seller Name"
        placeholder="Name"
      />
      <TextInput
        id="seller_email"
        name="seller_info.email"
        type="email"
        label="Seller Email"
        placeholder="Email address"
        required
      />
      <TextInput
        id="seller_phone"
        name="seller_info.phone"
        type="tel"
        label="Seller Phone"
        placeholder="Phone"
      />

      <FileInput
        id="images"
        name="images"
        label="Images (Select up to 4 images)"
        accept="image/*"
        multiple
        required
      />

      <div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full
            focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Add Property
        </button>
      </div>
    </form>
  );
};

export default PropertyAddForm;
