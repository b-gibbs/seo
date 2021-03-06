import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";
import { Provider as AuthProvider } from "next-auth/client";
import { Provider as BumbagProvider, ToastManager } from "bumbag";

import Layout from "../components/Layout";
import AdminLayout from "../components/AdminLayout";
import gpTheme from "../gp-theme";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const apolloClient = useApollo(pageProps);

  const router = useRouter();

  return (
    <>
      <ApolloProvider client={apolloClient}>
        <AuthProvider session={pageProps.session}>
          <BumbagProvider isSSR colorMode="dark" theme={gpTheme}>
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
      </ApolloProvider>
    </>
  );
};

export default App;
