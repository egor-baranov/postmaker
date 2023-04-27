import styles from './index.module.css'
import type {NextPage} from "next"
import {MainLayout} from "../components/Layout"
import {Card} from "../components/Card";
import clsx from "clsx";
import {Footer} from "../components/Footer";
import React, {useEffect, useState} from "react";
import {func} from "prop-types";
// @ts-ignore
import {CartModelSchema} from "../models/Cart";

import {Simulate} from "react-dom/test-utils";
import select = Simulate.select;
import {ThemeProvider} from "@mui/styles";
import {fontSize, Theme} from "@mui/system";
import {Editor} from "../components/LexicalEditor";

const Home: NextPage = () => {

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
        <div>
            <div className={isMobile ? "px-4 pt-16" : "px-32 pt-32"}>
                <MainLayout>

                    <input type="text"
                           style={{}}
                           className="block font-semibold w-full min-h-full text-5xl p-4 pl-0 bg-white focus:outline-0"
                           placeholder="Title" required>
                    </input>

                    <div className="pb-16"><Editor/></div>

                    <button
                        type="button"
                        className="fixed bottom-0 right-0 text-white text-2xl bg-black hover:bg-gray-900 font-medium text-sm px-6 py-3 mr-4 mb-4 border border-gray-200 rounded-[16px]">
                        Publish
                    </button>

                </MainLayout>
            </div>

            {isMobile ? <div/> : <div className="fixed top-0 pt-4 pl-8 flex flex-row items-start w-full bg-white">

                <a href={"https://postmaker-six.vercel.app"}
                   className="mb-1 text-xl font-bold text-gray-900 dark:text-gray-900 text-left py-3 pl-8">
                    Postmaker
                </a>

                <a href={"https://kepler88d.dev"}
                   className="mb-1 text-xl font-thin text-gray-900 dark:text-gray-900 text-left py-3 pl-2">
                    by kepler88d
                </a>
            </div>}
        </div>
    )
}

export default Home