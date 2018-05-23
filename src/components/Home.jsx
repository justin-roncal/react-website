import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';

import './Home.css';

class Home extends Component {
    render() {
        return (
            <Grid>
                <Jumbotron>
                    <h2>Hello World</h2>
                    <p>This is a test website</p>
                    <Link to="/About">
                        <Button bsStyle="primary">About</Button>
                    </Link>
                </Jumbotron>

                <Row className="show-grid text-center">
                    <Col xs={12} >
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Home;