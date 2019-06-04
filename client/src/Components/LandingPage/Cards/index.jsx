import React from 'react';
import {Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.css';
const renderCard = data=>{
    data.map(({ id, imageUrl, fullname,profession,title})=>(
          <Link key={id} to="/" className="cards__cadrs">
    <div className="cards__img">
        <img src={imageUrl} alt={`${fullname} fullname`}/>
    </div>
    <div>
        <h3 className='cards__title'>{fullname}</h3>
        <h3 className='cards__sub-title'>{profession}</h3>
        <h3 className='cards__desc'>{title}</h3>
    </div>
    </Link>  
    ))
    const Cards = ({ data }) => {
        return <section className="cards__container">{renderCard(data)}</section>;
      };
      
      Cards.defaultProps = { data: [] };/////////////////////////////////
      
      Cards.propTypes = {////////////////////////////////
        data: PropTypes.arrayOf(
          PropTypes.shape({
            imageUrl: PropTypes.string,
            fullName: PropTypes.string,
            profession: PropTypes.string,
            text: PropTypes.string,
          })
        ),
      };

}