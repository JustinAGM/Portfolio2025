'use client'
import Header from "@/app/_components/Header";
import SideNav from "@/app/_components/SideNav";
import React from "react";

function MainPageLayout({ children }) {

    return (
        <div>
            <div className=" fixed md:w-50 hidden md:block bg-slate-100">
                <SideNav />
            </div>
            <div className="md:ml-50">
                <Header />
                {children}
            </div>
        </div>
    );
}

export default MainPageLayout;
