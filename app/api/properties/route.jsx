import connectDB from '../../../config/database.js';

export const GET = async (request) => {
  try {
    await connectDB();
    return new Response(JSON.stringify({ message: 'Hello, Next.js!' }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response('Something went wrong', {
      status: 500,
    });
  }
};
