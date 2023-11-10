import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import Shuffle from '../asset/playerbuttons/shuffle.png'
import Repeat from '../asset/playerbuttons/repeat.png'
import Play from '../asset/playerbuttons/play.png'
import Next from '../asset/playerbuttons/next.png'
import Prev from '../asset/playerbuttons/prev.png'


const Player = function () {

    return (
        <Container fluid className='container-fluid fixed-bottom bg-container pt-1'>
            <Row className="h-100">
                <Col lg={10} className="offset-lg-2">
                    <Row className="h-100 flex-column justify-content-center align-items-center">
                        <Col className="col-6 col-md-4 playerControls">
                            <div className="d-flex">
                                <a>
                                    <img src={Shuffle} alt="shuffle" />
                                </a>
                                <a>
                                    <img src={Repeat} alt="prev" />
                                </a>
                                <a>
                                    <img src={Play} alt="play" />
                                </a>
                                <a>
                                    <img src={Next} alt="next" />
                                </a>
                                <a>
                                    <img src={Prev} alt="repeat" />
                                </a>
                            </div>
                            <div className="progress mt-3">
                                <ProgressBar />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Player