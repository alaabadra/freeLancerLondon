const dbconnection = require('../../config/db_connection.js')
const addSavedOffer = (savedOfferInfo)=>{
    const queryAddSavedOffer = Object.values(savedOfferInfo)


const sqlAddSavedOffer = {
    text:'INSERT INTO saved_offer(member_id, offer_id) VALUES ($1 , $2) returning',
    VALUES:[...queryAddSavedOffer]
};

return dbconnection.query(sqlAddSavedOffer)
}
module.exports = {addSavedOffer};
