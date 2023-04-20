import React from "react";
const colors = ["rgb(231,240,247)", "#F6F5F3", "#F6F5F3", "rgb(252,240,228)", "#F5F6F8", "#EFFBFB"];
export default function ServiceCard({ item, index }) {
    const color = colors[index];
    console.log(color, index);
    return (
        <div className="  flex flex-col items-start justify-center p-10 rounded-md" style={{ backgroundColor: color }}>
            <img src={item.imageUrl} alt="card-logo"/>
            <h2 className="text-xl font-bold">{item.title}</h2>
            <p className="text-xs mt-3">{item.description}</p>
        </div>
    );
}