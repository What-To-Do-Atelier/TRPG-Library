import { Outlet } from "react-router";
import Header from "./header";

export function DefaultLayout() {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            <Header />
            <main className="flex-1 mt-16">
                <Outlet />
            </main>
        </div>
    );
}
