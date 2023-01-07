import styles from './index.module.css'
import type {NextPage} from "next"
import React, {useState} from "react";
import {MainLayout} from "../../components/Layout";
import {Card} from "../../components/Card";
import clsx from "clsx";

const Home: NextPage = () => {

    const [count, setCount] = useState<number>(favoriteCount())

    function favoriteCount() {
        if (typeof window == 'undefined') {
            return 0
        }

        const favoriteCount: number = Number(window.localStorage.getItem("favorite-count"))
        return favoriteCount
    }

    function updateFavorite(newCount: number) {
        setCount(newCount)
    }

    return (
        <MainLayout>
            <h1 className="text-3xl mb-4 pt-8 pb-4 font-bold">Избранное</h1>
            <div className={clsx("grid gap-4", styles.grid)}>
                {
                    Array.from({length: count}).map((v) => (
                        <Card key = "${v}" label="Adidas x Pharrell Williams Basics Hoodie" price="7940" imageUrl=""
                              selectedByDefault={true} onUpdate={updateFavorite}></Card>
                    ))
                }
            </div>
        </MainLayout>
    )
}

export default Home