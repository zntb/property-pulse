'use client';
import {
  useRouter,
  useParams,
  useSearchParams,
  usePathname,
} from 'next/navigation.js';

const PropertyPage = () => {
  const router = useRouter();
  const { id } = useParams();

  const searchParams = useSearchParams();
  const name = searchParams.get('name');

  const pathname = usePathname();
  console.log(pathname);

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => router.push('/')}
      >
        Go Home {pathname}
      </button>
    </div>
  );
};

export default PropertyPage;
