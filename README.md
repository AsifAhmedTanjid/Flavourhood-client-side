# Flavorhood

Welcome to **Flavorhood**, a food review platform where users can explore, add, and manage reviews for various dishes and restaurants. This is the **client-side** React application.

## Live Site
🌐 [Live Demo](https://flavorhood.netlify.app/)  


## Features

### Layout & UI
- **Main Layout:** Navbar and Footer with consistent design across all pages.  
- **Responsive Design:** Works smoothly on mobile, tablet, and desktop devices.  
- **Unique Foodie Design:** Clean, modern, and visually appealing UI.  
- **Hero Section:** Image slider with banners and call-to-action buttons.  
- **Dynamic & Static Sections:** Featured reviews, additional content sections for website purposes.  

### Authentication
- Firebase Authentication (Email/Password + Google)  
- Registration form with validation (password rules enforced)  
- Login with redirect to intended route  
- Toast notifications for success/failure  

### Core Functionality (CRUD)
- **Add Review:** Protected page to submit new reviews.  
- **All Reviews:** Public page showing all reviews with search functionality.  
- **My Reviews:** Protected page showing the logged-in user's reviews with Edit/Delete options.  

### Challenge Features
- **Favorite System:** Users can favorite reviews, displayed on "My Favorites" page.  

### Extra Features
- Loading spinner on data fetch  
- 404 Error page with fun design and “Back to Home” button  
- Clean, unique, and consistent UI  
- Search bar with MongoDB `$regex` querying  

## Tech Stack
- **Frontend:** React 19, Vite  
- **Styling:** Tailwind CSS, DaisyUI, Styled Components
- **Routing:** React Router
- **Icons:** React Icons  
- **State Management / Data Fetching:** @tanstack/react-query   
- **Authentication:** Firebase  
- **Other Libraries:** Swiper, SweetAlert2, React Hot Toast, date-fns  

## Installation

```bash
# Clone the repository
git clone https://github.com/AsifAhmedTanjid/flavorhood-client-side.git

# Go into the project directory
cd flavorhood-client-side

# Install dependencies
npm install

# Add .env file (use .env.example as template)

# Run the development server
npm run dev
```

## Project Dependencies

#### Dependencies List

```
 "dependencies": {
  "@tailwindcss/vite": "^4.1.17",
  "@tanstack/react-query": "^5.90.7",
  "date-fns": "^4.1.0",
  "firebase": "^12.5.0",
  "framer-motion": "^12.23.24",
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "react-hot-toast": "^2.6.0",
  "react-icons": "^5.5.0",
  "react-router": "^7.9.5",
  "styled-components": "^6.1.19",
  "sweetalert2": "^11.26.3",
  "swiper": "^12.0.3",
  "tailwindcss": "^4.1.17"
}
```

#### Dev Dependencies List

```
 "devDependencies":{
  "@eslint/js": "^9.36.0",
  "@types/react": "^19.1.16",
  "@types/react-dom": "^19.1.9",
  "@vitejs/plugin-react": "^5.0.4",
  "daisyui": "^5.4.7",
  "eslint": "^9.36.0",
  "eslint-plugin-react-hooks": "^5.2.0",
  "eslint-plugin-react-refresh": "^0.4.22",
  "globals": "^16.4.0",
  "vite": "^7.1.7"
}

```
