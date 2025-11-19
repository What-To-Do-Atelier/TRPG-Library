import {
    SiBluesky,
    SiMastodon,
    SiTistory,
    SiX,
    type IconType,
} from "@icons-pack/react-simple-icons";
import { type PropsWithChildren, type ReactElement } from "react";

const TextButton = ({ children }: PropsWithChildren) => (
    <button className="cursor-pointer hover:bg-black/15 py-1.5 px-2.5 rounded-xl transition">
        {children}
    </button>
);

const IconButton = ({ children }: { children: ReactElement<IconType> }) => {
    return (
        <button className="hover:bg-black/15 p-2 transition rounded-xl cursor-pointer">
            {children}
        </button>
    );
};

export default function Footer() {
    const iconProps = {
        size: 20,
    };

    return (
        <footer className="flex-none border-t p-10 flex justify-center gap-2 items-center">
            <div className="flex gap-2">
                <span>로고</span>
                <span className="">&copy; 2025 Whattodo Atelier</span>
            </div>
            <TextButton>공지사항</TextButton>
            <TextButton>이용약관</TextButton>
            <TextButton>개인정보 처리방침</TextButton>
            <div className="flex gap-2">
                <IconButton>
                    <SiX {...iconProps} />
                </IconButton>
                <IconButton>
                    <SiMastodon {...iconProps} />
                </IconButton>
                <IconButton>
                    <SiBluesky {...iconProps} />
                </IconButton>
                <IconButton>
                    <SiTistory {...iconProps} />
                </IconButton>
            </div>
        </footer>
    );
}
