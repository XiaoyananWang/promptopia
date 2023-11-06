import "@styles/globals.css";
import Nav from "@components/Nav";
// All the providers, i.e. Redux toolkit query, the frequently used files and functionalities, they all go within the layout components.
// Because that way they'll be used across the app.
import Provider from "@components/Provider";

// Change the metadata
export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

// This is the root layout
const RootLayout = ({ children }) => {
  return (
    // The language will be in English
    <html lang="en">
      <body>
        {/* Wrap everything in the body with Provider component */}
        <Provider>
          {/* Change the background */}
          <div className="main">
            <div className="gradient" />
          </div>
          {/* Main part of the application */}
          <main className="app">
            {/* Will call the navbar in the layout is because want to reuse it across all pages, which is exactly what the layout.jsx is for. */}
            {/* A useful shortcut: ctrl+click Nav or any component will lead you to that file directly. */}
            <Nav />
            {/* Render all the children, as the layout is going to be wrapped around everything */}
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
