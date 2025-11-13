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
- **State Management / Data Fetching:** @tanstack/react-query   
- **Authentication:** Firebase  
- **Other Libraries:** Swiper, SweetAlert2, React Hot Toast, date-fns  

## Installation

```bash
# Clone the repository
git clone https://github.com/your-username/flavorhood-client-side.git

# Go into the project directory
cd flavorhood-client-side

# Install dependencies
npm install

# Add .env file (use .env.example as template)

# Run the development server
npm run dev
