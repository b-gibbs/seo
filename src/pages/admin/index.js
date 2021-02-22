import { NextSeo } from "next-seo";
import Link from "next/link";

export default function AdminHome() {
  return (
    <div>
      <NextSeo
        title="Admin LAYOUT Title"
        description="This will be the Fraggle Rock Explosion"
        canonical="https://www.gibbs-photography.com/"
        twitter={{
          site: "https://grape-nation.com"
        }}
        openGraph={{
          url: "https://www.thegyre.ie/",
          title: "The Fraggles",
          description: "*quiet* *petards*",
          images: [
            {
              url:
                "https://configcdkstack-gpbucketc7c11d3d-qtgzc43jqi2c.s3.us-east-2.amazonaws.com/photo_1066-1612557767905.webp",
              width: 800,
              height: 600,
              alt: "Og Image Alt"
            },
            {
              url:
                "https://configcdkstack-gpbucketc7c11d3d-qtgzc43jqi2c.s3.us-east-2.amazonaws.com/photo_1042-1612553082805.webp",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second"
            },
            {
              url:
                "https://configcdkstack-gpbucketc7c11d3d-qtgzc43jqi2c.s3.us-east-2.amazonaws.com/cover_test-1612906617518.webp"
            },
            { url: "https://www.example.ie/og-image-04.jpg" }
          ]
        }}
      />
      <h1>SEO Added to Page</h1>
      <p>Take a look at the head to see what has been added.</p>
      <p>
        Or checkout how{" "}
        <Link href="/jsonld">
          <a>JSON-LD</a>
        </Link>{" "}
        (Structured Data) is added
      </p>
    </div>
  );
}
