import React from 'react'
import { Card } from 'react-bootstrap'

const Cartao = (props) => {

    const carros = [
        {marca: 'VW', modelo: 'Fusca', cor: 'Branco', ano: 1980, foto:'https://upload.wikimedia.org/wikipedia/commons/b/b2/1963_Herbie.jpg'},
        {marca: 'GM', modelo: 'Celta', cor: 'Preto', ano: 2014, foto:'https://cdn.grupolance.com.br/batches/5e/17222/0a990dbbc7442f3b1c0f40c25ea76e25.jpg'},
        {marca: 'Toyota', modelo: 'Corola', cor: 'Prata', ano: 2016, foto:'https://revistacarro.com.br/wp-content/uploads/2019/12/Toyota-Corolla-XEi_4.jpg'},
        {marca: 'GM', modelo: 'Corsa', cor: 'Vinho', ano: 2008, foto:'https://i.imgur.com/yAQmw.jpg'},
      ]

    return (

        <div>
                {carros.map(item => (
                <div> 
                <Card border="dark" className="mb-3" style={{ width: '15rem', height: '17rem' }}>

                <Card.Img src="https://i.superesportes.com.br/81WRvS0ZqVjw5kHq0bzEibTbpcs=/smart/imgsapp.mg.superesportes.com.br/app/foto_126510467054/2022/02/12/13330/20220212210407264685a.jpg" ></Card.Img>
                <Card.Body>
                    <Card.Title>{item.modelo}</Card.Title>
                    <Card.Text>
                        teste 1
                    </Card.Text>
                </Card.Body>
                </Card>
              <p>{item.marca} {item.cor} {item.ano} </p>  {/* POSSO LISTAR DAS DUAS FORMAS */}
              <img src={item.foto}></img>
              </div>
              ))}
              </div>
        
    )
}

export default Cartao