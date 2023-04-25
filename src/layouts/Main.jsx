/* eslint-disable no-unused-vars */
import React from 'react';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from './Pages/Shared/RightNav/RightNav';
import LeftNav from './Pages/Shared/LeftNav/LeftNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
    <Container>
      <Row>
        <Col lg={3}>
            <LeftNav></LeftNav>
        </Col>
        <Col lg={6}>
            <h1>this is main context</h1>
        </Col>
        <Col lg={3}>
            <RightNav></RightNav>
        </Col>
      </Row>
      
    </Container>


            <Footer></Footer>
        </div>
    );
};

export default Main;