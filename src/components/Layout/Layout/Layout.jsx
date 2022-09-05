import css from "./Layout.module.css";
import { observer } from "mobx-react-lite";

import Footer from "../Footer/Footer";
// import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const Layout = observer(() => {
    return (
        <>
            {/* <Header /> */}

            <main className={css.main}>
                <Outlet />
            </main>

            <Footer />
        </>
    );
});

export default Layout;
