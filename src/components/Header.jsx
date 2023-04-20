import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    }, [isOpen]);
    return (
        <div className="flex items-center h-20 bg-primary">
            <img src="https://woxro.com/public/assets/png/woxrologo.png" alt="woxro-logo" className="w-52 h-14 ml-14" />
            <div className="absolute right-5 md:hidden" onClick={() => setIsOpen(!isOpen)}>
                <MenuIcon style={{ fontSize: "35px" }} />
            </div>
            <div className={`absolute top-0 bottom-0 right-0 w-48 bg-secondary ${isOpen ? "block " : "hidden"} pl-4 pt-4 `}>
                <CloseIcon style={{ color: "gray" }} onClick={() => setIsOpen(!isOpen)} />
                <ul className="flex flex-col mt-10 font-semibold text-text_gray gap-y-2">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">About Us</a>
                    </li>
                    <li>
                        <a href="/">Services</a>
                    </li>
                    <li>
                        <a href="/">Technology</a>
                    </li>
                    <li>
                        <a href="/">Careers</a>
                    </li>
                    <li>
                        <a href="/">Blogs</a>
                    </li>
                    <li>
                        <a href="/">Our Works</a>
                    </li>
                    <li>
                        <a href="/">Contact Us</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
