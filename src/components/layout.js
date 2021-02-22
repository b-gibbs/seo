import Link from "next/link";

const Layout = ({ title = "Can I do this?", children }) => {
  console.log(title);
  title = "Fraggles Rock!";
  console.log(title);
  return (
    <>
      <ul>
        <div display="flex" flexDirection="row">
          <Link href="/">
            <li>Home</li>
          </Link>

          <Link href="/test">
            <li>Test</li>
          </Link>
          <Link href="/trial">
            <li>Trial</li>
          </Link>
          <Link href="/jsonld">
            <li>JSON-LD</li>
          </Link>
        </div>
      </ul>
      <div>{children}</div>
    </>
  );
};

export default Layout;
