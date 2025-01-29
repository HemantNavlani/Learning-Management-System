# LMS Frontend

# 🎓 Learning Management System (LMS)

A **feature-rich Learning Management System** designed to facilitate seamless online learning experiences for students and instructors. Built with a **full-stack** approach using **React, Node.js, Express, and MongoDB**, this LMS supports secure payments, role-based authentication, and dynamic course management.

## 🚀 Features
✅ **User Authentication** – Secure login & role-based access (Students & Instructors)  
✅ **Course Management** – Create, update, and delete courses  
✅ **Payment Integration** – Secure transactions via **Razorpay API**  
✅ **Progress Tracking** – Users can track their learning progress  
✅ **Responsive UI** – Clean and modern interface with **Tailwind CSS**  
✅ **Secure & Scalable** – Optimized for **performance and security**  

## 🛠️ Tech Stack
- **Frontend:** React, Tailwind CSS, DaisyUI  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** JWT (JSON Web Tokens)  
- **Payment Gateway:** Razorpay API  
- **API Testing:** Postman  

## 📸 Screenshots
(Include relevant screenshots of the project here)

## 🎯 Installation & Setup

### 🔹 Prerequisites
- Node.js installed  
- MongoDB running locally or on **MongoDB Atlas**  
- Razorpay account for payment integration  

### 🔹 Clone the repository
```bash
git clone https://github.com/yourusername/lms-project.git
cd lms-project


### 🔹 Install dependencies
bash
Copy
Edit
npm install
cd client
npm install

🔹 Setup Environment Variables
Create a .env file in the root directory and add:

makefile
Copy
Edit
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_SECRET=your_razorpay_secret


🔹 Run the project
Start the backend
bash
Copy
Edit
npm start
Start the frontend
bash
Copy
Edit
cd client
npm start

📌 Future Enhancements
🔹 Live Classes Integration using WebRTC
🔹 Discussion Forums for student interactions
🔹 Assignment & Quiz Modules

🙌 Contributions
Contributions are welcome! Fork the repo, make changes, and submit a pull request.

📩 Contact
For suggestions or collaboration, reach out via [https://www.linkedin.com/in/hemant-navlani-1a5a331b4/] or email hemant.navlani.0506@email.com.

vbnet
Copy
Edit

### Setup Instruction


1. Clone the project 

```
git clone https://github.com/HemantNavlani/Learning-Management-System.git
```

2. Move into the directory
```
cd lms-frontend
```

3. Install dependencies

```
npm i 
```
4. run the server

```
npm run dev
```

### Setup instructions for Tailwind

[Tailwind Official Instruction Doc](https://tailwindcss.com/docs/installation)

1. Install tailwind CSS
```
npm install -D tailwindcss postcss autoprefixer
```

2. Crete Tailwing config file
```
npx tailwindcss init
```

3. Add file extensions to tailwind config file in the contents property

```
./src/**/*.{html,js,jsx,ts,tsx},"./index.html"
```

4. Add the tailwind directives at the top of the `index.css` file
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. Add the following details in the plugin property of tailwind config
```
[require('daisyui'),require("@tailwindcss/line-clamp")]
```

### Adding plugins and dependencies
```
npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-c
hartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
```

### Configure auto import sort eslint


1. Install simple import sort 
```
npm i -D eslint-plugin-simple-import-sort   
```

2. Add rule in `eslint.js`

```
   'simple-import-sort/imports':'error'
```

3. Add simple import sort plugin in `eslint.cjs`

plugins: [...,'simple-import-sort']

4. To enable auto import sort on file save in vscode 

   -Open `settings.json`
   -Add the following config

   ```
   "editor.codeActionsOnSave":{
    "source.fixAll.eslint" : true
   }
   ```
