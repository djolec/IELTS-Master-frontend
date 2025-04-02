import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-1 sm:flex-row w-full shrink-0 items-center px-4 md:px-6 border-t bg-white h-16 md:h-12 justify-center">
      <p className="text-xs text-gray-600">
        © {new Date().getFullYear()} IELTS Master. All rights reserved.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link className="text-xs hover:text-blue-600" href="#">
          Terms of Service
        </Link>
        <Link className="text-xs hover:text-blue-600" href="#">
          Privacy
        </Link>
      </nav>
    </footer>
  );
};
export default Footer;
