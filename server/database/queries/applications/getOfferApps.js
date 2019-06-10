const connection = require('../../config/db_connection');

const getOfferApps = (offerId) => {
  const selectOfferApps = {
    text: `select
    application.member_id, member.username , member.full_name , member.avatar, application.proposal, hired_member.status
    from application
    left outer join member on application.member_id= member.id
    left outer join hired_member on (application.member_id=hired_member.member_id and application.offer_id=hired_member.offer_id)
    where (application.offer_id=$1)`,
    values: [offerId],
  };
  return connection.query(selectOfferApps);
};

module.exports = getOfferApps;