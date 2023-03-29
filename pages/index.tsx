import styles from './index.module.css'
import type {NextPage} from "next"
import {MainLayout} from "../components/Layout"
import {Card} from "../components/Card";
import clsx from "clsx";
import {Footer} from "../components/Footer";
import React from "react";
import {func} from "prop-types";
// @ts-ignore
import {CartModelSchema} from "../models/Cart";

import {Simulate} from "react-dom/test-utils";
import select = Simulate.select;
import {ThemeProvider} from "@mui/styles";
import {fontSize, Theme} from "@mui/system";
import {Editor} from "../components/LexicalEditor";

const Home: NextPage = () => {
    return (
        <MainLayout>
            <input type="text"
                   style = {{}}
                   className="block font-semibold w-full min-h-full text-5xl mt-16 p-4 pl-0 bg-white focus:outline-0"
                   placeholder="Title" required>
            </input>

            <div className="pb-16"> <Editor/> </div>

            <button
                type="button"
                className="fixed bottom-0 right-0 text-white text-2xl bg-black hover:bg-gray-900 font-medium text-sm px-6 py-3 mr-4 mb-4 border border-gray-200 rounded-[16px]">
                Publish
            </button>
        </MainLayout>
    )
}

export default Home