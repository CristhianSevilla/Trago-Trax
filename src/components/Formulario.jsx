import { Button, Form, Row, Col, Alert } from 'react-bootstrap'
import useCategorias from '../hooks/useCategorias'
import { useState } from 'react'
import useBebidas from '../hooks/useBebidas'
import useIngredientes from '../hooks/useIngredientes'

import React from 'react'

const Formulario = () => {

    const { categorias } = useCategorias()
    const {ingredientes} = useIngredientes()

    const {consultarBebida} = useBebidas()

    const [busqueda, setBusqueda] = useState({
        ingrediente: '',
        categoria: ''
    })

    const [alerta, setAlerta] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        // validar formulario
        if (Object.values(busqueda).includes('')  || Object.values(busqueda).includes('Selecciona una Categoria') || Object.values(busqueda).includes('Selecciona un Ingrediente')) {
            setAlerta('Todos los campos son obligatorios')
            return
        }
        setAlerta('')

        //Consultar Bebidas
        consultarBebida(busqueda)

    }

    return (
        <Form
            onSubmit={handleSubmit}
        >
            {alerta && <Alert variant='danger' className='text-center'>{alerta}</Alert>}

            <Row>
                <Col md={6}>
                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='ingrediente'>
                            Ingrediente:
                        </Form.Label>
                        <Form.Select
                            id='ingrediente'
                            name='ingrediente'
                            value={busqueda.ingrediente}
                            onChange={e => setBusqueda({
                                ...busqueda,
                                [e.target.name]: e.target.value
                            })}
                        >
                            <option>Selecciona un Ingrediente</option>

                            {ingredientes.map(ingrediente => (
                                <option
                                    key={ingrediente.strIngredient1}
                                    value={ingrediente.strIngredient1}
                                >
                                    {ingrediente.strIngredient1}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='categoria'>
                            Categoría:
                        </Form.Label>
                        <Form.Select
                            id='categoria'
                            name='categoria'
                            value={busqueda.categoria}
                            onChange={e => setBusqueda({
                                ...busqueda,
                                [e.target.name]: e.target.value
                            })}
                        >
                            <option>Selecciona una Categoria</option>

                            {categorias.map(categoria => (
                                <option
                                    key={categoria.strCategory}
                                    value={categoria.strCategory}
                                >
                                    {categoria.strCategory}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="d-flex justify-content-end">
                <Col md={3}>
                    <Button
                        variant='danger'
                        className='text-uppercase w-100'
                        type='submit'
                    >
                        Buscar Bebidas
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}

export default Formulario