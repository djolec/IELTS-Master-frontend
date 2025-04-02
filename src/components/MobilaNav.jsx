import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";

const MobilaNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <button
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        className="md:hidden p-2 hover:bg-gray-100 rounded-full"
      >
        <Menu className="h-6 w-6" />
        <span className="sr-only">Open menu</span>
      </button>

      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
    </>
  );
};
export default MobilaNav;
