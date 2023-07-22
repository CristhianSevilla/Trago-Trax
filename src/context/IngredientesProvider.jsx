import axios from "axios";
import { useState, useEffect, createContext } from "react";

const IngredientesContext = createContext()

const IngredientesProvider = ({ children }) => {

    const [ingredientes, setIngredientes] = useState([])

    useEffect(() => {

        const ObtenerIngredientes = async () => {
            try {
                const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list'

                const { data } = await axios(url)
                setIngredientes(data.drinks)
            } catch (error) {

            }
        }

        ObtenerIngredientes()
    }, [])


    return (
        <IngredientesContext.Provider
            value={{
                ingredientes
            }}
        >
            {children}
        </IngredientesContext.Provider>
    )

}

export {
    IngredientesProvider
}

export default IngredientesContext