import { Outlet } from "react-router";
import Navigation from "../layout/Navigation";
import Footer from "../layout/Footer";


function Layout() {
    return (
        <>
            <Navigation />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout