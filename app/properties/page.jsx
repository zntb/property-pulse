import PropertySearchForm from '@/components/PropertySearchForm.jsx';
import Properties from '@/components/Properties.jsx';

const PropertiesPage = async () => {
  return (
    <>
      <section className="bg-blue-700 py-4">
        <div className="mt-[4.25rem] max-w-7xl mx-auto px-4 flex flex-col items-start sm:px-6 lg:px-8">
          <PropertySearchForm />
        </div>
      </section>
      <Properties />
    </>
  );
};

export default PropertiesPage;
