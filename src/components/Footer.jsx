
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <Link to="/" className="flex items-center mb-4">
            <img src="/megamerx-logo.png.png" alt="MegaMerx" className="w-12 h-12" />
            <span className="ml-2 text-2xl font-bold text-red-500 italic">
              Mega<span className="text-orange-500">Merx</span>
            </span>
          </Link>
          <p className="text-sm">
            MegaMerx is your trusted B2B marketplace for top brands, hot deals, and quality products.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-orange-400">Home</Link>
            </li>
            <li>
              <Link to="/all-categories" className="hover:text-orange-400">Categories</Link>
            </li>
            <li>
              <Link to="/auth/login" className="hover:text-orange-400">Login</Link>
            </li>
            <li>
              <Link to="/auth/register" className="hover:text-orange-400">Register</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Contact</h3>
          <p className="text-sm">123 MegaMerx Avenue</p>
          <p className="text-sm">Dhaka, Bangladesh</p>
          <p className="text-sm mt-2">Email: info@megamerx.com</p>
          <p className="text-sm">Phone: +880-1234-567890</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-orange-400">
              <FaFacebookF size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-orange-400">
              <FaInstagram size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-orange-400">
              <FaTwitter size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-orange-400">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center text-sm py-4 mt-6">
        &copy; {new Date().getFullYear()} MegaMerx. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
