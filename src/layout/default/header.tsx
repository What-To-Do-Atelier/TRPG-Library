export default function Header() {
    return (
        <header className="flex justify-between px-6 border-b h-16 flex-none fixed w-full bg-white items-center">
            <div className="flex gap-1">
                <div className="">로고</div>
                <div className="">TRPG Library</div>
            </div>
            <div className="">
                <button className="">로그인</button>
            </div>
        </header>
    );
}
