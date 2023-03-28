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


import {createTheme, Fab, Menu, MenuItem, TextareaAutosize} from "@mui/material";
import {Simulate} from "react-dom/test-utils";
import select = Simulate.select;
import MUIRichTextEditor, {TMUIRichTextEditorStyles} from "mui-rte";
import {ThemeProvider} from "@mui/styles";
import {fontSize, Theme} from "@mui/system";

const Home: NextPage = () => {

    const [contextMenu, setContextMenu] = React.useState<{
        mouseX: number;
        mouseY: number;
    } | null>(null);

    const defaultTheme: Theme = createTheme({
        typography: {
            fontSize: 32,
            fontFamily: [
                'Inter',
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
        },
        palette: {
            primary: {
                main: "#ffffff"
            }
        }
    })

    const muiRteTheme: TMUIRichTextEditorStyles = {
        overrides: {
            MUIRichTextEditor: {
                editor: {
                    fontWeight: "lighter",
                },
                placeHolder: {
                    backgroundColor: "#ffffff",
                    color: "#9DA3AE",
                    width: "inherit",
                    fontWeight: "lighter"
                },
            }
        }
    }

    Object.assign(defaultTheme, muiRteTheme)

    // @ts-ignore
    // todo: refactor to lexical
    return (
        <MainLayout>
            <input type="text"
                   className="block font-semibold w-full min-h-full text-7xl mt-16 p-4 pl-0 bg-white focus:outline-0"
                   placeholder="Title" required>
            </input>

            <div className="ml-8">

            <ThemeProvider theme={defaultTheme}>
                <MUIRichTextEditor
                    toolbar={false}
                    inlineToolbar={true}
                    label="Text"/>
            </ThemeProvider>
            </div>

            <button
                type="button"
                className="fixed bottom-0 right-0 text-white text-2xl bg-black hover:bg-gray-900 font-medium text-sm px-8 py-4 mr-8 mb-8 border border-gray-200 rounded-[24px]">
                Publish
            </button>
        </MainLayout>
    )
}

export default Home