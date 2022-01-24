import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Categories from '../../components/Categories/Categories';
import Video from '../../components/Video/Video';

export default function HomeScreen() {
  return (
      <Container>
          <Categories/>
          <Row>
              {[...new Array(8)].map(()=>(
                  <Col lg={3} md={4}>    
                  <Video/>
                  </Col>
              ))}
          </Row>
      </Container>
  )
}
