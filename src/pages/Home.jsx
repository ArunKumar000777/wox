import React from "react";
import HiringHeader from "../components/HiringHeader";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import Services from "../components/Services";
import Contact from "../components/Contact";

export default function Home() {
    return (
        <>
            <HiringHeader />
            <Header />
            <NavBar />
            <Banner />
            <Services />
            <Contact />
        </>
    );
}
