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
import {useRouter} from "next/router";

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
    const router = useRouter()

    return (
        <div className={clsx("w-full fixed bg-black/60", styles.menu)} onMouseDown={() => onHide()}>
            <div className="relative h-full flex-row mr-24 bg-white" onMouseDown={(e) => e.stopPropagation()}>
                <div className="flex flex-col pt-16">
                    <button className="my-2 mx-4 py-2 px-4 rounded-lg hover:bg-gray-100 flex-shrink-0"
                            onClick={() => {
                                router.push("/");
                                onHide()
                            }}>
                        Новинки
                    </button>

                    <button className="my-2 mx-4 py-2 px-4 rounded-lg hover:bg-gray-100 flex-shrink-0"
                            onClick={() => {
                                router.push("/#shirts");
                                onHide()
                            }}>
                        Футболки
                    </button>

                    <button className="my-2 mx-4 py-2 px-4 rounded-lg hover:bg-gray-100 flex-shrink-0"
                            onClick={() => {
                                router.push("/#hoodies");
                                onHide()
                            }}>
                        Толстовки
                    </button>

                    <button className="my-2 mx-4 py-2 px-4 rounded-lg hover:bg-gray-100 flex-shrink-0"
                            onClick={() => {
                                router.push("/#accessories");
                                onHide()
                            }}>
                        Аксессуары
                    </button>

                    <button className="my-2 mx-4 py-2 px-4 rounded-lg hover:bg-gray-100 flex-shrink-0"
                            onClick={() => {
                                router.push("/#sales");
                                onHide()
                            }}>
                        Скидки
                    </button>
                </div>

                <a className="flex-1 absolute top-0 right-0 mx-auto leading-none text-black flex-shrink-0">
                    <button className="p-2 rounded-lg hover:bg-gray-100" onClick={() => onHide()}>
                        <Close sx={{fontSize: "32px"}}/>
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

                <button className="p-2 rounded-lg hover:bg-gray-100" onClick={() => setIsOpen(true)}>
                    <Menu sx={{fontSize: "32px"}}/>
                </button>

                <div className="flex-grow"></div>

                <Link href="/cart">
                    <a className="p-2 rounded-lg leading-none hover:bg-gray-100 flex-shrink-0" aria-label="Корзина">
                        <ShoppingBagOutlined sx={{fontSize: "32px"}}/>
                    </a>
                </Link>

                <Link href="/favorite">
                    <a className="p-2 m-2 rounded-lg leading-none hover:bg-gray-100 flex-shrink-0" aria-label="Избранное">
                        <FavoriteBorder sx={{fontSize: "32px"}}/>
                    </a>
                </Link>

                <Link href="/search">
                    <a className="p-2 rounded-lg leading-none hover:bg-gray-100 flex-shrink-0" aria-label="Поиск">
                        <Search sx={{fontSize: "32px"}}/>
                    </a>
                </Link>

                {isOpen ? <DropdownMenu onHide={() => setIsOpen(false)}></DropdownMenu> : null}
            </div>
        </div>
    )
}

