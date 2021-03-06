import React from 'react'
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import styles from '../../styles/Toggle.module.css'

import { UilSun, UilMoon } from '@iconscout/react-unicons'

function Toggle() {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    if(!mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;
    var meta = document.querySelector("meta[name=theme-color]");
    if (currentTheme === 'dark') {
        console.log(meta.getAttribute("content"));
        meta.setAttribute("content", "#000000");
        return (
            <div className={styles.toggle} onClick={() => setTheme('light')}>
                <UilMoon />
                <UilSun />
                <div className={styles.togglebutton} style={{right: '2px'}}></div>
            </div>
        )
    } else {
        console.log(meta.getAttribute("content"));
        meta.setAttribute("content", "#FFFFFF");
        return (
        <div className={styles.toggle} onClick={() => setTheme('dark')}>
            <UilMoon />
            <UilSun />
            <div className={styles.togglebutton} style={{left: '2px'}}></div>
        </div>
        )
    }
}

export default Toggle; 