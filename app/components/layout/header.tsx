import Link from "next/link";

const Header = () => {
  return (
    //コンポーネント分割予定
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
  );
};

export default Header;
