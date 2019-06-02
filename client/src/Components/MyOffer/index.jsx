import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Card, Row, Col, Container, Spinner, CardDeck } from 'react-bootstrap';
import offersDetails from '../utils/myOffers';
import './style.css';
export default class MyOffers extends Component {
state={
    offers:null;
}
componentDidMount(){
    this.setState({offers:offersDetails});
}
statusClassName = status =>{
    return `myoffers__status-${status}`;
}
render(){
    const {offers}= this.state;
    const {history} = this.props;
    return(
        <Container>
            <h1 className='myoffers__headers'>my offers</h1>
            <Row>
                {offers ? (
                    offers.map(item =>{
                        return(
                            <Col xs={12} md={6} key={item}>
                                <Card className="myoffer__card" key={item.id} onClick={()=> history.push(`/app/offers/${item.id}`)}>
                                    <Card.Header className="myoffer__header-card">
                                    <Card.Text className={`myoffer__status ${this.statusClassName(item.status)}`}>{item.status}</Card.Text>
                                    </Card.Header>
                                    <Card.Body className="myoffers__body">
                                        <Card.Text className="myoffers__title">
                                            {item.title}
                                        </Card.Text>
                                        <Card.Text className="myoffers__position">
                                            {item.position}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            
                            
                            </Col>
                        )
                    })
                ):(<Spinner animation = "border" variant="info"/>)}
            </Row>
        </Container>
    )
}
}
