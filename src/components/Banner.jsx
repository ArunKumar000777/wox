import React from "react";

export default function Banner() {
    return (
        <div
            style={{
                backgroundImage: `linear-gradient(rgba(41, 38, 38, 0.116), rgba(34, 32, 32, 0.796)),url('images/bannerImage.jpg')`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                // backdropFilter: `brightness(10%)`,
            }}
            className="h-[560px]"
        >
            <div className="flex flex-col items-center justify-center h-full">
                <h1 className="lg:text-[80px] text-text_white font-bold max-w-[1000px] md:text-6xl text-5xl text-center px-3 md:leading-[100px] leading-[50px]">Kerala's Leading Web <br/> Design Company</h1>
                {/* <h1 className="lg:text-[80px] text-text_white font-bold max-w-[1000px] md:text-6xl text-5xl text-center px-3">Design Company</h1> */}
                <p className="text-xl text-text_white max-w-[1000px] text-center mt-14">
                    Global Web Designing Company That Provides Full-cycle Software Development Services, E-commerce & Mobile
                    App Development Services.
                </p>
            </div>
        </div>
    );
}
