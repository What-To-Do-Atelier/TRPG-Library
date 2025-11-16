import { Outlet } from "react-router";

export function DefaultLayout() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <header className="flex justify-between p-2 border-b h-16 flex-none fixed w-full bg-white">
        <div className="">로고 및 타이틀</div>
        <div className="">로그인 버튼</div>
      </header>
      <main className="flex-1 mt-16">
        <Outlet />
      </main>
      <footer className="flex-none">Footer</footer>
    </div>
  );
}
