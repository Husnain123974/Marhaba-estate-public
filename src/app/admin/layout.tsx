import Navbar from './navbar';
import Sidebar from './sidebar';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Navbar />
        <main className="p-6 bg-gray-100 flex-grow">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
