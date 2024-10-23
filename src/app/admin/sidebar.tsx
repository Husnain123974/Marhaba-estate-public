
import Link from 'next/link';
import { FiHome, FiClipboard } from 'react-icons/fi'; // Import icons
import Image from 'next/image'; // Import Image for logo
import logo from "../../../public/images/logo.png"

const Sidebar = () => {
  return (
    <aside className="w-64 bg-black h-screen text-white p-4 flex flex-col">
      {/* Logo and Admin Dashboard title at the top */}
      <div className="flex items-center space-x-4 mb-8">
        <Image src={logo} alt="Logo" width={30} height={30} />
        <h1 className="text-md font-semibold">Admin Dashboard</h1>
      </div>
      
      {/* Sidebar options */}
      <div className="mt-8">
        <nav>
          <ul className="space-y-4">
            <li>
              <Link href="/admin/properties" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                <FiHome className="w-5 h-5" />
                <span className="text-lg">Properties</span>
              </Link>
            </li>
            <li>
              <Link href="/admin/projects" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                <FiClipboard className="w-5 h-5" />
                <span className="text-lg">Projects</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
