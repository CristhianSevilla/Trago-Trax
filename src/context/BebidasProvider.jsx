import axios from "axios";
import { useState, useEffect, createContext } from "react";

const BebidasContext = createContext()

const BebidasProvider = ({ children }) => {

    const [bebidas, setBbebidas] = useState([])
    const [modal, setModal] = useState(false)
    const [bebidaId, setBebidaId] = useState(null)
    const [receta, setReceta] = useState({})

    const consultarBebida = async datos => {

        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.ingrediente}&c=${datos.categoria}`;

            const { data } = await axios(url)

            setBbebidas(data.drinks)

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {

        const obtenerReceta =async () => {
            if(!bebidaId) return

            try {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidaId}`

                const {data} = await axios(url)
                setReceta(data.drinks[0]);



            } catch (error) {
                console.log(error);
            }

        }

        obtenerReceta()
    }, [bebidaId])

    const handleModalClick = () => { setModal(!modal) }

    const handleBebidaIdClick = id => {setBebidaId(id)}

    return (
        <BebidasContext.Provider
            value={{
                consultarBebida,
                bebidas,
                modal,
                handleModalClick,
                handleBebidaIdClick,
                receta
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