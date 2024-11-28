# React Quiz Application

This project is a React-based quiz application designed to provide an interactive and engaging way for users to answer multiple-choice questions and track their scores. The application is built using modern JavaScript, React, Vite and npm for package management.

![React-Quiz](/public/track-questions-and-points.png)

[Visit Live Demo](https://react-quiz-2023-seven.vercel.app/)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [Authors](#authors)
- [Feedback](#feedback)

## Installation

1. Clone the repository:

```bash
   git clone https://github.com/your-username/react-quiz-app.git
   cd react-quiz-app
```

2. Install dependencies:

```bash
   npm install
```

3. Create a `.env` file in the root directory and add your database url (alternatively set up a JSON server locally with the instructions in usage):

```bash
   VITE_DATABASE_URL=your-db-url
```

## Usage

1. To start the development server:

```bash
   npm start
```

Once the development server is running, you can access the application in your web browser at `http://localhost:3000`.
If you don't have a database for your questions you can follow the JSON instructions below to set one up locally.

### JSON Server (optional)

The application uses a JSON server to fetch quiz questions. To set up the JSON server, follow these steps:

1. Install JSON server:

```bash
   npm install -g json-server
```

2. Create a `db.json` file with your questions:

```json
{
	"questions": [
		{
			"id": "1",
			"question": "Which company invented React?",
			"options": ["Google", "Apple", "Netflix", "Facebook"],
			"correctOption": 3,
			"points": 10
		},
		{
			"id": "2",
			"question": "What's the fundamental building block of React apps?",
			"options": ["Components", "Blocks", "Elements", "Effects"],
			"correctOption": 0,
			"points": 10
		}
	]
}
```

3. Start the JSON server:

```bash
   json-server --watch db.json --port 5000
```

The JSON server will run on `http://localhost:5000`, and the React application will fetch questions from this endpoint.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool and development server.
- **JavaScript (ES6+)**: The programming language used for the application logic.
- **npm**: Node package manager for managing dependencies.
- **JSON Server**: A simple server for serving JSON data.
- **HTML5 & CSS3**: Markup and styling for the application.
- **Axios**: A promise-based HTTP client for making API requests.
- **React Router**: For handling routing within the application.
- **Jest**: A testing framework for JavaScript.
- **React Testing Library**: For testing React components.
- **ESLint**: A tool for identifying and fixing linting issues in JavaScript code.
- **Prettier**: A code formatter to ensure consistent code style.

## Features

- **Multiple-Choice Questions**: Users can answer a variety of multiple-choice questions.
- **Score Tracking**: The application keeps track of the user's score as they progress through the quiz.
- **Dynamic Question Fetching**: Questions are fetched from a JSON server, allowing for easy updates and additions to the question set.
- **Responsive Design**: The application is designed to work well on both desktop and mobile devices.

## Project Structure

```plainText
react-quiz-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Question.js
│   │   ├── Quiz.js
│   │   └── ...
│   ├── contexts/
│   ├── hooks/
│   ├── pages/
│   │   ├── HomePage.js
│   │   ├── QuizPage.js
│   │   └── ...
│   ├── services/
│   │   └── api.js
│   ├── styles/
│   ├── tests/
│   ├── App.js
│   ├── index.js
│   └── ...
├── .env
├── package.json
├── vite.config.js
└── ...
```

- **public/**: Contains the public assets and the main HTML file.
- **src/**: Contains the source code for the application.
  - **assets/**: Contains images, fonts, and other static assets.
  - **components/**: Contains React components used throughout the application.
  - **contexts/**: Contains context providers for state management.
  - **hooks/**: Contains custom React hooks.
  - **pages/**: Contains page components for different routes.
  - **services/**: Contains modules for API calls and other services.
  - **styles/**: Contains CSS and styling files.
  - **tests/**: Contains test files for the application.
  - **App.js**: The main application component.
  - **index.js**: The entry point for the React application.
- **.env**: Environment variables file.
- **package.json**: Contains project metadata and dependencies.
- **vite.config.js**: Configuration file for Vite.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env

- `VITE_DATABASE_URL`: Your Quiz DB URL or the port your JSON server is running on.

## Scripts

- `npm run start`: Starts the React development server.
- `npm run build`: Builds the application for production.
- `npm run test`: Runs the test suite.
- `npm run eject`: Ejects the configuration.
- `npm run server`: Starts the JSON server to serve the questions.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## Authors

- @jakolandio3

## Feedback

If you have any feedback, please reach out to me at [jakobdouglas.dev@gmail.com](mailto:jakobdouglas.dev@gmail.com)
