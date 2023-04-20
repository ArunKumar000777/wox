import React, { useState } from "react";

export default function NavBar() {
   
    return (
        <nav className={`w-full hidden h-12 px-24 border-b bg-accent border-primary md:block sticky top-0 z-30`}>
            <ul className="flex items-center justify-between h-full text-text_white">
                <li className="self-center">
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About Us</a>
                </li>
                <li>
                    <a href="#">Services</a>
                </li>
                <li>
                    <a href="#">Technology</a>
                </li>
                <li>
                    <a href="#">Careers</a>
                </li>
                <li>
                    <a href="#">Blogs</a>
                </li>
                <li>
                    <a href="#">Our Works</a>
                </li>
                <li>
                    <a href="#">Contact Us</a>
                </li>
            </ul>
        </nav>
    );
}
