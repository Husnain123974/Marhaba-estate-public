 
'use client'; 
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { FiLogOut } from 'react-icons/fi'; // For logout icon

const Navbar = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Logic to logout user
   Cookies.remove('authToken');
   Cookies.remove('user');
   
    router.push('/admin/login/');
  };

  return (
    <nav className="w-full bg-black h-16 flex items-center justify-end px-4 text-white">
      {/* Right side: Logout button */}
      <button onClick={handleLogout} className="focus:outline-none">
        <FiLogOut className="w-6 h-6" />
      </button>
    </nav>
  );
};

export default Navbar;
