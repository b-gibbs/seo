/**
 * Using a custom _app.js with next-seo you can set default SEO
 * that will apply to every page. Full info on how the default works
 * can be found here: https://github.com/garmeeh/next-seo#default-seo-configuration
 */
import Head from "next/head";
import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";
import { Provider as AuthProvider } from "next-auth/client";
import { Provider as BumbagProvider, ToastManager } from "bumbag";
import gpTheme from "../gp-theme";
import SEO from "../../next-seo.config";
import Layout from "../components/layout";
import AdminLayout from "../components/AdminLayout";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    /* Here we call NextSeo and pass our default configuration to it  */
    <>
      <AuthProvider session={pageProps.session}>
        <BumbagProvider isSSR colorMode="dark" theme={gpTheme}>
          <Head>
            <link
              rel="preload"
              href="/fonts/raleway-v19-latin-700.woff2"
              as="font"
              type="font/woff2"
              crossOrigin="anonymous"
            />
            <link href="/static/favicons/favicon.ico" rel="shortcut icon" />
            <link href="/static/favicons/site.webmanifest" rel="manifest" />
            <link
              href="/static/favicons/apple-touch-icon.png"
              rel="apple-touch-icon"
              sizes="180x180"
            />
            <link
              href="/static/favicons/favicon-32x32.png"
              rel="icon"
              sizes="32x32"
              type="image/png"
            />
            <link
              href="/static/favicons/favicon-16x16.png"
              rel="icon"
              sizes="16x16"
              type="image/png"
            />
          </Head>
          <DefaultSeo {...SEO} />
          {router.pathname.startsWith(`/admin/`) ? (
            <AdminLayout>
              <Component {...pageProps} />
            </AdminLayout>
          ) : (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          )}

          <ToastManager />
        </BumbagProvider>
      </AuthProvider>
    </>
  );
}
