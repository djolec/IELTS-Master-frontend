import Logo from "./Logo";
import MainNav from "./MainNav";
import MobileNav from "./MobilaNav";

const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b bg-white sticky top-0 z-50">
      <Logo />
      <MainNav />
      <MobileNav />
    </header>
  );
};
export default Header;
