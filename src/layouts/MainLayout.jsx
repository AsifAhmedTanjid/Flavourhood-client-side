import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div className="">
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{ style: { zIndex: 99999 } }}
      />

      <header className=" container mx-auto ">
        <nav>
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="min-h-screen pt-20">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
