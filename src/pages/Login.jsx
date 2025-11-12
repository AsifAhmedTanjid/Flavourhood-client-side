import React, { useContext, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    signInWithEmailAndPasswordFunc,
    setLoading,
    setUser,
    signInWithGoogleFunc,
  } = useContext(AuthContext);
  const emailRef = useRef();

  const location = useLocation();
  const from = location.state || "/";
  const navigate = useNavigate();

  const handleSignin = (e) => {
    e.preventDefault();
    const email = e.target.email?.value;
    const password = e.target.password?.value;
    signInWithEmailAndPasswordFunc(email, password)
      .then((res) => {
        // console.log(res);
        setLoading(false);
        setUser(res.user);
        toast.success("Login successful!", {
          duration: 1500, //
        });
        setTimeout(() => {
          navigate(from);
        }, 1500);
      })
      .catch((e) => {
        // console.log(e);
        toast.error(e.message);
        setLoading(false);
      });
  };

  const handleTogglePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleGoogleSignin = () => {
    // console.log("google signin");
    signInWithGoogleFunc()
      .then((res) => {
        // console.log(res);
        setLoading(false);
        setUser(res.user);
        toast.success("Login successful!", {
          duration: 1500,
        });

        
          navigate(from)
        
      })
      .catch((e) => {
        // console.log(e);
        toast.error(e.message);
        setLoading(false);
      });
  };


  return (
    <div className="hero min-h-screen">
      {/* <Toaster position="top-center" reverseOrder={false} /> */}
      <div className="hero-content flex-col ">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-[#FF7B00]">
            Join the Table Again!
          </h1>
        </div>
        <div className="card bg-[#FFFDF5] w-full max-w-xl  shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSignin}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  name="email"
                  ref={emailRef}
                  type="email"
                  className="input w-full"
                  placeholder="Email"
                  required
                />
                <label className="label">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="input w-full"
                    placeholder="Password"
                    name="password"
                    required
                  />
                  <button
                    className="absolute top-3 right-5 z-10"
                    onClick={handleTogglePassword}
                  >
                    {showPassword ? (
                      <FaEye size={16}></FaEye>
                    ) : (
                      <FaEyeSlash size={16}></FaEyeSlash>
                    )}
                  </button>
                </div>
    

                <button className="bg-[#FF7B00] hover:bg-[#FF944D] text-white font-medium px-6 py-2 rounded-md mt-4 btn text-base">
                  Login
                </button>
              </fieldset>
            </form>

            <p>
              Haven’t Joined the Table Yet?{" "}
              <Link to="/register" className="text-blue-700 underline">
                Register
              </Link>
            </p>
           <button
              onClick={handleGoogleSignin}
              className="btn bg-[#fec195] text-black border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fec195"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
