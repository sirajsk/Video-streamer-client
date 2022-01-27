import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Categories from '../../components/Categories/Categories';
import Video from '../../components/Video/Video';
import Header from '../../components/header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import "../../_app.scss"


export default function HomeScreen() {
    const [sidebar, togleSidebar] = useState(false);

    const handleToggleSidebar = () => togleSidebar(value => !value)
    return (
        <>

            <Header handleToggleSidebar={handleToggleSidebar} />
            <div className='app__container'>

            <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />

            <Container>

                <Categories />
                <Row>
                    {[...new Array(8)].map(() => (
                        <Col lg={3} md={4}>
                            <Video />
                        </Col>
                    ))}
                </Row>
            </Container>
           </div>
        </>
    )
}
