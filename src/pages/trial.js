import { NextSeo } from "next-seo";

const Trial = title => {
  return (
    <>
      <NextSeo
        title="Trial Page"
        description="Trial description"
        openGraph={{
          images: [
            {
              url:
                "https://configcdkstack-gpbucketc7c11d3d-qtgzc43jqi2c.s3.us-east-2.amazonaws.com/new-item-1612906654420.webp"
            }
          ]
        }}
      />
      <div>trial page</div>
    </>
  );
};

export default Trial;
