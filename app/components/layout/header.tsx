import Link from "next/link";
import ThemeToggle from "../ui/theme-toggle";

const Header = () => {
  return (
    <>
      <nav className="flex justify-start gap-8 pl-8">
        <Link
          className="hover:rotate-2 hover:border-l-4 hover:font-normal"
          href="/"
        >
          HOME
        </Link>
        <Link
          className="hover:rotate-2 hover:border-l-4 hover:font-normal"
          href="/about/"
        >
          ABOUT
        </Link>
        <Link
          className="hover:rotate-2 hover:border-l-4 hover:font-normal"
          href="/zennblog/"
        >
          ZennBlog
        </Link>
      </nav>
      <div className="flex justify-end pr-8">
        <ThemeToggle />
      </div>
    </>
  );
};

export default Header;
