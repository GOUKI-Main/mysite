
import ThemeToggle from "../ui/theme-toggle";
import NavLink from "./nav-link";
import { navItems } from "@/app/connfigs/headerConfig";

const Header = () => {
  return (
    <>
      <nav className="flex justify-start gap-8 pl-8">
        {navItems.map((item) => (
          <NavLink key={item.href} item={item} />
        ))}
      </nav>
      <div className="flex justify-end pr-8">
        <ThemeToggle />
      </div>
    </>
  );
};

export default Header;
