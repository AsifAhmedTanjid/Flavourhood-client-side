import React from 'react';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
     <div className="">
      
      <header>
        <nav>
         nav
        </nav>
      </header>
      <main className="min-h-screen">
        <Outlet></Outlet>
      </main>
      <footer>
        footer
      </footer>
    </div>
    );
};

export default MainLayout;