import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import type {NextPage} from "next"
import Link from "next/link"
import React, {useEffect, useState} from "react";
import {MainLayout} from "../../components/Layout";
import {Card} from "../../components/Card";
import {SearchBar} from "../../components/SearchBar";
import {Favorite, FavoriteBorder, FavoriteOutlined, ShoppingBagOutlined} from "@mui/icons-material";
import {useRouter} from "next/router";
import clsx from "clsx";
import colors from "tailwindcss/colors"

const SizeButton: React.FC<{ text: string, onClick: Function, selected: boolean }> = ({text, onClick, selected}) => {
    return (
        <button
            onMouseDown={() => onClick()}
            type="button"
            className={selected ? "text-white bg-black hover:bg-gray-900 font-medium text-sm px-1 py-2 border border-gray-200 rounded-lg" :
                "text-black bg-white hover:bg-gray-100 font-medium text-sm px-1 py-2 border border-gray-200 rounded-lg"}>
            {text}
        </button>
    )
}

const ProductDetails: React.FC<{ addToCart: any, isMobile: boolean }> = ({addToCart, isMobile}) => {

    const [size, setSize] = useState<string>("L")
    const [color, setColor] = useState<string>("black")
    const [favorite, setFavorite] = useState<boolean>(false)

    function updateSize(newSize: string) {
        setSize(newSize)
    }

    function updateColor(newColor: string) {
        setColor(newColor)
    }

    function addToFavorite() {
        setFavorite(!favorite)

        if (typeof window == 'undefined') {
            return
        }

        const favoriteCount: number = Number(window.localStorage.getItem("favorite-count"))
        const newCount = !favorite ? favoriteCount + 1 : favoriteCount - 1

        window.localStorage.setItem("favorite-count", String(newCount))
    }

    return (
        <span
            className="flex flex-auto flex-col justify-between rounded-[16px] border border-gray-200 pt-8">

                <h1 className="text-medium mb-4 pt-0 pb-2 font-medium text-center">Размер</h1>

                <div className={isMobile ? "grid gap-2 grid-cols-5 px-2" : "grid gap-2 grid-cols-4 px-2"}>
                    <SizeButton text="S" onClick={() => updateSize("S")} selected={size == "S"}></SizeButton>
                    <SizeButton text="M" onClick={() => updateSize("M")} selected={size == "M"}></SizeButton>
                    <SizeButton text="L" onClick={() => updateSize("L")} selected={size == "L"}></SizeButton>
                    <SizeButton text="XL" onClick={() => updateSize("XL")} selected={size == "XL"}></SizeButton>
                    <SizeButton text="2XL" onClick={() => updateSize("2XL")} selected={size == "2XL"}></SizeButton>
                </div>


                <h1 className="text-medium mb-4 pt-4 pb-2 font-medium text-center">Цвет</h1>

                <div className={"grid gap-2 grid-cols-2 px-2"}>
                    <SizeButton text="Белый" onClick={() => updateColor("white")}
                                selected={color == "white"}></SizeButton>
                    <SizeButton text="Серый" onClick={() => updateColor("gray")}
                                selected={color == "gray"}></SizeButton>
                    <SizeButton text="Черный" onClick={() => updateColor("black")}
                                selected={color == "black"}></SizeButton>
                    <SizeButton text="Бежевый" onClick={() => updateColor("beige")}
                                selected={color == "beige"}></SizeButton>
                </div>

                <h1 className="text-2xl mb-4 pt-8 pb-2 font-bold text-center">7490 р.</h1>

                <button type="button"
                        onClick={addToCart}
                        className="text-white bg-black hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-4 mb-2 mx-2">
                      <ShoppingBagOutlined/> В корзину
                </button>

             <button type="button"
                     onClick={addToFavorite}
                     className="text-black bg-gray-100 hover:bg-gray-200 font-medium rounded-lg text-sm px-5 py-4 mb-2 mx-2">
                      {favorite ? <Favorite/> : <FavoriteBorder/>} {favorite ? "В избранном" : "В избранное"}
                </button>
            </span>
    )
}


const Home: NextPage = () => {
    const router = useRouter()

    function addToCart() {
        if (typeof window == 'undefined') {
            return
        }

        const cartCount: number = Number(window.localStorage.getItem("cart-count"))
        window.localStorage.setItem("cart-count", String(cartCount + 1))

        router.push("/cart")
    }

    function getWindowSize() {
        if (typeof window !== "undefined") {
            const {innerWidth, innerHeight} = window;
            return {innerWidth, innerHeight};
        }

        return {innerWidth: 0, innerHeight: 0};
    }

    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    const isMobile = windowSize.innerWidth <= 800

    return (
        <MainLayout>
            <h1 className="text-3xl mb-4 pt-8 pb-4 font-bold">Adidas x Pharrell Williams Basics Hoodie</h1>

            <div className={isMobile ? "flex justify-center flex-col mb-16" : "flex justify-center flex-row mb-16"}>
                <div
                    className={isMobile ?
                        "w-full snap-mandatory snap-x bg-gray-100 rounded-lg dark:border-gray-100 px-2 py-2 flex overflow-x-auto md:overflow-scroll items-center mb-8"
                        : "w-1/2 snap-mandatory snap-x bg-gray-100 rounded-lg dark:border-gray-100 px-2 py-2 flex overflow-x-auto md:overflow-scroll items-center mr-8"
                    }>

                    <section className="flex-shrink-0 snap-center px-16">
                        <img className="rounded-t-lg" src="/images/img-2.png" width= {isMobile ? "300px" : "300px"} height={isMobile ? "300px" : "300px"}/>
                    </section>

                    <section className="flex-shrink-0 snap-center px-16">
                        <img className="rounded-t-lg" src="/images/img-2.png" width= {isMobile ? "300px" : "300px"} height={isMobile ? "300px" : "300px"}/>
                    </section>

                    <section className="flex-shrink-0 snap-center px-16">
                        <img className="rounded-t-lg" src="/images/img-2.png" width= {isMobile ? "300px" : "300px"} height={isMobile ? "300px" : "300px"}/>
                    </section>

                    <section className="flex-shrink-0 snap-center px-16">
                        <img className="rounded-t-lg" src="/images/img-2.png" width= {isMobile ? "300px" : "300px"} height={isMobile ? "300px" : "300px"}/>
                    </section>

                </div>

                <div className={(isMobile ? "mt-8" : "ml-8") + "w-1/2"}>
                    <ProductDetails addToCart={addToCart} isMobile={isMobile}></ProductDetails>
                </div>
            </div>

        </MainLayout>
    )
}

export default Home