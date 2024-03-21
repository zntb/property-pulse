'use client';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation.js';
import PropertyCard from '@/components/PropertyCard.jsx';
import Spinner from '@/components/Spinner.jsx';
import { toast } from 'react-toastify';

const SearchResultsPage = () => {
  const searchParams = useSearchParams();

  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const location = searchParams.get('location');
  const propertyType = searchParams.get('propertyType');

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const res = await fetch(
          `/api/properties/search?location=${location}&propertyType=${propertyType}`
        );
        if (res.status === 200) {
          const data = await res.json();
          setProperties(data);
        } else {
          setProperties([]);
          toast.error('Failed to fetch properties');
        }
      } catch (error) {
        console.log(error);
        toast.error('Failed to fetch properties');
      } finally {
        setIsLoading(false);
      }
    };

    fetchSearchResults();
  }, [location, propertyType]);

  console.log(properties);

  return <div>SearchResultsPage</div>;
};

export default SearchResultsPage;
