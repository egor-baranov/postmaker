import {
    Add,
    Close,
    Favorite,
    FavoriteBorder,
    Remove,
    Search,
    ShoppingBagOutlined,
    ShoppingCart
} from "@mui/icons-material"
import clsx from "clsx"
import Link from "next/link"
import Image from "next/image"
import React, {ReactNode} from "react"
import {Button} from "@mui/material";
import {router} from "next/client";

export const RowCard: React.FC<{ label: string, price: string, imageUrl: string }> = ({label, price, imageUrl}) => {
    function openProduct() {
        router.push("/product")
    }

    return (
        <div
            className="px-2 py-2 max-w-2xl bg-gray-100 border border-gray-100 rounded-[16px] dark:border-gray-100 flex items-center">
            <a href="#">
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <Image  onMouseDown = {openProduct} className="rounded-t-lg" src="/images/img-2.png" width='100px' height='100px'/>
            </a>
            <div className="flex-1 min-w-0 px-4 items-start" onMouseDown = {openProduct}>
                <p className="mb-1 font-normal text-gray-900 dark:text-gray-900 text-left">
                    {label}
                </p>

                <p className="mb-1 font-normal text-gray-900 dark:text-gray-900 text-left">
                    Размер: M
                </p>

                <p className="font-normal text-gray-900 dark:text-gray-900 text-left">
                    Цвет: серый
                </p>
            </div>

            <div className="flex flex-col self-stretch min-w-0 items-end">
                <div className="flex flex-auto">
                    <Link href={""}>
                        <a className="leading-none hover:bg-gray-100 flex-shrink-0">
                            <Close/>
                        </a>
                    </Link>
                </div>

                <p
                    className="flex flex-auto text-xl font-bold text-gray-900 dark:text-white text-right">
                    {price} р.
                </p>


                <div className="flex flex-row self-stretch min-w-0 items-center bg-black rounded-lg px-2 py-0.5">
                    <div className="flex flex-0">
                        <Link href={""}>
                            <a className="leading-none text-white flex-shrink-0">
                                <Remove/>
                            </a>
                        </Link>
                    </div>

                    <p
                        className="flex flex-auto font-small text-white dark:text-white text-center px-2">
                        1
                    </p>

                    <div className="flex flex-0">
                        <Link href={""}>
                            <a className="leading-none text-white flex-shrink-0">
                                <Add/>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}