// // hoc/withAuth.js
// import { useRouter } from 'next/navigation';
// import { useEffect, useState } from 'react';
// import Cookies from 'js-cookie';
// import { fetchFromApi } from './apiClient';

// const withAuth = (WrappedComponent) => {

//   // Function to call the verifyToken endpoint using fetchFromApi
// async function validateTokenWithAPI(token) {
//   if (!token) return false;

//   try {
//     const data = await fetchFromApi('/api/verifytoken', {
//       method: 'POST',
//       body: { token },
//     });

//     return data.message === 'Token is valid';
//   } catch (error) {
//     console.error("Token verification error:", error);
//     return false;
//   }
// }

//   return (props) => {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);
//     const router = useRouter();

//     useEffect(async () => {
//       const token = Cookies.get('authToken');  
//         // Verify token by calling the verifyToken endpoint
//       const isValidToken = await validateTokenWithAPI(token);

//       console.log("Token ----- ", token);
//       console.log("Is Valid  ----- ", isValidToken);
      
//       if (token && isValidToken) {
//         setIsAuthenticated(true);
//       } else {
//         router.push('/admin/login');
//       }
//     }, []);

//     // If not authenticated, render null or a loader
//     if (!isAuthenticated) return null;

//     // Render the wrapped component if authenticated
//     return <WrappedComponent {...props} />;
//   };
// };

// export default withAuth;


 // hoc/withAuth.js
import { useRouter } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import Cookies from 'js-cookie';
import { fetchFromApi } from './apiClient';

const withAuth = (WrappedComponent) => {

  const validateTokenWithAPI = async (token) => {
    if (!token) return false;

    try {
      const data = await fetchFromApi('/api/verifytoken', {
        method: 'POST',
        body: JSON.stringify({ token }),
        headers: { 'Content-Type': 'application/json' },
      });
      return data.message === 'Token is valid';
    } catch (error) {
      console.error("Token verification error:", error);
      return false;
    }
  };

  return (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null); // Initialize as null
    const router = useRouter();
    const hasValidatedToken = useRef(false);

    useEffect(() => {
      if (hasValidatedToken.current) return;
      hasValidatedToken.current = true;

      const checkAuth = async () => {
        const token = Cookies.get('authToken');
        const isValidToken = await validateTokenWithAPI(token);

        if (token && isValidToken) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false); // Set false to trigger redirect
        }
      };

      checkAuth();
    }, []);

    // Redirect if not authenticated
    if (isAuthenticated === false) {
      router.push('/admin/login');
      return null;
    }

    // Show loading or nothing while checking authentication
    if (isAuthenticated === null) return null;

    // Render the wrapped component if authenticated
    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
