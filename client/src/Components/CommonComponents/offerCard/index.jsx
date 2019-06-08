import React from 'react';
import { Card } from 'react-bootstrap';
export default class OfferCard extends React.Component{
    state={
        offer : null,
        statusLabel: null,
        statusDiv: null,
        hovered:'',
        saved:false
    };                          
    componentDidMount(){
        const {offer,status} = this.props;
        //saving card 
        if(offer.saved) this.setState({saved:true});///////////////////////////
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
        //save status(color)
        savedClassStatus = () => {
            const { saved } = this.state;
            if (saved) return 'favourite--saved';
            return 'favourite--unsaved';
          };
          //save id(icon)
          const {saved} = this.state;
          this.setState({saved:!saved})
          //hover
          handleHover = () => this.setState({ hovered: 'card-hovered' });
        render(){
            const {offer,statusDiv,statusLabel} = this.setState;
            const {hover, history} = this.props;/////////////////////////////////////////
            return(
                <>
                {offer ?(
                    <Card>
                        <span className={statusDiv}></span>
                        <span className={statusLabel}> {offer.status}</span>
                        <Card.Header>
                            <div className="header">
                                <span className="position">{offer.position}</span>
                                <span className="title">{offer.title}</span>
                            </div>
                            
                        </Card.Header>
                        <Button
                onClick={e => {
                  e.stopPropagation();
                  this.handleSave(offer.id);//to obtain of card saving(icon)
                }}
                className="offer-card__save-btn"
              >
                <i
                  className={`fas fa-bookmark offer-card__favourite ${this.savedClassStatus()}`}//if save put unsave and if unsvae put save(color)
                >
                  {' '}
                </i>
              </Button>
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


OfferCard.propTypes = {//////////////////////////////////////////////////
    offer: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      position: PropTypes.string,
      description: PropTypes.string,
      status: PropTypes.string,
      saved: PropTypes.bool,
    }),
    hover: PropTypes.bool,
    status: PropTypes.string,
  };