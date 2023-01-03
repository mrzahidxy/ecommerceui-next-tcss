import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        const user = await axios.post(
          "https://ecommerce-mern-api.vercel.app/api/auth/login",
          {
            username: credentials.username,
            password: credentials.password,
          }
        );

        if (user) {
          return user.data;
        } else {
          return null;
        }
      },
    }),
  ],
};
export default NextAuth(authOptions);