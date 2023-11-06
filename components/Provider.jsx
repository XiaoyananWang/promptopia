// To make the user authentication work, we need to set up in this file

// All the providers, i.e. Redux toolkit query, the frequently used files and functionalities, they all go within the layout components.
// Because that way they'll be used across the app.

// next-auth is not just use in the frontend files within the app directory, it uses the Next.js API backend endpoints.

// We are using the browser's capabilities, so need "use client"
"use client"

// Want to get the children and the current session through props
// This is a higher order component, will wrap it around other components, so need a return statement
import { SessionProvider } from "next-auth/react";

const Provider = ({ children, session }) => {
  return (
    // render the children within the SessionProvider and set session to session
    <SessionProvider session={session}>{children}</SessionProvider>
  );
};

export default Provider;
