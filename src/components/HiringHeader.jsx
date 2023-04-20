import React, { useEffect, useState } from "react";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function HiringHeader() {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        let prevScrollPos = window.pageYOffset;

        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos);
            prevScrollPos = currentScrollPos;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div style={{ display: visible ? "block" : "none" }}>
            <div className="hidden lg:block">
                <div className="flex justify-between h-10 px-8 bg-secondary text-text_white ">
                    <div className="flex items-center gap-x-2">
                        <b className="text-sm">Now Hiring : </b>
                        <p className="text-sm"> Looking for a job in Full Stack Development?</p>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <div className="flex items-center gap-x-1">
                            <PhoneEnabledIcon />
                            <strong className="text-sm">+91 487 2080 212</strong>
                        </div>
                        <div className="flex items-center gap-x-1">
                            <LocationOnIcon />
                            <p className="text-sm">Leshore Business Park, Thrissur</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
