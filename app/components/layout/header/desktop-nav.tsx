import NavLink from "./nav-link";
import { navItems } from "@/app/connfigs/headerConfig";

const DesktopNav = () => {
  return (
    <nav className="hidden md:flex justify-start gap-8 pl-8">
      {navItems.map((item) => (
        <NavLink key={item.href} item={item} />
      ))}
    </nav>
  );
};

export default DesktopNav;
