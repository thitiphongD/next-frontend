import { signInService } from "@/app/services/authService";
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

declare module "next-auth" {
  interface Session {
    user: {
      id: string | undefined;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: string | unknown;
    };
  }

  interface User {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
    role?: string | null;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
  }
}

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        try {
          const user = await signInService(
            credentials.email,
            credentials.password
          );

          if (user) {
            return user;
          }
        } catch (error) {
          console.error("Sign in failed", error);
          return null;
        }

        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (session.user) {
        session.user.id = token.id;
        session.user.role = token.role;
        session.user.image = token.picture;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
