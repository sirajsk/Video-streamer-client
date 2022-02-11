import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Video from '../Video/Video'

function PlayList() {
    return (
        <div>

            <Row >
                {[...new Array(3)].map(() => (
                    <Col lg={3} md={4}>
                        <Video />
                    </Col>
                ))}
            </Row>

        </div>
    )
}

export default PlayList