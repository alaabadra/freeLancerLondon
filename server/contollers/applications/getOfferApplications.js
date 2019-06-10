const getOfferApps = require('../../database/queries/applications/getOfferApps');
module.exports= (req,res)=>{
    const { offerId } = req.params;
    getOfferApps(offerId)
    .then((result)=>{
        console.log(result);
        
        // res.send({
        //     error:null,
        //     data:result.rows
        // })
    })
    .catch(()=> next({code : 500 , msg:'internal server error'}));
    res.send('get offer app')
}