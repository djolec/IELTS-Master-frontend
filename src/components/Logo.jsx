import { GraduationCap } from "lucide-react";
import { Link } from "react-router";

const Logo = () => {
  return (
    <Link to={"/"} className="flex items-center">
      <GraduationCap className="h-10 w-10 text-blue-600" />
      <span className="ml-2 text-2xl font-bold">IELTS Master</span>
    </Link>
  );
};
export default Logo;
