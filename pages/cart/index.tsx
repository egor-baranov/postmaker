import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import type {NextPage} from "next"
import Link from "next/link"
import React from "react";
import {MainLayout} from "../../components/Layout";
import {Card} from "../../components/Card";
import {SearchBar} from "../../components/SearchBar";
import {RowCard} from "../../components/RowCard";

const Home: NextPage = () => {

    function cartCount() {
        if (typeof window == 'undefined') {
            return 0
        }

        const cartCount: number = Number(window.localStorage.getItem("cart-count"))
        return cartCount
    }

    return (
        <MainLayout>
            <h1 className="text-3xl mb-4 pt-8  font-bold">Корзина</h1>

            {
                Array.from({length: cartCount()}).map((v) => (
                    <div key= "$v" className="py-3">
                        <RowCard label="Adidas x Pharrell Williams Basics Hoodie" price="7940" imageUrl=""></RowCard>
                    </div>
                ))
            }


            <h2 className="text-2xl mb-4 pt-8 font-bold">Адрес доставки</h2>

            <h2 className="text-2xl pt-8 font-bold">Оплата</h2>

            <div className="flex justify-between self-stretch">
                <h2 className="pt-8 font-semibold">Стоимость товаров</h2>
                <h2 className="pt-8 font-semibold">32970 p</h2>
            </div>

            <div className="flex justify-between self-stretch">
                <h2 className="pt-8 pb-8 font-semibold">Доставка</h2>
                <h2 className="pt-8 pb-8 font-semibold">490 p</h2>
            </div>

            <div className="flex justify-between self-stretch">
                <h2 className="text-2xl pb-4 font-bold">Итого</h2>
                <h2 className="text-3xl pb-4 font-bold items-end">33490 р.</h2>
            </div>

            <div className="relative pb-8">
                <input type="search" id="default-search"
                       className="block w-full p-4 pl-10 text-sm text-gray-900 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
                       placeholder="Промокод" required>
                </input>
            </div>

            <button type="button"
                    className="w-full mb-8 text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-4 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                Оплатить
            </button>

        </MainLayout>
    )
}

export default Home