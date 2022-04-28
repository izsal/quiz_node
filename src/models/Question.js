const mysql_connector = require('mysql')

const QuestionSchema = new mysql_connector.Schema({
    description: String,
    alternatives: [
        {
            text: {
                type: String,
                required: true
            },
            isCorrect: {
                type: Boolean,
                required: true,
                default: false
            }
        }
    ],
    subjects: [{
        type: mysql_connector.Schema.Types.ObjectId,
        ref: 'Subject',
        required: false
    }]
})

module.exports = mysql_connector.model('Question', QuestionSchema)