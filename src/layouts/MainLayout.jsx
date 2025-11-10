import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const MainLayout = () => {
    return (
     <div className=" container mx-auto ">
      
      <header>
        <nav>
         <Navbar></Navbar>
        </nav>
      </header>
      <main className="min-h-screen  pt-20">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
    );
};

export default MainLayout;