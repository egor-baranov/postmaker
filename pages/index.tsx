import styles from './index.module.css'
import type {NextPage} from "next"
import {MainLayout} from "../components/Layout"
import {Card} from "../components/Card";
import clsx from "clsx";
import {Footer} from "../components/Footer";
import React from "react";
import {func} from "prop-types";

const Home: NextPage = () => {

    function addToFavorite() {

    }

    return (
        <MainLayout>
            <h1 id="shirts" className="text-3xl mb-4 pt-16 font-bold">Футболки</h1>

            <div className={clsx("grid gap-4", styles.grid)}>
                <Card label="Adidas x Pharrell Williams Basics Hoodie" price="7940" imageUrl="" selectedByDefault={false} onUpdate={addToFavorite}></Card>
                <Card label="Adidas x Pharrell Williams Basics Hoodie" price="7940" imageUrl="" selectedByDefault={false} onUpdate={addToFavorite}></Card>
                <Card label="Adidas x Pharrell Williams Basics Hoodie" price="7940" imageUrl="" selectedByDefault={false} onUpdate={addToFavorite}></Card>
            </div>

            <h1 id="hoodies" className="text-3xl mb-4 pt-16 font-bold">Толстовки</h1>
            <div className={clsx("grid gap-4", styles.grid)}>
                <Card label="Adidas x Pharrell Williams Basics Hoodie" price="7940" imageUrl="" selectedByDefault={false} onUpdate={addToFavorite}></Card>
                <Card label="Adidas x Pharrell Williams Basics Hoodie" price="7940" imageUrl="" selectedByDefault={false} onUpdate={addToFavorite}></Card>
                <Card label="Adidas x Pharrell Williams Basics Hoodie" price="7940" imageUrl="" selectedByDefault={false} onUpdate={addToFavorite}></Card>
                <Card label="Adidas x Pharrell Williams Basics Hoodie" price="7940" imageUrl="" selectedByDefault={false} onUpdate={addToFavorite}></Card>
                <Card label="Adidas x Pharrell Williams Basics Hoodie" price="7940" imageUrl="" selectedByDefault={false} onUpdate={addToFavorite}></Card>
            </div>

            <h1 id="accessories" className="text-3xl mb-4 pt-16 font-bold">Аксессуары</h1>
            <div className={clsx("grid gap-4", styles.grid)}>
                <Card label="Adidas x Pharrell Williams Basics Hoodie" price="7940" imageUrl="" selectedByDefault={false} onUpdate={addToFavorite}></Card>
                <Card label="Adidas x Pharrell Williams Basics Hoodie" price="7940" imageUrl="" selectedByDefault={false} onUpdate={addToFavorite}></Card>
                <Card label="Adidas x Pharrell Williams Basics Hoodie" price="7940" imageUrl="" selectedByDefault={false} onUpdate={addToFavorite}></Card>
                <Card label="Adidas x Pharrell Williams Basics Hoodie" price="7940" imageUrl="" selectedByDefault={false} onUpdate={addToFavorite}></Card>
            </div>

            <h1 id="sales" className="text-3xl mb-4 pt-16 font-bold">Скидки</h1>
            <div className={clsx("grid gap-4 pb-16", styles.grid)}>
                <Card label="Adidas x Pharrell Williams Basics Hoodie" price="7940" imageUrl="" selectedByDefault={false} onUpdate={addToFavorite}></Card>
                <Card label="Adidas x Pharrell Williams Basics Hoodie" price="7940" imageUrl="" selectedByDefault={false} onUpdate={addToFavorite}></Card>
            </div>
        </MainLayout>
    )
}

export default Home