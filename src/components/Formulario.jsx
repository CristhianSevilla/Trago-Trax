import { Button, Form, Row, Col } from 'react-bootstrap'
import useCategorias from '../hooks/useCategorias'
import { useState } from 'react'

import React from 'react'

const Formulario = () => {

    const { categorias } = useCategorias()

    const [busqueda, setBusqueda] = useState({
        nombre: '',
        categoria: ''
    })

    const [alerta, setAlerta] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        // validar formulario
        if(Object.values(busqueda).includes('')){
            setAlerta('Todos los campos son obligatorios')
            return
        }
    }

    return (
        <Form
            onSubmit={handleSubmit}
        >
            <Row>
                <Col md={6}>
                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='nombre'>
                            Bebida:
                        </Form.Label>
                        <Form.Control
                            id='nombre'
                            type='text'
                            placeholder='Ej: Tequila, Vodka, etc'
                            name='nombre'
                            value={busqueda.nombre}
                            onChange={e => setBusqueda({
                                ...busqueda,
                                [e.target.name] : e.target.value
                            })}
                        />
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
                                [e.target.name] : e.target.value
                            })}
                        >
                            <option>Selecciona una Categoria</option>

                            { categorias.map(categoria => (
                                    <option
                                    key={categoria.strCategory}
                                    value={categoria.strCategory}
                                    >
                                        {categoria.strCategory}
                                    </option>
                                )) }
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="d-flex justify-content-end">
                <Col md={3}>
                    <Button
                    variant='danger'
                    className='text-uppercase w-100'
                     >
                        Buscar Bebidas
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}

export default Formulario