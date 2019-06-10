const connection = require('../../config/db_connection.js');
const getMemberSkills = (id) => {
    const selectMemberSkills = {
      text: `select id,name from skill inner join member_skill on skill.id = member_skill.skill_id where member_id = $1`,
      values: [id],
    };
    return connection.query(selectMemberSkills)
}
module.exports = getMemberSkills;

