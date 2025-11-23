<p align="center">
  <img src="https://raw.githubusercontent.com/Alaleh-kash/farm-client/main/FARM_IMAGE.png" 
       alt="Farm Dashboard Banner" 
       width="100%">
</p>

🌾 Farm Dashboard — React Frontend

A clean and modern React dashboard that displays farm data such as animals, foods, and weather.
This project connects to a .NET 8 Web API backend (FarmApi) and uses Material UI for UI components.

✨ Features
🐮 Animals Module

List of all animals on the farm

Shows name, type, farmer, created date

Beautiful Material UI table

API: GET /farm/animals

🌽 Foods Module

Shows food per animal per day

Displays food name, quantity, animal, farmer

Clean Material UI table

API: GET /farm/foods

☀️ Weather Module

Displays the current farm location weather

Uses API: /farm/weather (mock or real API depending on backend)

Simple modern UI card

🏗️ Project Structure
src/
  pages/
    AnimalsPage.js
    FoodsPage.js
    WeatherPage.js
    Dashboard.js
  api.js
  App.js
  index.js

🚀 Tech Stack
Frontend	Backend	UI
React 18	.NET 8 Web API	Material UI
React Router	SQL Server (via EF Core)	Custom CSS
Fetch API	Entity Framework Core	Icons + Emoji
📦 Installation (Frontend)
git clone https://github.com/Alaleh-kash/farm-client.git
cd farm-client
npm install
npm start


The app will run at:

👉 http://localhost:3000

🔌 API Configuration

Your frontend reads the backend URL from:

src/api.js


Default:

export const API_BASE =
  process.env.REACT_APP_API_URL || "https://farmapi-yfvr.onrender.com/farm";


To use local backend, create a .env file:

REACT_APP_API_URL=http://localhost:5050/farm


Restart React after editing .env.

🔗 Backend Repository (FarmApi)

.NET API backend:
👉 https://github.com/Alaleh-kash/FarmApi

📸 Screenshots

You can add screenshots like this:

## 📸 Screenshots

### Dashboard
![Dashboard](./screenshots/dashboard.png)

### Animals Page
![Animals](./screenshots/animals.png)

### Foods Page
![Foods](./screenshots/foods.png)


👉 Create a folder in your project:

farm-client/screenshots/


Then drag your screenshot images there.

🏷️ Recommended GitHub Topics

Add these in your GitHub repo:

react
reactjs
material-ui
dotnet
dotnet-api
entity-framework-core
sql-server
dashboard
fullstack-project
farm-management

📘 GitHub Repo Description

Copy this text into GitHub description:

A clean full-stack farm management dashboard built with React and .NET 8 Web API. View animals, foods, and weather using a modern Material UI interface.


<p align="center">
  <img src="https://raw.githubusercontent.com/Alaleh-kash/farm-client/main/FARM_IMAGE.png" 
       alt="Farm Dashboard Banner" 
       width="100%">
</p>


❤️ Author

Built with love by Alaleh Kashani (Ala)
✨ Frontend & Mobile Developer (React / React Native / .NET)