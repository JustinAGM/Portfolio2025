import { Mailbox, MessageCircleMore, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

function MyContact() {

    const menuList = [
        { id: 1, name: "Messenger:", icons: MessageCircleMore, path: "https://m.me/justin.machics", pathName: "m.me/justin.machics" },
        { id: 2, name: "Phone# (Text Message only)", icons: Phone, path: "(+63) 966-084-1971", pathName: "(+63) 966-084-1971" },
        { id: 3, name: "Email", icons: Mailbox, path: "mailto:justin.a.g.machica@gmail.com", pathName: "justin.a.g.machica@gmail.com" },
    ];

    return (
        <div className="">

            <div className="m-auto mt-2 max-w-sm">
                {menuList.map((menu) => {
                    const Icon = menu.icons;
                    return (
                        <Link key={menu.id} href={menu.path}>
                            <div className="bg-cyan-950 flex flex-col items-center text-center rounded-2xl p-4 hover:bg-cyan-500 hover:translate-x-7 transition-all duration-300 ease-in-out mb-4">
                                <span className="w-8 h-8 text-slate-50">
                                    {Icon && <Icon />}
                                </span>
                                <h4 className="font-semibold mb-1 text-slate-50">{menu.name}</h4>
                                <span className="text-sm text-slate-50">{menu.pathName}</span>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    )
}

export default MyContact;