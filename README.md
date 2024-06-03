# SPA Application with Authentication and CRUD Operations

This project is a Single Page Application (SPA) built using React, Redux, Redux Saga, TypeScript, and Material-UI. The application consists of an authentication page and a data table that allows users to perform CRUD operations on records fetched from an API.

## Features

- **Authentication**:
  - Users can log in using a username and password.
  - Displays error messages for failed login attempts.
  - Maintains user session after page reload.
  - Provides a logout button to end the session.
- **Data Table**:
  - Displays records fetched from the server in a paginated table.
  - Supports Create, Read, Update, and Delete (CRUD) operations.
  - Provides real-time updates to the table after each CRUD operation.
  - Displays loading indicators during data fetching and submission.
  - Displays error messages for failed data operations.
  - Adapts to mobile and tablet views by displaying records as cards.
- **Responsive Design**:
  - Uses Material-UI components for a modern and responsive user interface.
  - Formats dates in a compact format with time displayed in tooltips.

## Technologies Used

- React
- Redux
- Redux Saga
- TypeScript
- Material-UI

<img src="https://skillicons.dev/icons?i=react,redux,ts,mui" />

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/eugenepokalyuk/react-pryaniky.git
   cd react-pryaniky 
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run start
   ```

4. **Open the application**:

   Open your browser and navigate to `http://localhost:3000`.

## Project Structure

src/
├── assets/
│   └── fonts/
│       └── gorizont/
│           ├── gorizont-font.eot.ttf
│           ├── gorizont-font.eot.woff
│           └── gorizont-font.eot.woff2
├── components/
│   ├── App.tsx
│   ├── AuthForm.tsx
│   ├── DataCard.tsx
│   ├── DataDialogs.tsx
│   ├── DataTable.tsx
│   ├── LoadingModal.tsx
├── pages/
│   ├── LoginPage.tsx
│   └── DataTablePage.tsx
├── services/
│   └── api.ts
├── store/
│   ├── actions/
│   │   ├── authActions.ts
│   │   ├── dataActions.ts
│   │   └── types.ts
│   ├── reducers/
│   │   ├── authReducer.ts
│   │   ├── dataReducer.ts
│   │   └── index.ts
│   ├── sagas/
│   │   ├── authSaga.ts
│   │   ├── dataSaga.ts
│   │   └── index.ts
│   └── index.ts
├── utils/
│   └── consts.ts
└── index.css
└── index.tsx


### Explanation of Key Files

- **`src/utils/consts.ts`**: Contains constants such as the API host URL.
- **`src/store/index.ts`**: Sets up the Redux store with Saga middleware.
- **`src/store/reducers/index.ts`**: Combines all the reducers.
- **`src/store/sagas/index.ts`**: Combines all the sagas.
- **`src/store/actions/dataActions.ts`**: Defines actions for data operations.
- **`src/components/AuthForm.tsx`**: Component for user authentication.
- **`src/components/DataTable.tsx`**: Component for displaying data in a table with CRUD operations.
- **`src/components/DataCard.tsx`**: Component for displaying data in card format on mobile and tablet views.
- **`src/components/DataDialogs.tsx`**: Component for managing dialogs for adding, editing, and deleting records.
- **`src/components/LoadingModal.tsx`**: Component for displaying a loading modal.
- **`src/pages/DataTablePage.tsx`**: Main page component that ties everything together.
- **`src/main.tsx`**: Entry point for the React application.

## Comments

- The application uses Redux Saga for handling side effects like data fetching and submitting.
- Material-UI is used for a modern and responsive UI.
- Date-fns is used for formatting dates and times.
- The application ensures a smooth user experience with real-time updates and error handling.


## Deployment

To build the application for production, run:

```bash
npm run build
```

The built files will be in the `dist` directory, which can be deployed to any static hosting service.