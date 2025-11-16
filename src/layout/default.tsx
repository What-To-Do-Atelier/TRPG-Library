import { Outlet } from "react-router";

export function DefaultLayout() {
  return (
    <>
      <header className="h-16 bg-red-500">Header</header>
      <Outlet />
    </>
  );
}
