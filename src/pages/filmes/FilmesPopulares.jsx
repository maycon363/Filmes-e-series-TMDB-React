import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiFilmes from '../../services/apiFilmes'
import apiProjeto from '../../services/apiProjeto'


const FilmesPopulares = () => {

    const [filmes, setFilmes] = useState([])
    const [query, setQuery] = useState('')



    useEffect(() => {

        apiFilmes.get('movie/popular?language=pt-BR').then(resultado => {
            setFilmes(resultado.data.results)
        })
        apiProjeto.get('/setores').then(resultado => {
            console.log(resultado.data)
        })


    }, [])
    function setarQuery(event) {
        setQuery(event.target.value)

    }
    function pesquisar() {
        apiFilmes.get('search/movie?language=pt-BR&query=' + query).then(resultado => {
            setFilmes(resultado.data.results)
        })

    }

//o primeiro parâmetro é uma função anônima, dentro das chaves é o corpo da função. No array, é aonde eu vou botar variáveis, toda vez que eu mudar o valor delas, eu chamo a função

return (
    <div>
        <h1 className="text-center">Filmes Populares</h1>
        {filmes.lenght === 0 && <h1>Carregando...</h1>} {/* para mais, só colocar outro && //pode ser tb !filmes.lenght */}


        <div className="text-center">
            <input className="mb-3" type="text" onChange={setarQuery} />{' '}
            <Button variant="dark" onClick={pesquisar}> Pesquisar </Button>
        </div>
        

        <Row>
            {filmes.map(item => (
                <Col key={item.id} md={3} className="mb-3">
                    <Card title={item.title}> {/* da pra ver o titulo passando o mouse em cima */}

                        <Card.Img className="hover-zoom" variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} />

                        <Card.Body>
                            <Card.Title> {item.original_title}</Card.Title>
                            <Card.Text>
                                Popularidade: {item.popularity}
                            </Card.Text>
                            <Link className="btn btn-danger" to={'/filmes/' + item.id} variant="success" >Detalhes</Link> {' '}

                        </Card.Body>

                    </Card>
                </Col>
            ))}
        </Row>

    </div>
)
}

export default FilmesPopulares