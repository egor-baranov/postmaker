import {Favorite, FavoriteBorder, Search, ShoppingBagOutlined, ShoppingCart} from "@mui/icons-material"
import clsx from "clsx"
import Link from "next/link"
import React, { ReactNode } from "react"
import styles from "./Header.module.css"
import {MobileNavBar} from "./MobileNavBar";

export const HeaderLink: React.FC<{ link: string; text: string }> = ({ link, text }) => {
    return (
        <Link href={link} >
            <a className="my-2 py-2 px-4 rounded-lg hover:bg-gray-100 flex-shrink-0">{text}</a>
        </Link>
    )
}

export const HeaderLinkIcon: React.FC<{ link: string; label: string; children: ReactNode }> = ({ link, label, children }) => {
    return (
        <Link href={link}>
            <a className="p-2 rounded-lg leading-none hover:bg-gray-100 flex-shrink-0" aria-label={label}>
                {children}
            </a>
        </Link>
    )
}

export const Header: React.FC = () => {
    return (
        <div className={clsx("w-full fixed z-50 top-0 bg-white", styles.header)}>
            <div className="mx-auto w-full bg-white flex flex-row items-center pr-2">
                <div className="flex-grow"></div>
            </div>
        </div>
    )
}