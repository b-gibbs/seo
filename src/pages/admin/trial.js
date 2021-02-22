import { NextSeo } from "next-seo";

const AdminTrial = title => {
  return (
    <>
      <NextSeo
        title="Admin Trial Page"
        description="Admin Trial description"
        openGraph={{
          images: [
            {
              url:
                "https://configcdkstack-gpbucketc7c11d3d-qtgzc43jqi2c.s3.us-east-2.amazonaws.com/new-item-1612906654420.webp"
            }
          ]
        }}
      />
      <div>admin trial page</div>
    </>
  );
};

export default AdminTrial;
