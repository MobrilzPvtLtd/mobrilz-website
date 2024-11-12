'use client'

import React, { useState } from 'react'
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor, store } from "../redux/store";
import ScrollToTop from "react-scroll-to-top";
import { ToastContainer } from 'react-toastify';

import withReduxStore from "../common/with-redux-store";
import Loading from "../components/Other/Loading";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { ThemeProvider } from 'next-themes'

const GlobalProvider = ({ children, reduxStore }) => {
  
    return (
        <Provider store={reduxStore} suppressHydrationWarning>
            <PersistGate loading={<Loading />} persistor={persistor}>
            <ThemeProvider>{children}</ThemeProvider>
                <ToastContainer position="bottom-left" autoClose={3000} />
                <ScrollToTop
                    smooth
                    component={<Icon.CaretUp weight='bold' />}
                    style={{
                        backgroundColor: "#f7f5f4",
                        borderRadius: "999px",
                        height: "50px",
                        width: "50px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                    }}
                />
            </PersistGate>
        </Provider>
    )
}

export default withReduxStore(GlobalProvider)