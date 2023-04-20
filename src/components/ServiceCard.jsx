import React from "react";
const colors = ["rgb(231,240,247)", "#F6F5F3", "#F6F5F3", "rgb(252,240,228)", "#F5F6F8", "#EFFBFB"];
export default function ServiceCard({ item, index }) {
    const color = colors[index];
    console.log(color, index);
    return (
        <div
            className="flex flex-col items-start justify-center h-56 px-10 transition duration-500 ease-in-out transform rounded-md shadow-lg cursor-pointer md:h-72 hover:scale-105"
            style={{ backgroundColor: color }}
        >
            <img src={item.imageUrl} alt="card-logo" />
            <h2 className="mt-3 text-xl font-bold">{item.title}</h2>
            <p className="mt-3 text-xs">{item.description}</p>
        </div>
    );
}
