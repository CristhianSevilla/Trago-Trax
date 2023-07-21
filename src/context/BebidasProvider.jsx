import axios from "axios";
import { useState, useEffect, createContext } from "react";

const BebidasContext = createContext()

const BebidasProvider = ({ children }) => {

    const [bebidas, setBbebidas] = useState([])

    const consultarBebida = async datos => {

        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`;

            const { data } = await axios(url)

            setBbebidas(data.drinks)

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <BebidasContext.Provider
            value={{
                consultarBebida,
                bebidas
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