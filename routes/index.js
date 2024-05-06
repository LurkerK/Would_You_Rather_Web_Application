const express = require('express')
const router = express.Router()
const randomWYRQuestion = require('../model/wyr_questions')

// Route for the home page
router.get('/', function(req, res, next) {
    res.send('Placeholder for home page')
})

// Route for retrieving Would You Rather Question
router.get('/wyr', function(req, res, next) {
    // const wyr = {
    //     'question': 'Live in a circle hosue or a triangle house',
    //     'answer1': 'Circle house',
    //     'answer2': 'Triangle house'
    // }

    const wyr = randomWYRQuestion()  // random question is retrieved
    res.json(wyr)  // send the question as JSON response

})


module.exports = router