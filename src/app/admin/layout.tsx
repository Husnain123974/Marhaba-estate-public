// import Navbar from './navbar';
// import Sidebar from './sidebar';

// const AdminLayout = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <div className="flex min-h-screen">
//       <Sidebar />
//       <div className="flex flex-col w-full">
//         <Navbar />
//         <main className="p-6 bg-gray-100 flex-grow">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default AdminLayout;
'use client'
import { usePathname } from 'next/navigation';
import Navbar from './navbar';
import Sidebar from './sidebar';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  
  // Check if the current route is '/admin/login'
  const isLoginPage = pathname.includes('login');

  return (
    <div className="flex min-h-screen">
      {!isLoginPage && <Sidebar />}
      <div className="flex flex-col w-full">
        {!isLoginPage && <Navbar />}
        <main className={`p-6 bg-gray-100 flex-grow ${isLoginPage ? 'justify-center items-center' : ''}`}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
