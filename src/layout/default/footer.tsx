export default function Footer() {
    return (
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
    );
}
