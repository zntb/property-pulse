import updateProperty from "@/app/actions/updateProperty";
import EditPropertyInput from "./EditPropertyInput";
import { propertyTypes } from "@/utils/propertyTypes";
import { amenities } from "@/utils/amenities";

const PropertyEditForm = ({ property }) => {
  const updatePropertyById = updateProperty.bind(null, property._id);

  return (
    <form action={updatePropertyById}>
      <h2 className="text-3xl text-center font-semibold mb-6">Edit Property</h2>
      <EditPropertyInput
        label="Property Type"
        type="select"
        id="type"
        name="type"
        required={true}
        defaultValue={property.type}
        options={propertyTypes}
      />
      <EditPropertyInput
        label="Listing Name"
        type="text"
        id="name"
        name="name"
        placeholder="eg. Beautiful Apartment In Miami"
        required={true}
        defaultValue={property.name}
      />
      <EditPropertyInput
        label="Description"
        type="textarea"
        id="description"
        name="description"
        placeholder="Add an optional description of your property"
        defaultValue={property.description}
      />
      <div className="mb-4 bg-blue-50 p-4">
        <label className="block text-gray-700 font-bold mb-2">Location</label>
        <EditPropertyInput
          label="Street"
          type="text"
          id="street"
          name="location.street"
          placeholder="Street"
          defaultValue={property.location.street}
        />
        <EditPropertyInput
          label="City"
          type="text"
          id="city"
          name="location.city"
          placeholder="City"
          required={true}
          defaultValue={property.location.city}
        />
        <EditPropertyInput
          label="State"
          type="text"
          id="state"
          name="location.state"
          placeholder="State"
          required={true}
          defaultValue={property.location.state}
        />
        <EditPropertyInput
          label="Zipcode"
          type="text"
          id="zipcode"
          name="location.zipcode"
          placeholder="Zipcode"
          defaultValue={property.location.zipcode}
        />
      </div>
      <div className="mb-4 flex flex-wrap">
        <div className="w-full sm:w-1/3 pr-2">
          <EditPropertyInput
            label="Beds"
            type="number"
            id="beds"
            name="beds"
            required={true}
            defaultValue={property.beds}
          />
        </div>
        <div className="w-full sm:w-1/3 px-2">
          <EditPropertyInput
            label="Baths"
            type="number"
            id="baths"
            name="baths"
            required={true}
            defaultValue={property.baths}
          />
        </div>
        <div className="w-full sm:w-1/3 pl-2">
          <EditPropertyInput
            label="Square Feet"
            type="number"
            id="square_feet"
            name="square_feet"
            required={true}
            defaultValue={property.square_feet}
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Amenities</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {amenities.map((amenity, index) => (
            <div key={index}>
              {/* file deepcode ignore ReactControlledUncontrolledFormElement: <please specify a reason of ignoring this> */}
              <input
                type="checkbox"
                id={amenity.id}
                name="amenities"
                value={amenity.value}
                className="mr-2"
                defaultChecked={property.amenities.includes(amenity.value)}
              />
              <label htmlFor={amenity.id}>{amenity.value}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-4 bg-blue-50 p-4">
        <label className="block text-gray-700 font-bold mb-2">
          Rates (Leave blank if not applicable)
        </label>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <EditPropertyInput
            label="Weekly"
            type="number"
            id="weekly_rate"
            name="rates.weekly"
            defaultValue={property.rates.weekly}
          />
          <EditPropertyInput
            label="Monthly"
            type="number"
            id="monthly_rate"
            name="rates.monthly"
            defaultValue={property.rates.monthly}
          />
          <EditPropertyInput
            label="Nightly"
            type="number"
            id="nightly_rate"
            name="rates.nightly"
            defaultValue={property.rates.nightly}
          />
        </div>
      </div>
      <EditPropertyInput
        label="Seller Name"
        type="text"
        id="seller_name"
        name="seller_info.name"
        placeholder="Name"
        defaultValue={property.seller_info.name}
      />
      <EditPropertyInput
        label="Seller Email"
        type="email"
        id="seller_email"
        name="seller_info.email"
        placeholder="Email address"
        required={true}
        defaultValue={property.seller_info.email}
      />
      <EditPropertyInput
        label="Seller Phone"
        type="tel"
        id="seller_phone"
        name="seller_info.phone"
        placeholder="Phone"
        defaultValue={property.seller_info.phone}
      />
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full
            focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Update Property
        </button>
      </div>
    </form>
  );
};

export default PropertyEditForm;
