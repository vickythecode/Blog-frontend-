
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-purple-800 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div>
          <Link href="/" passHref legacyBehavior>
              <a className="text-white text-xl font-bold">BLOGGY</a>
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
          <Link href="/" passHref legacyBehavior>
              <a className="text-white hover:text-purple-300">Home</a>
            </Link>
            <Link href="/" passHref legacyBehavior>
              <a className="text-white hover:text-purple-300">About</a>
            </Link>
            <Link href="/" passHref legacyBehavior>
              <a className="text-white hover:text-purple-300">Services</a>
            </Link>
            <Link href="/" passHref legacyBehavior>
              <a className="text-white hover:text-purple-300">Contact</a>
            </Link>
          </div>
          <div className="md:hidden">
            {/* Add your responsive menu button/icon here */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
