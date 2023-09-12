import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import apiFilmes from '../../services/apiFilmes'


const FilmesDetalhes = () => {

    const [filme, setFilme] = useState({})
    const [atores, setAtores] = useState([])
    const params = useParams()
    useEffect(() => {

        apiFilmes.get('movie/' + params.id + '?language=pt-BR').then(resultado => {
            setFilme(resultado.data)
            //console.log(resultado.data) //pra ver no console o resultado
        })
        apiFilmes.get('movie/' + params.id + '/credits?language=pt-BR').then(resultado => {
            setAtores(resultado.data.cast)
            //console.log(resultado.data) //pra ver no console o resultado
        })

    }, [params])



    return (
        <div>

            {!filme.id && <h1>Filme não encontrado!</h1>}

            {filme.id &&
                <>
                    {/*FilmesDetalhes: */}
                    <h1>{filme.title}</h1>

                    <Row>
                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + filme.poster_path} />
                            </Card>
                        </Col>
                        <Col md={8}>
                            <p><strong>Título Original: </strong>{filme.original_title}</p>
                            <p><strong>Popularidade: </strong>{filme.popularity}</p>
                            <p><strong>Data de Lançamento: </strong>{filme.release_date}</p>
                            <p><strong>Orçamento: </strong>{filme.budget}</p>
                            <p><strong>Gênero: </strong>
                                {filme.genres.map(item => (
                                    <span>{item.name}, </span>
                                ))}</p>

                            <p><strong>Sinopse: </strong>{filme.overview}</p>
                            <Link className="btn btn-danger" to={-1} variant="primary" >Voltar</Link> {' '}
                        </Col>
                        <Col md={12} className='mt-3'>
                            <h1>Atores</h1>
                        </Col>
                        {atores.map(item => (
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

export default FilmesDetalhes