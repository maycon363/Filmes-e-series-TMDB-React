import './App.css';
import Menu from './components/Menu';
//import Cartao from './components/Cartao';
//import Box from './components/Box';
//import { Alert, Button, Card, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import FilmesPopulares from './pages/filmes/FilmesPopulares';
import FilmesDetalhes from './pages/filmes/FilmesDetalhes';
import UltimoFilmeAdd from './pages/filmes/UltimoFilmeAdd';
import FilmesLancamentos from './pages/filmes/FilmesLancamentos';
import FilmesCartaz from './pages/filmes/FilmesCartaz';
import AtoresDetalhes from './pages/atores/AtoresDetalhes';
import SeriesPopulares from './pages/series/SeriesPopulares';
import SerieDetalhes from './pages/series/SerieDetalhes';
import TemporadaDetalhes from './pages/series/TemporadaDetalhes copy';
import SeriesNoAr from './pages/series/SeriesNoAr';
import { SeriesEstrelando } from './pages/series/SeriesEstrelando';





function App() {
  return (
    <div className="fundo">

      <BrowserRouter>
        <Menu />
        <Container>
        <Routes>
          <Route path="/" element={<FilmesPopulares/>}></Route>
          <Route path="/filmes/lancamentos" element={<FilmesLancamentos/>}></Route>
          <Route path="/filmes/cartaz" element={<FilmesCartaz/>}></Route>
          <Route path="/filmes/ultimoAdicionado" element={<UltimoFilmeAdd/>}></Route>
          <Route path="/filmes/:id" element={<FilmesDetalhes/>}></Route>
          <Route path="/series/:id" element={<SerieDetalhes/>}></Route>
          <Route path="/ator/:id" element={<AtoresDetalhes/>}></Route>
          <Route path="/ator/:id" element={<AtoresDetalhes/>}></Route>
          <Route path="/series/:id/temporada/:season_number" element={<TemporadaDetalhes/>}></Route>
          <Route path="/series/populares" element={<SeriesPopulares/>}></Route>
          <Route path="/series/no-ar" element={<SeriesNoAr/>}></Route>
          <Route path="/series/estrelando-hoje" element={<SeriesEstrelando/>}></Route>
          
        </Routes>
        </Container>
      </BrowserRouter>
      

      {/* */}


      {/*     
  <Container>
        <Box title='teste1' cor='danger'>
          <p>teste1</p>
        </Box>
        <Box title='teste2' cor='success'>
          <p>teste2</p>
        </Box>
        <Row className="justify-content ps-0">
          <Col>
            <Cartao titulo="Palmeiras" src="https://i.superesportes.com.br/81WRvS0ZqVjw5kHq0bzEibTbpcs=/smart/imgsapp.mg.superesportes.com.br/app/foto_126510467054/2022/02/12/13330/20220212210407264685a.jpg" />
          </Col>
          <Col>
            <Cartao />
          </Col>
          <Col>
            <Cartao />
          </Col>
          <Col>
            <Cartao />
          </Col>

        </Row>




        <h1>Hello World</h1>

        <Button variant='outline-primary'>Salvar</Button>

        <Alert variant='danger'>
          PERIGO
        </Alert>
  </Container> */}
    </div>
  );
}

export default App;
