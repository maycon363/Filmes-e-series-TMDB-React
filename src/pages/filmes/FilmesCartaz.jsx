import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiFilmes from '../../services/apiFilmes'

const FilmesCartaz = () => {

    const [filmes, setFilmes] = useState([])

    useEffect(() => {

        apiFilmes.get('movie/now_playing?language=pt-BR').then(resultado => {
            setFilmes(resultado.data.results)
        })

    }, [])

  return (
    <div>
            <h1>Em Cartaz</h1>

            <Row>
                {filmes.map(item => (
                    <Col md={3} className="mb-3">
                        <Card title={item.title}> {/* da pra ver o titulo passando o mouse em cima */}
                            
                            <Card.Img className="hover-zoom" variant="top" src={'https://image.tmdb.org/t/p/w500/'+ item.poster_path } />
                            
                            <Card.Body>
                                <Card.Title> {item.original_title}</Card.Title>
                                <p>Lançamento: {item.release_date}</p>
                                <p>Nota: {item.vote_average}</p>
                                <Link className="btn btn-danger"  to={'/filmes/' + item.id} variant="primary" >Detalhes</Link> {' '}
                                
                            </Card.Body>

                        </Card>
                    </Col>
                ))}
            </Row>

        </div>
  )
}

export default FilmesCartaz