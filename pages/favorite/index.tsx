import styles from './index.module.css'
import type {NextPage} from "next"
import React, {useState} from "react";
import {MainLayout} from "../../components/Layout";
import {Card} from "../../components/Card";
import clsx from "clsx";
import {useRouter} from "next/router";

const EmptyFavorite: React.FC<{ action: Function }> = ({action}) => {
    return (
        <div className="py-32 flex flex-col items-center justify-center">
            <h2 className="text-2xl pt-8 font-bold">В избранном пусто</h2>
            <h2 className="text-medium pt-4 font-medium pb-4 text-center">
                Добавьте товары в избранное на главной странице
            </h2>
            <button type="button"
                    onClick={() => action()}
                    className="text-black bg-gray-100 hover:bg-gray-200 font-medium rounded-lg text-sm px-5 py-4 mb-2 mx-2">
                На главную
            </button>
        </div>
    )
}

const Favorite: React.FC<{ count: number, updateFavorite: Function }> = ({count, updateFavorite}) => {
    return (
        <div className={clsx("grid gap-4", styles.grid)}>
            {
                Array.from({length: count}).map((v) => (
                    <Card key="${v}" label="Adidas x Pharrell Williams Basics Hoodie" price="7940" imageUrl=""
                          selectedByDefault={true} onUpdate={updateFavorite}></Card>
                ))
            }
        </div>
    )
}


const Home: NextPage = () => {

    const router = useRouter()

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
            <h1 className="text-3xl mb-4 pt-8 font-bold">Избранное</h1>


            {favoriteCount() > 0 ? <Favorite count={count} updateFavorite={updateFavorite}/> :
                <EmptyFavorite action={() => router.push("/")}/>
            }
        </MainLayout>
    )
}

export default Home