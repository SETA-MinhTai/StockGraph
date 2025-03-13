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
git clone https://github.com/your-username/StockGraph.git
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

## Build the Project

### Backend

```sh
dotnet publish -c Release -o publish
```

### Frontend

```sh
npm run build
```

The frontend will be built in the `client-app/build` directory.