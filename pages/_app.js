import "../styles/globals.css";
import TanstackQueryProvider from "../providers/TanstackQueryProvider";
import { Toaster } from "react-hot-toast";
import AuthProvider from "../providers/AuthProvider";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Toaster position="top-left" reverseOrder={false} />
      <TanstackQueryProvider>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </TanstackQueryProvider>
    </>
  );
}

export default MyApp;
