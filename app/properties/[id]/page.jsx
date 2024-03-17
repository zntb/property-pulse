'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation.js';
import { fetchProperty } from '@/utils/requests.js';

const PropertyPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPropertyData = async () => {
      if (!id) return;

      try {
        const property = await fetchProperty(id);
        setProperty(property);
      } catch (error) {
        console.error('Error fetching property:', error);
        // Handle error here
      } finally {
        setLoading(false);
      }
    };

    if (property === null) {
      fetchPropertyData();
    }
  }, [id, property]);

  if (!property) {
    return <div>Loading...</div>;
  }

  return <div>PropertyPage</div>;
};

export default PropertyPage;
