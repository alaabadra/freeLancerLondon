//when click on card on mark save (fav)will add in page saved offer
const { addSavedOffer} = require('../../database/queries/offer/addSavedOffer.js')
module.exports = (req, res) => {
  const savedOfferInfo = req.body;
  addSavedOffer(savedOfferInfo)
    .then(({rows:saved})=>{
      if (!saved[0]) return next({ code: 400, msg: 'Bad Request ' });
      return res.status(200).send({ error: null, data: saved[0] });
    })
    // res.send('add saved offer ');
  };