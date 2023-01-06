import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import type {NextPage} from "next"
import Link from "next/link"
import {MainLayout} from "../components/Layout"
import {Card} from "../components/Card";

const Home: NextPage = () => {
    return (
        <MainLayout>
            <h1 id="shirts" className="text-3xl mb-4 pt-16 font-bold">Футболки</h1>

            <div className="grid grid-cols-3 gap-4">
                <Card label="Adidas x Pharrell Williams Basics Hoodie" price="7940" imageUrl=""></Card>
                <Card label="Adidas x Pharrell Williams Basics Hoodie" price="7940" imageUrl=""></Card>
                <Card label="Adidas x Pharrell Williams Basics Hoodie" price="7940" imageUrl=""></Card>
            </div>

            <h1 id="hoodies" className="text-3xl mb-4 pt-16 font-bold">Толстовки</h1>
            <div className="grid grid-cols-3 gap-4">
                <Card label="Adidas x Pharrell Williams Basics Hoodie" price="7940" imageUrl=""></Card>
                <Card label="Adidas x Pharrell Williams Basics Hoodie" price="7940" imageUrl=""></Card>
            </div>

            <h1 id="accessories" className="text-3xl mb-4 pt-16 font-bold">Аксессуары</h1>
            <div className="grid grid-cols-3 gap-4">
                <Card label="Adidas x Pharrell Williams Basics Hoodie" price="7940" imageUrl=""></Card>
                <Card label="Adidas x Pharrell Williams Basics Hoodie" price="7940" imageUrl=""></Card>
            </div>

            <h1 id="sales" className="text-3xl mb-4 pt-16 font-bold">Скидки</h1>
            <div className="grid grid-cols-3 gap-4 pb-16">
                <Card label="Adidas x Pharrell Williams Basics Hoodie" price="7940" imageUrl=""></Card>
                <Card label="Adidas x Pharrell Williams Basics Hoodie" price="7940" imageUrl=""></Card>
            </div>
        </MainLayout>
    )
}

export default Home