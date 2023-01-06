import {Favorite, FavoriteBorder, Remove, Search, ShoppingBagOutlined, ShoppingCart} from "@mui/icons-material"
import clsx from "clsx"
import Link from "next/link"
import Image from "next/image"
import React, {ReactNode, useState} from "react"
import colors from "tailwindcss/colors"
import {OverridableStringUnion} from "@mui/types";
import {SvgIconPropsColorOverrides} from "@mui/material/SvgIcon/SvgIcon";

export const Card: React.FC<{label: string, price: string, imageUrl: string}> = ({label, price, imageUrl}) => {
    const [color, setColor] = useState<string>(colors.gray[100])

    function onMouseEnter() {
        setColor('black')
    }

    function onMouseLeave() {
        setColor(colors.gray[100])
    }

    return (
        <div
            className="relative max-w-sm bg-gray-100 border border-gray-100 rounded-lg dark:border-gray-100 px-2 py-2"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <a href="#">
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <Image className="rounded-t-lg" src="/images/img-2.png" width = '300px' height = '300px'/>
            </a>
            <div className="px-4">
                <p className="mb-3 text-bold text-gray-900 dark:text-gray-900 text-center">
                    {label}
                </p>
                <a href="#">
                    <h5 className=" mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                        {price} р.
                    </h5>
                </a>
            </div>

            <Link href={""}>
                <a className="absolute top-2 right-2 leading-none text-black flex-shrink-0">
                    <FavoriteBorder fontSize="medium" sx={{ color: {color} }}/>
                </a>
            </Link>
        </div>
    )
}