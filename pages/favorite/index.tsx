import styles from './index.module.css'
import type {NextPage} from "next"
import React from "react";
import {MainLayout} from "../../components/Layout";
import {Card} from "../../components/Card";
import clsx from "clsx";

const Home: NextPage = () => {
    return (
        <MainLayout>
            <h1 className="text-3xl mb-4 pt-8 pb-4 font-bold">Избранное</h1>
            <div className={clsx("grid gap-4", styles.grid)}>
                <Card label="Adidas x Pharrell Williams Basics Hoodie" price="7940" imageUrl=""></Card>
                <Card label="Adidas x Pharrell Williams Basics Hoodie" price="7940" imageUrl=""></Card>
            </div>
        </MainLayout>
    )
}

export default Home