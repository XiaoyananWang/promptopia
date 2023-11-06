import "@styles/globals.css";
import Nav from "@components/Nav";
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
      </body>
    </html>
  );
};

export default RootLayout;
