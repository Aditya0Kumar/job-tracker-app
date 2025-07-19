# job-tracker
 A job tracking and management application.

Full-stack MERN app using MVC for tracking job applications. Features secure authentication, visual stats, dynamic job listings, filters, and responsive search tools.

# Description

A full-stack **MERN** application for managing job applications, featuring secure authentication, dynamic statistics, and responsive search tools.

- Uses **Model-View-Controller (MVC)** architecture for organized logic and separation of concerns  
- Integrates **React Router** for seamless navigation between views  
- Manages global state via **AppContext** and `useReducer` for predictable state handling  
- Secures user sessions using **JWT-based authentication**  
- Handles API requests efficiently with **Axios**  
- Enhances UX with custom **alert system** and **paginated job listings**


# Technologies:
MongoDB, Express, React, Node.js

# Specifications

- User can Register, Log-in, Log-out of the app securely with authentication
- Be able to search through their list of jobs added, with filter search options. Can quickly remove filters in one click.
- User can view and browse their list of jobs.
- Jobs have pagination so the user can browse all their jobs in manageable chunks and won't be overwhelmed.
- Add Job with position, company, location, status, and type as parameters
- Users can update their profile

### 🔧 Key Features   
- 🔐 Secure Register/Login/Logout using JWT  
- 🔍 Searchable and filterable job list with instant reset  
- 📁 Paginated job browsing for improved UX  
- 📝 Add jobs with position, company, location, status, and type  
- ⚙️ Profile update capability  
- 📦 Built with modular MVC design for scalability  
- 🔁 Global state management via Context + `useReducer`  
- 🔔 Alert system for smooth interaction feedback  
- 🔗 Axios-powered RESTful API calls  

# Instructions to run locally

- Note: You are going to need an existing [MongoDB Atlas account](https://www.mongodb.com/), to [Get a Connection String](https://www.mongodb.com/docs/guides/atlas/connection-string/).

**1. Clone this repo (or download zip on GitHub)**

**2. Go to the directory the files are located**

    In the terminal:

    ```powershell
    cd /job-tracker
    ```

**3. Install dependencies**

    In the terminal:

    ```powershell
    npm run install-dependencies
    ```

**4. Create an `.env` file**

Setup values for the following parameters:

- `MONGO_URI` - should be equal to your MongoDB connection string
- `SECRET_KEY` - any string that is secret to you. You can use this [Key Generator](https://www.allkeysgenerator.com/)
- `LIFETIME` - the lifetime of the JWT. This will determine a few things for the app such as for how long a user can stay logged in.
- `PORT` - is the port number you want the express server to listen to. 4000 by default.

Example of a `.env` file:

```js
MONGO_URI="Your_MongoDB_Connection_String"
SECRET_KEY="Secret_Key_You_Generated_Random_Characters"
LIFETIME="1d"
PORT=4000
```

**5. Run the app on localhost:3000**

In the terminal:
```powershell
npm run start
```

Now visit the URL: 

http://localhost:3000/
