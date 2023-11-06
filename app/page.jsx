// This is the unique file that's going to render the Home Page

import Feed from "@components/Feed";

const Home = () => {
  return (
    // Wrap everything in an HTML5 semamtic section tag
    // A semantic element clearly describes its meaning to both the browser and the developer
    // The <section> tag is used to define a section in a document
    // Sections should logically group content. It's not a generic container element like <div>
    // When an element is needed only for styling purposes or as a convenience for scripting, developers should use the <div> element instead
    // The section className is just used tailwind for giving a style so that the elements fall one below another
    // Tailwind allows add styles by simply writing utility classes, it is easy to understand what a specific class is suppossed to do
    // If don't know what a specific class does, i.e. w-full, search for it!
    <section className="w-full flex-center flex-col">
      {/* The underscore, such as head_text, means it comes from your own styling within globals.css */}
      <h1 className="head_text text-center">
        Discover & Share
        {/* The <br> tag in HTML is a self-closing tag that is used to insert a line break in the text. */}
        {/* It stands for 'break' and is used when you want to create a new line without starting a new paragraph. */}
        {/* Hide it on large devices, break the content on smaller devices */}
        <br className="max-md:hidden" />
        {/* The <span> tag is very similar to the <div> tag, 
        but <div> is a block-level element and is used to style and layout block-level content (like paragraphs, headings, etc.), 
        while <span> is used to style the content inside block-level elements without breaking the flow of the document. */}
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      {/* desc is your style for description from the globals.css */}
      {/* <span> is an inline element, which means it does not start on a new line and only takes up as much width as necessary. 
      It's typically used to style a small part of text or to apply styles to inline elements without disrupting the flow of content. */}
      {/* <p>, on the other hand, is a block-level element. It's used to define a paragraph, and it starts on a new line, stretching the full width available. 
      It creates a visible block of content, which by default has some margin above and below it to separate paragraphs from each other. */}
      <p className="desc text-center">
        Promptopia is an open-source AI prompting tool for modern world to
        discover, create and share creative prompts.
      </p>
      {/* ADD THE Feed Component HERE */}
      <Feed />
    </section>
  );
};

export default Home;
