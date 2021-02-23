import {
  PageWithHeader,
  PageWithSidebar,
  Level,
  TopNav,
  SideNav,
  Icon,
  Heading,
  Divider
} from "bumbag";

import { NextSeo } from "next-seo";

const Layout: React.FC<{ title?: string }> = ({
  children,
  title = "Gallery - Gibbs Photography"
}) => {
  console.log(title);

  // if (typeof window === "undefined") return null;

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
      <PageWithHeader
        sticky
        headerHeight="80px"
        backgroundColor="default"
        header={
          <>
            <TopNav>
              <TopNav.Section>
                <Heading>MENU</Heading>
              </TopNav.Section>
            </TopNav>
          </>
        }
      >
        <PageWithSidebar
          defaultIsVisible={false}
          minHeight="calc(100vh - 180px)"
          sidebar={
            <SideNav.Level>
              <Level height="80px" alignX="left" alignY="center">
                <Icon aria-label="logo" icon="gpLogo" fontSize="700" margin="major-1" />
              </Level>
              <Divider />
            </SideNav.Level>
          }
        >
          {children}
        </PageWithSidebar>
      </PageWithHeader>
    </>
  );
};

export default Layout;
