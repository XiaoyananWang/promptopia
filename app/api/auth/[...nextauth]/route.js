// next-auth is not just use in the frontend files within the app directory, it uses the Next.js API backend endpoints.
// Within here, we can set up the providers such as Google Authentication
import NextAuth from "next-auth/next";
import Google from "next-auth/providers/google";
import GoogleProvider from "next-auth/providers/google";

// To handle authentication, create a handler which all the NextAuth() and provide the options object
const handler = NextAuth({
  providers: [
    // Go to the google console and get the credentials, console.cloud.google.com
    // Create a new project in google console
    // Copy the cliend ID and client secret from the google project, and put in .env
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  // have to get the user to sign in first to get the session
  async session({ session }) {},
  async signIn({ profile }) {
    try{
        // every Next.js route is a serverless route
        // serverless -> lambda function, opens up only when it gets called, every time it gets called it need to spin up the server and make a connection to the database.
        // This is great because we do not need to keep our server running constantly. But we do have to actually make a connection to the database
    } catch (){

    }
  },
});

console.log('Google ID:', process.env.GOOGLE_ID);
console.log('Google Client Secret:', process.env.GOOGLE_CLIENT_SECRET);
// This is not something we usually do, usually we are going to do everything as either a GET or POST, but for next authentication this is how we have to do it and how it's explained in the offcial doc.
export { handler as GET, handler as POST };
