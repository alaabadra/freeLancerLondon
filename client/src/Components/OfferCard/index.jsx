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
}
