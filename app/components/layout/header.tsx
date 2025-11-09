import Link from "next/link";

const Header = () => {
  return (
    //コンポーネント分割予定
    <header className="md:text-3xl text-2xl font-sans font-extralight h-20 row-start-1 row-end-2 col-start-1 -col-end-1 z-10 grid grid-cols-2 grid-rows-1 items-center bg-transparent">
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
      {/* <Asobi></Asobi>s */}
    </header>
  );
};

export default Header;
