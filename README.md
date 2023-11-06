This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Additional Dependencies
- bcrypt use to hash passwords, mongodb for the database and mongoose for helping manage mongodb, and next-auth.
```sh
npm install bcrypt mongodb mongoose next-auth
```

## Folder structure
- app: the main folder
- components: for the reuseable components
- models: for mongodb and mongoose database models
- utils: for utility functions
- .env: store secure keys

## About Promptopia
- Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts. 
- It allows users to explore a list of phenomenal prompts that they can pass on to chatGPT.
- This is an application that you can discover and share AI prompts.
- Functionalities:
    - Login using next-auth and Google Authentication
    - After in, users can browsing all of the best prompts
    - The app allows you to search for tags, usernames and prompt content
    - From every single prompt card, users can copy it to clipboard, or if the user is the creator of this card, the user can edit this specific prompt as well as delete it
- This is full-stack crud application build with Next.js/



