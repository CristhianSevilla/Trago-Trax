import axios from "axios";
import { useState, useEffect, createContext } from "react";

const BebidasContext = createContext()

const BebidasProvider = ({ children }) => {

    return (
        <BebidasContext.Provider
            value={{
            }}
        >
            {children}
        </BebidasContext.Provider>
    )

}

export {
    BebidasProvider
}

export default BebidasContext