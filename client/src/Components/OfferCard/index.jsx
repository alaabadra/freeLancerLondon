import React from 'react'
import { Card, Button, Spinner } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
export default class OfferCard extends React.Component{
state={
offer :null,
statusLabel:'',
statusDiv:'',
hovered:'',
};
componentDidMount(){
const {offer,status} = this.props;
const borderColor = {
completed:'green',
finished:'red',
pending:'orange',
active:'blue'
};
this.setState(()=>{
return {
offer,
statusLabel:`offer-card__status--${status}`,
statusDiv:`offer-card__border--${borderColor[status]}`
};
});
}
render(){
    const {offer, hovered,statusDiv,statusLabel} = this.state
    const {hovere,history} = this.props;
    return(
        <>
       {offer?(
           <Card className={`offer-card${hovered?'offer-card--hovered':''}`}
           key={offer.id}
           onClick={()=>history.push(`/app/offers/${offer.id}`)}
           >
               {hover?(
                   <span className={`offer-card__border${statusDiv}`}></span>
               ):null}

<Card.Header className="offer-card__header">
              <div>
                <span className="offer-card__position">{offer.position}</span>
                <br />
                <span className="offer-card__title">{offer.title}</span>
              </div>
              {hover ? (
                <span className={`offer-card__status ${statusLabel}`}>
                  {' '}
                  {offer.status}
                </span>
              ) : null}
              <Button
                onClick={e => {
                  e.stopPropagation();
                  this.handleSave(offer.id);
                }}
                className="offer-card__save-btn"
              >
                <i
                  className={`fas fa-bookmark offer-card__favourite ${this.savedClassStatus()}`}
                >
                  {' '}
                </i>
              </Button>
            </Card.Header>
            <Card.Body>
              <Card.Text className="offer-card__description">
                {offer.description.substring(0, 300)}
              </Card.Text>
            </Card.Body>
          </Card>
        ) : (
          <>
            <Spinner animation="border" variant="info" />
          </>
        )}
      </>
    )
}
}
