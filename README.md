# StockGraph

## Project Setup

This project consists of two main parts: the backend (C#) and the frontend (React). Follow the steps below to set up, run, and build both parts.

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- .NET SDK (v5.0 or later)

## Backend Setup

### 1. Clone the Repository

```sh
git clone https://github.com/SETA-MinhTai/StockGraph.git
cd StockGraph/StockGraph
```

### 2. Install dependencies

```sh
dotnet restore
```

### 3. Build the Backend

```sh
dotnet build
```

### 4. Run the Backend

```sh
dotnet run
```

The backend will be running on `http://localhost:7261`.
You can also view api documentation at `http://localhost:7261/swagger/index.html`.

## Frontend Setup

### 1. Navigate to the Frontend Directory

```sh
cd ../client-app
```

### 2. Install dependencies

```sh
npm install
```

### 3. Run the Frontend

```sh
npm start
```

The frontend will be running on `http://localhost:3000`.

## Build the whole Project for optimal performance
Make sure you stop the backend and frontend before building the project.

### Backend

Navigate to backend directory:

```sh
cd ../StockGraph
```

```sh
dotnet publish -c Release -o publish
```

The backend will be built in the `publish` directory.
We can run the backend by executing the following command:

```sh
cd publish
StockGraph.exe
```

### Frontend

Navigate to frontend directory and run the following command:
```sh
npm run build
```

The frontend will be built in the `client-app/build` directory.
We can serve the frontend by executing the following command:

```sh
serve -s build
```

=> The project now can be accessed at `http://localhost:3000`.