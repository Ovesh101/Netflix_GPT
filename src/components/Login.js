import { useState } from "react";
import Header from "./Header";

const Login = () => {


  const [isSignIn , setIsSignIn] = useState(true);

  const toggleSignIn = ()=>{
    setIsSignIn(!isSignIn);
  }
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/Images/background.jpg"
          alt="background"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Header */}
      <Header />

      {/* Login Form */}
      <div className="flex items-center justify-center h-full relative z-10">
        <div className="bg-black bg-opacity-80 p-10 rounded-lg shadow-md max-w-md w-full mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">{isSignIn ? "Sign In" : "Sign Up"}</h2>
          <form>
            {!isSignIn && (
                    <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                  </div>
            )}
    
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
            <button className="w-full bg-red-600 py-3 rounded text-white font-semibold hover:bg-red-700 transition duration-200">
            {isSignIn ? "Sign In" : "Sign Up"}
            </button>
            <div className="flex justify-between items-center mt-4 text-gray-400 text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a href="#" className="hover:underline">
                Need help?
              </a>
            </div>
          </form>

          {/* Additional Links */}
          <div className="mt-6 text-gray-400">
            <p>
              {isSignIn ? `New to Netflix? ` : "Already a Member? " }
            
              <a href="#" onClick={toggleSignIn} className="text-white cursor-pointer hover:underline">
              {isSignIn ? "Sign Up" : "Sign In" }
              </a>
            </p>
            <p className="text-xs mt-4">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
              <a href="#" className="text-blue-500 hover:underline"> Learn more.</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
