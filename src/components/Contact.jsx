import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
export default function Contact() {
    return (
        <div className="flex flex-col justify-between px-5 py-6 md:h-48 md:px-24 bg-secondary text-text_white lg:flex-row h-max">
            <p className="md:text-[32px] md:font-bold font-semibold flex h-full items-center text-3xl">
                We offer all kinds of IT services that <br /> ensure your success
            </p>
            <div className="flex items-center mt-4 gap-x-3 lg:mt-0">
                <button className="flex items-center justify-center px-6 py-4 border rounded-md gap-x-1 hover:bg-primary hover:text-text_black">
                    <LocalPhoneIcon style={{ fontSize: "18px" }} />
                    Contact Us
                </button>
                <button className="flex items-center justify-center px-6 py-4 border rounded-md gap-x-1 hover:bg-primary hover:text-text_black">
                    <ModeCommentIcon style={{ fontSize: "18px" }} />
                    Let's Talk
                </button>
            </div>
        </div>
    );
}
