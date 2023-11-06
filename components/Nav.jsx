//Will be using client-based functionalities, s.a. hooks in this case, need to add the "use client" directive
"use client";


// Link is going to allow you to move to the other pages of the application
import Link from "next/link";
// Image will automatically optimize the images for you
import Image from "next/image";
// The react hooks
import { useState, useEffect } from "react";
// Utility functions that make the sign in and sign up flow simple
import { signIn, signOut, useSession, getProviders } from "next-auth/react";


const Nav = () => {

  
  // The navbar needs to know if the user is logged in or not to know which buttons to show
  const isUserLoggedIn = true;

  // Initialize getProviders for allowing users to signin with next-auth
  const [providers, setProviders] = useState(null);
  // Set the providers using useEffect hook that has a callback function that only runs at the start
  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();
      //set the providers after receive the response
      setProviders(response);
    };
    //need to call the setProviders()
    setProviders();
  }, []);


  return (
    //Semantic nav tag
    <nav className="flex-between w-full mb-16 pt-3">


      {/* The root route */}
      <Link href="/" className="flex gap-2 flex-center">
        {/* Show the logo of the application  */}
        {/* The alt attribute stands for "alternative text". 
        It provides a textual alternative to an image for users who are unable to see it.  */}
        {/* In Tailwind CSS, the class object-contain is used in conjunction with images or videos 
        to specify how their content should be resized to fit their container. */}
        <Image
          src="/assets/images/logo.svg"
          alt="Promptopia Logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Promptopia</p>
      </Link>


      {/* Desktop Navigation */}
      {/* Since this is the navigation for the desktops, 
      On small devices, the nav is going to be hidden;
       When the viewport width reaches the sm breakpoint size or larger, the div will become a flex container and be displayed  */}
      <div className="sm:flex hidden">
        {/* We need to know whether a use is logged in or not, so that we know which buttons to show */}
        {isUserLoggedIn ? (
          // Normally the gap is 3, if the screen size is md (medium) then the gap becomes 5
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>

            {/* The type attribute on a <button> element defines the button's behavior: submit, reset, button */}
            {/* submit: This is the default value if the type attribute is not specified. A button with type="submit" will submit the form data to the server when clicked. */}
            {/* reset: A button with type="reset" will reset all the form's inputs to their initial values. */}
            {/* button: A button with type="button" has no default behavior and will not submit a form. It can be used for JavaScript's click events, as seen in this case. */}
            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>

            <Link href="/profile">
              {/* Render a source of a real user image */}
              <Image
                src="/assets/images/logo.svg"
                width={37}
                height={37}
                className="round-full"
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          <>
            {/* If the user is not logged in, a button of sign in will be provide to the user */}
            {/* To be able to let the user sign in with next-auth, we have to have access to the providers, so need to initiallize getProviders */}
            {/* Check if we have access to providers, if we do, we use the map to get each provider in the providers, and for each provider we provide a button */}
            {providers &&
              Object.values(providers).map((provider) => {
                <button
                  type="button"
                  key={provider.name}
                  // The onClick function will be a call back function that calls the signIn function and pass in the provider's id
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className="black_btn"
                >Sign In</button>;
              })}
          </>
        )}
      </div>
      

      {/* Mobile Navigation */}

    </nav>
  );
};

export default Nav;
