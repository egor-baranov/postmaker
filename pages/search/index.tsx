import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import type {NextPage} from "next"
import Link from "next/link"
import React from "react";
import {MainLayout} from "../../components/Layout";
import {Card} from "../../components/Card";
import {SearchBar} from "../../components/SearchBar";

const Search: NextPage = () => {
    return (
        <MainLayout>
            <h1 className="text-3xl mb-4 pt-8 pb-4 font-bold">Поиск</h1>

            <SearchBar></SearchBar>
        </MainLayout>
    )
}

export default Search