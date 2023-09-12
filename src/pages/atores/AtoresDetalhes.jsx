import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import apiFilmes from '../../services/apiFilmes'

const AtoresDetalhes = () => {
    const [ator, setAtor] = useState({})
    const [atores, setAtores] = useState([])
    const params = useParams()
    useEffect(() => {

        apiFilmes.get('person/' + params.id + '?language=pt-BR').then(resultado => {
            setAtor(resultado.data)
            //console.log(resultado.data) //pra ver no console o resultado
        })
        apiFilmes.get('person/' + params.id + '/movie_credits?language=pt-BR').then(resultado => {
            setAtores(resultado.data.cast)
            //console.log(resultado.data) //pra ver no console o resultado
        })

    }, [params])
    return (
        <div>
            <div>


                <>
                    
                    <h1>{ator.title}</h1>

                    <Row>
                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + ator.profile_path} />
                            </Card>
                        </Col>
                        <Col md={8}>
                            <p><strong>Nome: </strong>{ator.name}</p>
                            <p><strong>Aniversário: </strong>{ator.birthday}</p>
                            <p><strong>Local de nascimento: </strong>{ator.place_of_birth}</p>
                            <p><strong>Biografia: </strong>{ator.biography}</p>



                            <Link className="btn btn-danger" to={-1} variant="primary" >Voltar</Link> {' '}
                        </Col>
                        <Col md={12} className='mt-3'>
                            <h1>Filmes</h1>
                        </Col>
                        {atores.map(item => (
                            <Col md={3}>

                                <Card>
                                    <Link className="btn " to={'/filmes/' + item.id}>
                                        <Card.Img title={item.title} variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.backdrop_path} />
                                    </Link>
                                </Card>
                            </Col>
                            ))}
                        </Row>


                </>

            </div>
        </div>

    )
}

export default AtoresDetalhes