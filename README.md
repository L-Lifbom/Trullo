# Trullo

## Description
Task manager application using GraphQL & NoSQL (MongoDB).

## Installation

- Ensure you have **Node.js** installed on your system. Download it [here](https://nodejs.org/en/download/current).

- You will also need a **MongoDB** account to create a database and a cluster. Sign up [here](https://www.mongodb.com/).

- To install the project, clone the repository into your preferred directory using the command:  
  `git clone <repository-url>`

- Navigate to the backend directory by running:  
  `cd backend`

- Install the required dependencies by executing:  
  `npm install`

- Create a `.env` file in the `backend` root directory and add the following environment variables with your MongoDB credentials:  
  `DB_USER=<your-db-user>`  
  `DB_PASSWORD=<your-db-password>`  
  `DB_HOST=<your-db-host>`

- Start the project by running:  
  `npm run dev`

- Finally, open your browser and go to http://localhost:5000/graphql to test queries.

## Database
- MongoDB (NoSQL)
- Jag valde MongoDB databas eftersom det ger mig större flexibilitet. Dessutom använder det sig av JSON-liknande dokument, detta gör integrationen med GraphQL och JavaScript lättare. Du kan också snabbt göra ändringar i din datamodell utan att behöva migrera hela databasen, vilket kan vara nödvändigt i relationsdatabaser som MySQL eller PostgreSQL.

## Technologies
- GraphQL: Ett flexibelt API-frågespråk som låter klienter begära den data de behöver via queries.
- TypeScript: Lägger till statiska typer till JavaScript
- Nodemon: Startar om appen automatiskt under utveckling
- Dotenv: Laddar miljövariabler från en `.env`-fi
- Express: Webbramverk
- Mongoose: ODM för MongoDB
- express-graphql: Middleware för GraphQL API