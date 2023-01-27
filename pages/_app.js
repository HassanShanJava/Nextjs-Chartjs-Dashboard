import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Sidebar> {/* WE are wraping the sidebar in the porject so sidebar is in every page*/}
      <Component {...pageProps} />
    </Sidebar>
  );
}
