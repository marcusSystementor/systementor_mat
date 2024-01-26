import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";

export const RootLayOut = () => {

    return (
        <>
<Navbar />
<Outlet />

        </>
    )
}