import React from "react";
import { DATA } from "../services-data";
import ServiceCard from "./ServiceCard";
export default function Services() {
    return (
        <div className="px-24">
            <h1>services</h1>
            <div className="grid grid-cols-3 gap-4">
                {DATA.map((item,index) => {
                    return (
                        <div key={item.id}>
                            <ServiceCard item={item} index={index}/>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
