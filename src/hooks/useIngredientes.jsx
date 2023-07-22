import { useContext } from "react";
import IngredientesContext from "../context/IngredientesProvider";

const useIngredientes = () => {
    return useContext(IngredientesContext)
}

export default useIngredientes