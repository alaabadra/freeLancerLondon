import React from 'react';
import offerDetails from '../../utils/offers.js'

export default class OfferCard extends React.Component {
    state = {
        offers: null
    };
    componentDidMount() {
        this.setState({offers : offerDetails})
    }

    render() {
        const { offers } = this.state;
        return (

            <>
                {offers
                    ? offers.map(item => {
                        if (item.status == 'active') {
                            return <OfferCard
                                offers={item}
                                key={item.id}
                                status={item.status}
                            />
                        }
                    })
            : null}
            </>

        )


    }
}