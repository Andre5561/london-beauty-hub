import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import MobileStickyBook from "./MobileStickyBook";
import useSiteInteractions from "../hooks/useSiteInteractions";

export default function SiteLayout() {
  useSiteInteractions();
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <MobileStickyBook />
    </>
  );
}
