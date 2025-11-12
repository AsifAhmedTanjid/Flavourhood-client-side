import { Link, NavLink } from "react-router";
import "./Navbar.css";
import Button from "./Button";
import icon from "../../assets/favicon.png";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import Loader from "./Loader";
import toast from "react-hot-toast";
import { IoHomeOutline } from "react-icons/io5";
import { MdFavoriteBorder, MdOutlineRateReview, MdOutlineReviews } from "react-icons/md";
import { VscPreview } from "react-icons/vsc";
import { BiLogOut } from "react-icons/bi";

const Navbar = () => {
  const { user, signoutUserFunc, setUser, loading, setLoading } =
    useContext(AuthContext);
  const handleSignout = () => {
    signoutUserFunc()
      .then(() => {
        toast.success("Signout successful");
        setUser(null);
        setLoading(false);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };
  const links = (
    <>
      <li className="mr-2 flex ">
        
        <NavLink to="/"> <IoHomeOutline />Home</NavLink>
      </li>
      <li className="mr-2">
        <NavLink to="/allreviews"> <VscPreview />All Reviews</NavLink>
      </li>

      {/* <li className="mr-2">
        <NavLink to="/myreviews">My Reviews</NavLink>
      </li> */}

      <li className="mr-2">
        <NavLink to="/myfavorites"><MdFavoriteBorder /> My Favorites</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar fixed container mx-auto bg-[#FFF8E7]/80 backdrop-blur-md border-b border-[#ffffff]/30 rounded-b-xl z-50 shadow-2xs">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow  bg-[#FFF8E7]/80 backdrop-blur-md"
          >
            {links}
          </ul>
        </div>
        <NavLink to="/" className="flex items-center gap-3">
          <img src={icon} alt="" className="pl-2 h-10  hidden md:block" />
          <a className="text-3xl font-bold bg-linear-to-r from-[#FF7B00] via-[#FF3D54] to-[#7CB518] bg-clip-text text-transparent">
            FlavorHood
          </a>
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end flex items-center h-12">
        {loading ? (
          <div><Loader  square ={13} offset = {15}></Loader></div>
        ) : user ? (
    <div className="dropdown dropdown-end pr-2">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={user.photoURL} alt={user.displayName} />
        </div>
      </label>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-[#FFF8E7]/80 backdrop-blur-md rounded-box w-52"
      >
        <li>
          <NavLink to="/addreview">
            <MdOutlineRateReview /> Add Review
          </NavLink >
        </li>
        <li>
          <NavLink to="/myreviews"> <MdOutlineReviews /> My Reviews</NavLink>
        </li>
        <li>
          <button
            onClick={handleSignout}
            className="text-red-500 font-bold hover:text-red-700 w-full text-left"
          >
            <BiLogOut />Logout
          </button>
        </li>
      </ul>
    </div>
  ) : (
          <div>
            {/* <a className="btn">Login</a> */}
            <NavLink to="/login">
              <Button>Login</Button>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
