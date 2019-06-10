//page my application to get it
const yup = require('');
const getMyApp= require('../../database/queries/applications/getMyApp');
const getMyApps = require('../../database/queries/applications/getMyApp'); 
module.exports = (req,res, next)=>{
    const {memberId}= req.params;
    const {offerId} = req.query;
    const schema = yup.object({
        offerId:yup.string().nullable(),
        memberId:yup.string().required()
    });
    schema.validate({
        offerId,
        memberId
    }).then(()=>{
        if(offerId){
            getMyApp(memberId,offerId)
            .then((result)=>{
                console.log(result.rows);
                
                // res.send({
                //     error:null,
                //     data:result.rows[0]
                // });
            })
            // .catch(()=> next({ code:500, msg:'intenal server error'}))
        }else{
            getMyApps(memberId)
            .then((result)=>{
                res.send({
                    error:null,
                    data:result.rows
                })
            })
            .catch(()=>next({code:500 , msg:'internal server error'}))
        }
    })
    .catch((err)=>{
        next ({code : 400 , msg:err.message})
    })
    // res.send('get my application')
}