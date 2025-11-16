import { Outlet } from "react-router";

export function DefaultLayout() {
  return (
    <>
      <header className="">Header</header>
      <main className="">
        <Outlet />
      </main>
      <footer className="">Footer</footer>
    </>
  );
}
