import React, {ReactNode, useEffect, useState} from "react"
import { Header } from "./Header"
import {Footer} from "./Footer";
import {MobileNavBar} from "./MobileNavBar";

export const HeaderLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
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
        <>
            {children}
        </>
        // <>
        //     { isMobile ? <MobileNavBar /> : <Header/>}
        //
        // </>
    )
}

export const HeaderSpacer: React.FC = () => <div style={{ height: "calc(56px + env(safe-area-inset-top))" }} />