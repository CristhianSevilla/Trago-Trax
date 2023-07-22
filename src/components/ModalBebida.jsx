import { Modal, Image } from "react-bootstrap"
import useBebidas from "../hooks/useBebidas"

const ModalBebida = () => {

    const { modal, handleModalClick, receta } = useBebidas()

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
                Cuerpo de modal
            </Modal.Body>
        </Modal>
    )
}

export default ModalBebida