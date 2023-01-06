import {Favorite, FavoriteBorder, Search, ShoppingBagOutlined, ShoppingCart} from "@mui/icons-material"
import clsx from "clsx"
import Link from "next/link"
import React, {ReactNode} from "react"
import styles from "./Header.module.css"
import {HeaderLink, HeaderLinkIcon} from "./Header";

const DropdownButton: React.FC = () => {
    return (
        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button">Dropdown button <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none"
                                                   stroke="currentColor" viewBox="0 0 24 24"
                                                   xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg></button>
    )
}

const DropdownMenu: React.FC = () => {
    return (
    <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700">
        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            <li>
                <a href="#"
                   className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
            </li>
            <li>
                <a href="#"
                   className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
            </li>
            <li>
                <a href="#"
                   className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
            </li>
            <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign
                    out</a>
            </li>
        </ul>
    </div>

)
}

export const MobileNavBar: React.FC = () => {
    return (
        <div className={clsx("w-full fixed z-50 top-0 bg-white", styles.header)}>
            <div className="mx-auto max-w-2xl flex flex-row items-center overflow-auto pr-2">
                <Link href="/">
                    <a className="py-2 px-4 font-bold flex-shrink-0 hover:bg-gray-100 rounded-lg">
                        Новинки
                    </a>
                </Link>
                <HeaderLink link="/#shirts" text="Футболки" />
                <HeaderLink link="/#hoodies" text="Толстовки" />
                <HeaderLink link="/#accessories" text="Аксессуары" />
                <HeaderLink link="/#sales" text="Скидки" />

                <div className="flex-grow"></div>

                <HeaderLinkIcon link="/cart" label="Корзина">
                    <ShoppingBagOutlined />
                </HeaderLinkIcon>
                <HeaderLinkIcon link="/favorite" label="Избранное">
                    <FavoriteBorder />
                </HeaderLinkIcon>
                <HeaderLinkIcon link="/search" label="Поиск">
                    <Search />
                </HeaderLinkIcon>

                {/*<DropdownButton></DropdownButton>*/}
                <DropdownMenu></DropdownMenu>
            </div>
        </div>
    )
}