import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiFilmes from '../../services/apiFilmes'

export const SeriesEstrelando = () => {
    const [series, setSeries] = useState([])

    useEffect(() => {

        apiFilmes.get('tv/airing_today?language=pt-BR').then(resultado => {
            setSeries(resultado.data.results)
        })

    }, [])
  return (
    <div>
         <h1>Séries Estrelando Hoje</h1>
            {series.lenght === 0 && <h1>Carregando...</h1>} 
            <Row>
                {series.map(item => (
                    <Col md={3} className="mb-3">
                        <Card title={item.name}> 
                            
                            <Card.Img className="hover-zoom" variant="top" src={'https://image.tmdb.org/t/p/w500/'+ item.poster_path } />
                            
                            <Card.Body>
                                <Card.Title> {item.original_name}</Card.Title>
                                <Card.Text>
                                Popularidade: {item.popularity}
                                </Card.Text>
                                
                                <Link className="btn btn-danger"  to={'/series/' + item.id } variant="primary" >Detalhes</Link> {' '}
                                
                            </Card.Body>

                        </Card>
                    </Col>
                ))}
            </Row>
    </div>
  )
}
