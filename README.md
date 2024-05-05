# React TypeScript Firebase Authentication Template 🚀

This project serves as a template for implementing authentication in React using TypeScript, Vite, and Firebase. It is designed to help you save time in setting up authentication in your React applications. Whether you are looking to streamline your development process or learn about React, TypeScript, and Firebase authentication, this template provides a comprehensive solution.

## Features 🌟

- **React:** A popular JavaScript library for building user interfaces.
- **TypeScript:** Adds static typing to JavaScript, enhancing code quality and developer productivity.
- **Vite:** A fast, opinionated web dev build tool that includes a lightning-fast dev server.
- **Firebase Authentication:** Utilizes Firebase for seamless user authentication.
- **ESLint:** Linting tool to ensure consistent and clean code following established standards.
- **Prettier:** Code formatter for maintaining consistent code style and readability.
- **Yup Validator:** A JavaScript schema builder for value parsing and validation.
- **Formik:** A popular form library for React to streamline form management.

## 💫 Getting started

1. Clone the repository:

```bash
git clone git@github.com:NiceGuyMe/react-firebase-auth.git
```

2. Install dependencies:

```bash
 cd react-firebase-auth
 yarn
```

3. Set up Firebase:
   Create a Firebase project on the Firebase Console.

4. To run this project, you will need to add the following environment variables to your .env file

`VITE_API_KEY`

`VITE_AUTH_DOMAIN`

`VITE_PROJECT_ID`

`VITE_STORAGE_BUCKET`

`VITE_MESSAGING_SENDER_ID`

`VITE_APP_ID`

5. Start the development server:

```bash
yarn dev
```

## 🌳 Structure

The project structure follows a common React application structure with additional configuration files for TypeScript, ESLint, and Prettier:

```
react-firebase-auth/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── utils/
│   ├── App.tsx
│   ├── firebase.tsx
│   └── main.tsx
│
├── .eslintrc.json
├── .prettierrc
├── tsconfig.json
└── ...
```

## 🖥️ script

Available Scripts
In the project directory, you can run the following scripts:

`yarn dev`: Starts the development server.

`yarn build`: Builds the app for production.

`yarn lint`: Lints the code using ESLint.

`yarn format`: Formats the code using Prettier.

## ✨ Contributing

Contributions are welcome! If you find any issues or want to add features, fork the repository and create a pull request.

Feel free to reach out if you have any questions or need assistance. Happy coding !
