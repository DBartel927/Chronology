'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material'
import { Montserrat } from 'next/font/google';


// create a type for your props
type ThemeContextProps = {
    darkMode: boolean,
    setDarkMode: (value: boolean) => void
}

const montserrat = Montserrat({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
});


// create a context variable
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)

// create a context provider
export function ThemeContextProvider(props: { children: ReactNode }) {
    const [darkMode, setDarkMode] = useState<boolean>(true)

    const theme = createTheme({
        typography: {
            fontFamily: montserrat.style.fontFamily,
        },
        palette: {
            mode: darkMode ? "dark" : "light",
            primary: {
                light: '#734b5e',
                main: '#bcbdc0',
                dark: '#565857',
                contrastText: '#000',
            },
            secondary: {
                light: '#8a8d91',
                main: '#f5d3c8',
                dark: '#bcbdc0',
                contrastText: '#000',
            },
        }
    });

    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {props.children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

// create a function to use the context
export function useThemeContext() {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useThemeContext must be used within a ThemeContextProvider')
    }
    return context
}