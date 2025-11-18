import { Outlet } from "react-router";

export function DefaultLayout() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <header className="flex justify-between px-6 border-b h-16 flex-none fixed w-full bg-white items-center">
        <div className="flex gap-1">
          <div className="">로고</div>
          <div className="">TRPG Library</div>
        </div>
        <div className="">
          <button className="">로그인</button>
        </div>
      </header>
      <main className="flex-1 mt-16">
        <Outlet />
      </main>
      <footer className="flex-none border-t p-10 flex justify-center gap-6">
        <div className="flex gap-2">
          <span>로고</span>
          <span className="">&copy; 2025 Whattodo Atelier</span>
        </div>
        <button className="">공지사항</button>
        <button className="">이용약관</button>
        <button className="">개인정보 처리방침</button>
        <button className="">X</button>
        <button className="">Mastodon</button>
        <button className="">Bluesky</button>
        <button className="">Tistory</button>
      </footer>
    </div>
  );
}
