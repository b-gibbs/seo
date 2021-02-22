import Link from "next/link";
import { NextSeo } from "next-seo";

const Layout = ({ title = "Can I do this?", children }) => {
  console.log(title);
  title = "Fraggles Rock!";
  console.log(title);
  return (
    <>
      <NextSeo
        title="Layout title"
        description="Layout description"
        openGraph={{
          images: [
            {
              url:
                "https://configcdkstack-gpbucketc7c11d3d-qtgzc43jqi2c.s3.us-east-2.amazonaws.com/photo_1047-1612554843501.webp"
            }
          ]
        }}
      />
      <ul>
        <div display="flex" flexdirection="row">
          <Link href="/">
            <li>Home</li>
          </Link>

          <Link href="/test">
            <li>Test</li>
          </Link>
          <Link href="/trial">
            <li>Trial</li>
          </Link>
          <Link href="/layout-trial">
            <li>Layout Trial</li>
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
