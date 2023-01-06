import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import type {NextPage} from "next"
import Link from "next/link"
import React from "react";
import {MainLayout} from "../../components/Layout";
import {Card} from "../../components/Card";
import {SearchBar} from "../../components/SearchBar";
import {FavoriteBorder, ShoppingBagOutlined} from "@mui/icons-material";
import {router} from "next/router";
import clsx from "clsx";

const SizeButton: React.FC<{text: string}> = ({text}) => {
    return (
        <button type="button"
                className="text-black bg-white focus:ring-4 font-medium text-sm px-1 py-2 border border-gray-200 rounded-lg">
            {text}
        </button>
    )
}

const Home: NextPage = () => {
    function addToCart() {
        router.push("/cart")
    }

    return (
        <MainLayout>
            <h1 className="text-3xl mb-4 pt-8 pb-4 font-bold">Adidas x Pharrell Williams Basics Hoodie</h1>

            <div className="flex justify-between flex">
                <div
                    className="bg-gray-100 rounded-lg dark:border-gray-100 px-2 py-2 flex flex-auto flex-col justify-around">
                    <a href="#">
                        {/* eslint-disable-next-line jsx-a11y/alt-text */}
                        <Image className="rounded-t-lg" src="/images/img-2.png" width='400px' height='400px'/>
                    </a>
                </div>

                <span
                    className="flex flex-auto flex-col justify-between ml-8 rounded-[16px] border border-gray-200">

                    <h1 className="text-medium mb-4 pt-8 pb-4 font-bold text-center px-2">Adidas x Pharrell Williams Basics Hoodie</h1>

                    <h1 className="text-medium mb-4 pt-0 pb-2 font-medium text-center">Размер</h1>

                    <div className={"grid gap-2 grid-cols-4 px-2"}>
                        <SizeButton text="S"></SizeButton>
                        <SizeButton text="M"></SizeButton>
                        <SizeButton text="L"></SizeButton>
                        <SizeButton text="XL"></SizeButton>
                        <SizeButton text="2XL"></SizeButton>
                    </div>


                    <h1 className="text-medium mb-4 pt-4 pb-2 font-medium text-center">Цвет</h1>

                    <div className={"grid gap-2 grid-cols-2 px-2"}>
                        <SizeButton text="Белый"></SizeButton>
                        <SizeButton text="Серый"></SizeButton>
                        <SizeButton text="Черный"></SizeButton>
                        <SizeButton text="Бежевый"></SizeButton>
                    </div>

                    <h1 className="text-2xl mb-4 pt-8 pb-2 font-bold text-center">7490 р.</h1>

                    <button type="button"
                            onClick={addToCart}
                            className="text-white bg-black focus:ring-4 font-medium rounded-lg text-sm px-5 py-4 mb-2 mx-2">
                          <ShoppingBagOutlined/> В корзину
                    </button>
                </span>
            </div>

        </MainLayout>
    )
}

export default Home