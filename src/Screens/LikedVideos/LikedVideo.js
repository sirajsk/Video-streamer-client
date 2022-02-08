import React,{useState} from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import { Col, Container, Row } from 'react-bootstrap';
import Categories from '../../components/Categories/Categories';
import Video from '../../components/Video/Video';
import Header from '../../components/header/Header';
export default function LikedVideos() {
    const [sidebar, togleSidebar] = useState(false);

    const handleToggleSidebar = () => togleSidebar(value => !value)
    return (
        <>
            <Header handleToggleSidebar={handleToggleSidebar} />
            <div className='app__container'>
            <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />


            <Container className='videos'> 
                <Categories />
                <Row >
                    {[...new Array(1)].map(() => (
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
