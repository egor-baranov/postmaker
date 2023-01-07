import {
    Close,
    Favorite,
    FavoriteBorder,
    Instagram,
    Menu,
    Search,
    ShoppingBagOutlined,
    ShoppingCart,
    Telegram
} from "@mui/icons-material"
import clsx from "clsx"
import Link from "next/link"
import React, {ReactNode, useState} from "react"
import styles from "./DropdownMenu.module.css"
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

const DropdownMenu: React.FC<{ onHide: Function }> = ({onHide}) => {
    return (
        <div className={clsx("w-full fixed bg-black/60", styles.menu)} onMouseDown={() => onHide()}>
            <div className="relative h-full flex-row mr-24 bg-white" onMouseDown={(e) => e.stopPropagation()}>
                <div className="flex flex-col pt-16">
                    <HeaderLink link="/" text="Новинки"/>
                    <HeaderLink link="/#shirts" text="Футболки"/>
                    <HeaderLink link="/#hoodies" text="Толстовки"/>
                    <HeaderLink link="/#accessories" text="Аксессуары"/>
                    <HeaderLink link="/#sales" text="Скидки"/>
                </div>

                <a className="flex-1 absolute top-0 right-2 mx-auto leading-none text-black flex-shrink-0">
                    <button className="p-2 rounded-lg hover:bg-gray-100" onClick={() => onHide()}>
                        <Close/>
                    </button>
                </a>
            </div>
        </div>
    )
}


export const MobileNavBar: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);

    function hideMenu() {
        setIsOpen(false)
    }

    return (
        <div className={clsx("w-full fixed z-50 top-0 bg-white", styles.header)}>
            <div className="mx-auto max-w-2xl flex flex-row items-center overflow-auto pr-2">

                <button className="p-2 rounded-lg hover:bg-gray-100" onClick={() => setIsOpen(true)}><Menu/></button>

                <div className="flex-grow"></div>

                <HeaderLinkIcon link="/cart" label="Корзина">
                    <ShoppingBagOutlined/>
                </HeaderLinkIcon>
                <HeaderLinkIcon link="/favorite" label="Избранное">
                    <FavoriteBorder/>
                </HeaderLinkIcon>
                <HeaderLinkIcon link="/search" label="Поиск">
                    <Search/>
                </HeaderLinkIcon>

                {isOpen ? <DropdownMenu onHide={() => setIsOpen(false)}></DropdownMenu> : null}
            </div>
        </div>
    )
}

