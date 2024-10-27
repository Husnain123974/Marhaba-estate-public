// // pages/login.js

// import React from "react";

// export default function LoginPage() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gray-100">
//       <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-[24px]">
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
//           Login
//         </h2>
        
//         <form>
//           <div className="mb-4">
//             <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="name">
//               Name
//             </label>
//             <input
//               id="name"
//               type="text"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               placeholder="Enter your name"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="password">
//               Password
//             </label>
//             <input
//               id="password"
//               type="password"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               placeholder="Enter your password"
//             />
//           </div>

//           <div className="flex items-center justify-between mb-4">
//             <label className="flex items-center text-sm text-gray-600">
//               <input type="checkbox" className="mr-2 focus:ring-indigo-500" />
//               Remember Me
//             </label>
//             <a href="#" className="text-sm text-indigo-600 hover:underline">
//               Forgot Password?
//             </a>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-200"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }


// pages/login.js
'use client'
import { HttpMethod } from "@/types/enums";
import { fetchFromApi } from "@/utils/apiClient";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";


export default function LoginPage() {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const router = useRouter();


  const getLoginEndpoint = () => {
    return `${process.env.NEXT_PUBLIC_LOGIN_ENDPOINT}`;
  };

  const handleLogin = async (e:any) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Reset error message

    try {

        const endPoint = getLoginEndpoint();
        const options = {
            method: "POST" as HttpMethod,
            body: { email, password } // Passing email and password in the body
          };
    
          const response = await fetchFromApi(endPoint, options);
          console.log("res -------- ",response);
          if (response.message === "Login successful" && response.token) {
            // Save token in cookies
            Cookies.set("authToken", response.token, { expires: 7 }); // expires in 7 days
            Cookies.set("user", JSON.stringify(response.user)); // expires in 7 days
            setIsAuthenticated(true); // Set authenticated status
            router.push("/admin/projects"); // Redirect after successful login
            
          } else {
            setError(response.data.message || "Login failed. Please try again.");
          }
    } catch (err) {
      setError("Login failed. Please check your credentials.");
      console.error("Error during login:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/admin/projects"); // Redirect if already authenticated
    }
  }, [isAuthenticated, router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-[24px]">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="name">
              Email
            </label>
            <input
              id="Email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="mr-2 focus:ring-indigo-500" />
              Remember Me
            </label>
            <a href="#" className="text-sm text-indigo-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-200"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
