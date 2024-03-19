import connectDB from '@/config/database.js';
import Property from '@/models/Property.js';

// GET /api/properties/user/:userId
export const GET = async (request, { params }) => {
  try {
    await connectDB();

    const userId = params.userId;

    if (!userId) {
      return new Response('User ID is required', {
        status: 400,
      });
    }

    const properties = await Property.find({ owner: userId });

    if (!properties) {
      return new Response('No properties found', {
        status: 404,
      });
    }

    return new Response(JSON.stringify(properties), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response('Something went wrong', {
      status: 500,
    });
  }
};
