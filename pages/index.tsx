import styles from './index.module.css'
import type {NextPage} from "next"
import {MainLayout} from "../components/Layout"
import {Card} from "../components/Card";
import clsx from "clsx";
import {Footer} from "../components/Footer";
import React from "react";
import {func} from "prop-types";
import {CartModelSchema} from "../models/Cart";

const Home: NextPage = () => {

    function onSelect() {
        // implement floating text menu
    }

    return (
        <MainLayout>
            <input type="text"
                   className="block font-semibold w-full min-h-full text-7xl mt-16 p-4 pl-0 bg-white focus:outline-0"
                   placeholder="Title" required>
            </input>
            <textarea id="message" rows={40}
                      onSelect={onSelect}
                      className="block font-thin pt-8 pl-4 w-full text-sm text-4xl text-gray-900 bg-white focus:outline-0 rounded-lg border-transparent"
                      placeholder="Text">

            </textarea>
            <button
                type="button"
                className="absolute top-0 right-0 text-white text-2xl bg-black hover:bg-gray-900 font-medium text-sm px-8 py-4 mr-8 mt-8 border border-gray-200 rounded-[24px]">
                Publish
            </button>
        </MainLayout>
    )
}

export default Home