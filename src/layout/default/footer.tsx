import { SiX } from "@icons-pack/react-simple-icons";
import { type PropsWithChildren } from "react";

const TextButton = ({ children }: PropsWithChildren) => (
    <button className="cursor-pointer hover:underline hover:underline-offset-6">
        {children}
    </button>
);

const IconButton = ({ children }: PropsWithChildren) => (
    <button className="hover:bg-black/15 p-2 transition rounded-xl">
        {children}
    </button>
);

export default function Footer() {
    return (
        <footer className="flex-none border-t p-10 flex justify-center gap-6 items-center">
            <div className="flex gap-2">
                <span>로고</span>
                <span className="">&copy; 2025 Whattodo Atelier</span>
            </div>
            <TextButton>공지사항</TextButton>
            <TextButton>이용약관</TextButton>
            <TextButton>개인정보 처리방침</TextButton>
            <IconButton>
                <SiX />
            </IconButton>
            <button className="">Mastodon</button>
            <button className="">Bluesky</button>
            <button className="">Tistory</button>
        </footer>
    );
}
