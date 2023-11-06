import "@styles/globals.css";

// Change the metadata
export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

// This is the root layout
const RootLayout = ({children}) => {
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
          {/* Render all the children, as the layout is going to be wrapped around everything */}
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
