import PropertyCard from '@/components/PropertyCard';
import PropertySearchForm from '@/components/PropertySearchForm';
import Pagination from '@/components/Pagination';
import Property from '@/models/Property';
import connectDB from '@/config/database';
import { IProperty } from '@/utils/types';

// Define the props interface
interface PropertiesPageProps {
  searchParams: {
    pageSize?: string | number;
    page?: string | number;
  };
}

// Define the PropertiesPage component
const PropertiesPage = async ({
  searchParams: { pageSize = 9, page = 1 },
}: PropertiesPageProps) => {
  await connectDB();

  // Ensure pageSize and page are numbers
  const pageSizeNumber =
    typeof pageSize === 'string' ? parseInt(pageSize) : pageSize;
  const pageNumber = typeof page === 'string' ? parseInt(page) : page;

  const skip = (pageNumber - 1) * pageSizeNumber;

  // Fetch properties and total count from the database
  const total = await Property.countDocuments({});
  const properties: IProperty[] = await Property.find({})
    .skip(skip)
    .limit(pageSizeNumber)
    .lean();

  // Determine if pagination should be shown
  const showPagination = total > pageSizeNumber;

  return (
    <>
      <section className="bg-blue-700 py-4">
        <div className="mt-[4.25rem] max-w-7xl mx-auto px-4 flex flex-col items-start sm:px-6 lg:px-8">
          <PropertySearchForm />
        </div>
      </section>
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto px-4 py-6">
          <h1 className="text-2xl mb-4">Browse Properties</h1>
          {properties.length === 0 ? (
            <p>No properties found</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {properties.map((property) => (
                <PropertyCard
                  property={property}
                  key={property._id.toString()}
                />
              ))}
            </div>
          )}
          {showPagination && (
            <Pagination
              page={pageNumber}
              pageSize={pageSizeNumber}
              totalItems={total}
            />
          )}
        </div>
      </section>
    </>
  );
};

export default PropertiesPage;
