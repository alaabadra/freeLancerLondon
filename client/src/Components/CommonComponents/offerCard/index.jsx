import React from 'react';
import { Card } from 'react-bootstrap';
export default class OfferCard extends React.Component{
    state={
        offer : null,
        statusLabel: null,
        statusDiv: null,
    };
    componentDidMount(){
        const {offer,status} = this.props;
        this.setState({offer});
        switch(status){
            case 'completed':
            this.setState({
                statusLabel:'completed',
                statusDiv:'green'
            });
            break;
            case 'in progress':
            this.setState({
                statusLabel:'progress',
                statusDiv:'orange'
            });
            break;
            case 'pending':
            this.setState({
                statusLabel:'pending',
                statusDiv:'blue'
            });
            break;
            default:
            this.setState({
                statusLabel:'active'
            })
        }
        render(){
            const {offer,statusDiv,statusLabel} = this.setState;
            return(
                <>
                {offer ?(
                    <Card>
                        <span className={statusDiv}></span>
                        <Card.Header>
                            <div className="header">
                                <span className="position">{offer.position}</span>
                                <span className="title">{offer.title}</span>
                            </div>
                            <span className={statusLabel}> {offer.status}</span>
                        </Card.Header>
                    </Card>
                ):(
                    <>
                    <span>loading ...</span>
                    </>
                )}
                </>
            )
        }
    }
}