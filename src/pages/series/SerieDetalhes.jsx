import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import apiFilmes from '../../services/apiFilmes'

const SerieDetalhes = () => {

    const [serie, setSerie] = useState({})
    const [elenco, setElenco] = useState([])
    const [temporadas, setTemporadas] = useState([])
    const params = useParams()
    useEffect(() => {

        apiFilmes.get('tv/' + params.id + '?language=pt-BR').then(resultado => {
            setSerie(resultado.data)
            //console.log(resultado.data) //pra ver no console o resultado
        })
        apiFilmes.get('tv/' + params.id + '/credits?language=pt-BR').then(resultado => {
            setElenco(resultado.data.cast)
            //console.log(resultado.data) //pra ver no console o resultado
        })
        apiFilmes.get('tv/' + params.id + '?language=pt-BR').then(resultado => {
            setTemporadas(resultado.data.seasons)
            //console.log(resultado.data) //pra ver no console o resultado
        })

    }, [params])

    return (
        <div>


            {!serie.id && <h1>Carregando... Aguarde!</h1>}

            {serie.id &&
                <>
                    
                    <h1>{serie.title}</h1>

                    <Row>
                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + serie.poster_path} />
                            </Card>
                        </Col>
                        <Col md={8}>
                            <p><strong>Título Original: </strong>{serie.original_name}</p>
                            <p><strong>Popularidade: </strong>{serie.popularity}</p>
                            <p><strong>Data de Lançamento: </strong>{serie.release_date}</p>
                            <p><strong>Orçamento: </strong>{serie.budget}</p>
                            <p><strong>Gênero: </strong>
                                {serie.genres.map(item => (
                                    <span>{item.name}, </span>
                                ))}</p>
                                
                            

                            <p><strong>Sinopse: </strong>{serie.overview}</p>
                            <Link className="btn btn-danger" to={-1} variant="primary" >Voltar</Link> {' '}
                        </Col>
                        <Col md={12} className='mt-3'>
                            <h1>Temporadas</h1>
                        </Col>
                        {temporadas.map(item => (
                            <Col md={2}>

                                <Card>
                                    <Link className="btn " to={'/series/' + serie.id + '/temporada/' + item.season_number }>
                                        <Card.Img title={item.name} variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} />
                                    </Link>
                                </Card>
                            </Col>
                        ))}
                        <Col md={12} className='mt-3'>
                            <h1>Elenco</h1>
                        </Col>
                        {elenco.map(item => (
                            <Col md={2}>

                                <Card>
                                    <Link className="btn " to={'/ator/' + item.id}>
                                        <Card.Img title={item.name} variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.profile_path} />
                                    </Link>
                                </Card>
                            </Col>
                        ))}
                    </Row>


                </>
            }
        </div>
    )
}

export default SerieDetalhes