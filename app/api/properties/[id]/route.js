import connectDB from '@/config/database.js';
import Property from '@/models/Property.js';
import { getSessionUser } from '@/utils/getSessionUser';

// GET /api/properties/:id
export const GET = async (request, { params }) => {
  try {
    await connectDB();

    const property = await Property.findById(params.id);
    if (!property) {
      return new Response('Property not found', {
        status: 404,
      });
    }

    return new Response(JSON.stringify(property), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response('Something went wrong', {
      status: 500,
    });
  }
};

// DELETE /api/properties/:id
export const DELETE = async (request, { params }) => {
  try {
    const propertyId = params.id;

    const sessionUser = await getSessionUser(request);

    // Check for session
    if (!sessionUser || !sessionUser.userId) {
      return new Response('User ID is required', {
        status: 401,
      });
    }

    const { userId } = sessionUser;

    await connectDB();

    const property = await Property.findById(propertyId);

    if (!property) {
      return new Response('Property not found', {
        status: 404,
      });
    }

    // Check ownership
    if (property.owner.toString() !== userId) {
      return new Response('Unauthorized', {
        status: 401,
      });
    }

    await property.deleteOne();

    return new Response('Property deleted', {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response('Something went wrong', {
      status: 500,
    });
  }
};
