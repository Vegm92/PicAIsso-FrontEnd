# PicAIsso (FrontEnd)

PicAIsso is a Single Page Application crafted with **React** and **Redux** that allows users to create and explore a captivating collection of AI generated images. This application showcases a variety of properties for each image, including user inputed prompt and visual style to apply the new image. The intuitive interface empowers users to seamlessly perform **CRUD** operations (Create, Read, Update, Delete) on their image collection.

To ensure a visually appealing and user-friendly experience, the design of the application was meticulously planned using **Figma**. The interface styles, outlined in Figma, were then implemented using **StyledComponents** in each of the created components. Accessibility took center stage throughout development, with a focus on suitable color contrast, alternative text for images, and incorporation of aria-label tags where necessary.

Version control was handled using **GIT**, following a **CI/CD** workflow, including trunk-based development. The development pipeline incorporated husky hooks to oversee all code commits to the master branch. Code quality was maintained with tools like **Eslint** and **Prettier**. Lighthouse was employed to monitor accessibility, best practices, SEO, and performance aspects.

For those interested in exploring the backend code of the application, it is available at the following link: [https://github.com/Vegm92/PicAIsso-BackEnd]

## Components

- Header
- Layout
- Image Card
- Image List Card
- Image Details
- Not found Page
- DeleteButton
- Form
- Loader
- LoginForm
- ProtectedRoute

## Front Production

[https://victor-granda-final-project-front-23.netlify.app/login]
To login with a mockup user use the following credentials:

- email: fakeuser@gmail.com
- password: userpassword

Once logged in you could see the Home page with images already present, and the Create page where you could try the AI image generator

## Technologies Used

- TypeScript
- React
- Redux
- React Router
- Axios
- React Testing Library
- Vite
- Vitest
- Jest
- MSW
- Styled Components
- ESLint
- Prettier
- SonarCloud
- Netlify
- Figma
- Trello
