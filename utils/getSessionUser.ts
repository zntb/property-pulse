import { getServerSession } from "next-auth/next";
import { authOptions } from "@/utils/authOptions";
import { AuthOptions } from "next-auth";

export const getSessionUser = async () => {
  const session = await getServerSession(authOptions as AuthOptions);

  if (!session || !session.user) {
    return null;
  }

  return {
    user: session.user,
    userId: session.user.id,
  };
};
