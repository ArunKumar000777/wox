import React from "react";
import { DATA } from "../services-data";
import ServiceCard from "./ServiceCard";
export default function Services() {
    return (
        <div className="px-5 md:px-24 pb-28">
            <div className="flex flex-col items-center mt-12">
                <strong className="text-sm capitalize text-text_gray">SERVICES WE DELIVER</strong>
                <h2 className="md:text-[32px] md:font-bold font-semibold p-12 text-center text-3xl md:leading-[50px]">
                    Preparing for your success, we provide truly <br/> prominent IT solutions.
                </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
                {DATA.map((item, index) => {
                    return (
                        <div key={item.id}>
                            <ServiceCard item={item} index={index} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
