import { NextSeo } from "next-seo";

const AdminTest = title => {
  return (
    <>
      <NextSeo
        title="Admin Test Page"
        description="Admin Test description"
        openGraph={{
          images: [
            {
              url:
                "https://configcdkstack-gpbucketc7c11d3d-qtgzc43jqi2c.s3.us-east-2.amazonaws.com/cover_test-1612906617518.webp"
            }
          ]
        }}
      />
      <div>admin test page</div>
    </>
  );
};

export default AdminTest;
