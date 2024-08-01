import connectDB from '@/config/database';
import Message from '@/models/Message';
import MessageCard from '@/components/MessageCard';
import '@/models/Property';
import { convertToSerializableObject } from '@/utils/convertToObject';
import { getSessionUser } from '@/utils/getSessionUser';
import { IMessage } from '@/utils/types';

const MessagePage = async () => {
  await connectDB();

  const sessionUser = await getSessionUser();

  const { userId } = sessionUser as { userId: string };
  console.log(userId);

  const readMessages = await Message.find({ recipient: userId, read: true })
    .sort({ createdAt: -1 }) // Sort read messages in asc order
    .populate('sender', 'username')
    .populate('property', 'name')
    .lean();

  const unreadMessages = await Message.find({
    recipient: userId,
    read: false,
  })
    .sort({ createdAt: -1 }) // Sort read messages in asc order
    .populate('sender', 'username')
    .populate('property', 'name')
    .lean();

  // Convert to serializable object so we can pass to client component.
  const messages = [...unreadMessages, ...readMessages]
    .map((messageDoc) => {
      const message = convertToSerializableObject(
        messageDoc,
      ) as IMessage | null;

      if (message) {
        message.sender = convertToSerializableObject(
          messageDoc.sender,
        ) as IMessage['sender'];
        message.property = convertToSerializableObject(
          messageDoc.property,
        ) as IMessage['property'];
      }

      return message;
    })
    .filter((message): message is IMessage => message !== null);

  return (
    <section className="bg-blue-50">
      <div className="container m-auto py-24 max-w-6xl">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <h1 className="text-3xl font-bold mb-4">Your Messages</h1>

          <div className="space-y-4">
            {messages.length === 0 ? (
              <p>You have no messages</p>
            ) : (
              messages.map((message) => (
                <MessageCard key={message._id} message={message} />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default MessagePage;
