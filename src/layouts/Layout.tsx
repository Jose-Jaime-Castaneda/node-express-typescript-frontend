import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <header className=" bg-slate-800">
                <div className=" sm:mx-auto md:mx-auto mx-5 max-w-6xl py-10">
                    <h1 className=" sm:text-4xl text-3xl font-extrabold text-white">
                        Administrador de Productos
                    </h1>
                </div>
            </header>

            <main className=" mt-10 mx-auto max-w-6xl p-10 bg-white shadow">
                <Outlet />
            </main>
        </>
    );
};