// components/SavedPropertiesPage.tsx
import React from 'react';
import PropertyCard from '@/components/PropertyCard';
import connectDB from '@/config/database';
import User from '@/models/User';
import { getSessionUser } from '@/utils/getSessionUser';
import { IUser, IProperty } from '@/utils/types';

interface SessionUser {
  userId: string;
}

const SavedPropertiesPage = async () => {
  await connectDB();

  const sessionUser = await getSessionUser();

  if (!sessionUser || !('userId' in sessionUser)) {
    return <div>Error: User ID is required</div>;
  }

  const { userId } = sessionUser as SessionUser;

  // Fetch the user and their bookmarks (fully populated)
  const user = (await User.findById(userId)
    .populate<{ bookmarks: IProperty[] }>('bookmarks')
    .lean()
    .exec()) as IUser | null;

  if (!user || !user.bookmarks) {
    return <div>Error: User or bookmarks not found</div>;
  }

  const bookmarks = user.bookmarks;

  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        <h1 className="text-2xl mb-4">Saved Properties</h1>
        {bookmarks.length === 0 ? (
          <p>No saved properties</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bookmarks.map((property) => (
              <PropertyCard key={property._id.toString()} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SavedPropertiesPage;
