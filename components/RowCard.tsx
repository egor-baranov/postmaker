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
import Image from "next/image"
import React, {ReactNode, useState} from "react"
import {Button} from "@mui/material";
import {useRouter} from "next/router";
import {color} from "@mui/system";

export const RowCard: React.FC<{
    label: string, price: string, imageUrl: string, color: string, size: string, amount: number,
    onRemove: Function, onPlus: Function, onMinus: Function
}> =
    ({label, price, imageUrl, color, size, amount, onRemove, onPlus, onMinus}) => {
        const router = useRouter()
        const [count, setCount] = useState<number>(amount)

        function openProduct() {
            router.push("/product")
        }

        function colorIdToLabel(colorId: string) {
            switch (colorId) {
                case "black":
                    return "Черный"
                case "white":
                    return "Белый"
                case "gray":
                    return "Серый"
                case "beige":
                    return "Бежевый"
            }

            return colorId
        }

        return (
            <div
                className="px-2 py-2 max-w-2xl bg-gray-100 border border-gray-100 rounded-[16px] flex items-center">
                <a href="#">
                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                    <img onMouseDown={openProduct} className="rounded-t-lg"
                         src="https://storage.yandexcloud.net/ovg-store/img-2.png" width='100px'
                         height='100px'/>
                </a>
                <div className="flex-1 min-w-0 px-4 items-start" onMouseDown={openProduct}>
                    <p className="mb-1 font-normal text-gray-900 dark:text-gray-900 text-left">
                        {label}
                    </p>

                    <p className="mb-1 font-normal text-gray-900 dark:text-gray-900 text-left">
                        Размер: {size}
                    </p>

                    <p className="font-normal text-gray-900 dark:text-gray-900 text-left">
                        Цвет: {colorIdToLabel(color)}
                    </p>
                </div>

                <div className="flex flex-col self-stretch min-w-0 items-end">
                    <div className="flex flex-auto">
                        <a className="leading-none hover:bg-gray-100 flex-shrink-0" onMouseDown={() => onRemove()}>
                            <Close/>
                        </a>
                    </div>

                    <p
                        className="flex flex-auto text-xl font-bold text-gray-900 dark:text-white text-right">
                        {price} р.
                    </p>


                    <div className="flex flex-row self-stretch min-w-0 items-center bg-black rounded-lg px-2 py-0.5">
                        <div className="flex flex-0" onClick={() => setCount(count > 0 ? count - 1 : 0)}>
                            <a className="leading-none text-white flex-shrink-0" onMouseDown={() => onMinus()}>
                                <Remove/>
                            </a>
                        </div>

                        <p
                            className="flex flex-auto font-small text-white dark:text-white text-center px-2">
                            {count}
                        </p>

                        <div className="flex flex-0" onClick={() => setCount(count + 1)}>
                            <a className="leading-none text-white flex-shrink-0" onMouseDown={() => onPlus()}>
                                <Add/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }