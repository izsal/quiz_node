const mysql_connector = require('mysql')

const SubjectSchema = new mysql_connector.Schema({
    name: String
})

module.exports = mysql_connector.model('Subject', SubjectSchema)