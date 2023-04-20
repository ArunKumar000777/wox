import React from "react";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function HiringHeader() {
    return (
        <div className="bg-secondary h-10 text-text_white flex justify-between px-8">
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
    );
}
