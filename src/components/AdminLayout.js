import Link from "next/link";
import { NextSeo } from "next-seo";

const AdminLayout = ({ title = "This might work?", children }) => {
  console.log(title);
  title = "Muppets Rock!";
  console.log(title);
  return (
    <>
      <NextSeo
        title="Admin Layout title"
        description="Admin Layout description"
        openGraph={{
          images: [
            {
              url:
                "https://configcdkstack-gpbucketc7c11d3d-qtgzc43jqi2c.s3.us-east-2.amazonaws.com/photo_1056-1612556732503.webp"
            }
          ]
        }}
      />
      <ul>
        <div display="flex" flexdirection="row">
          <Link href="/admin/">
            <li>Home</li>
          </Link>

          <Link href="/admin/test">
            <li>Test</li>
          </Link>
          <Link href="/admin/trial">
            <li>Trial</li>
          </Link>
          <Link href="/admin/layout-trial">
            <li>Layout Trial</li>
          </Link>
        </div>
      </ul>
      <div>{children}</div>
    </>
  );
};

export default AdminLayout;
