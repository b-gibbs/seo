import { NextSeo } from "next-seo";

const Test = title => {
  return (
    <>
      <NextSeo
        title="Test Page"
        description="Test description"
        openGraph={{
          images: [
            {
              url:
                "https://configcdkstack-gpbucketc7c11d3d-qtgzc43jqi2c.s3.us-east-2.amazonaws.com/cover_test-1612906617518.webp"
            }
          ]
        }}
      />
      <div>test page</div>
    </>
  );
};

export default Test;
