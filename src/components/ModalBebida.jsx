import { Modal, Image } from "react-bootstrap"
import useBebidas from "../hooks/useBebidas"

const ModalBebida = () => {

    const { modal, handleModalClick, receta } = useBebidas()

    const mostrarIngredientes = () => {
        let ingredientes = []

        for (let i = 1; i < 16; i++){
            if (receta[`strIngredient${i}`]) {
                ingredientes.push(
                    <li key={receta[`strIngredient${i}`]}>{receta[`strIngredient${i}`]} {receta[`strMeasure${i}`]}</li>
                )
            }
        }

        return ingredientes
    }

    return (
        <Modal show={modal} onHide={handleModalClick}>
            <Image
                src={receta.strDrinkThumb}
                alt={`Imagen de la receta de ${receta.strDrink}`}
            />
            <Modal.Header>
                <Modal.Title>{receta.strDrink}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="p-2">
                    <h2>Instructions</h2>
                    {receta.strInstructions}
                    <h2>Ingredients</h2>
                    {mostrarIngredientes()}
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default ModalBebida