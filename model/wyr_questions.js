// Define an array of "Would You Rather" questions with two answer options each
const questions = [
    {
        'question': 'Live in a house shaped like a triangle or a house shaped like a circle?',
        'answer1': 'Triangle house',
        'answer2': 'Circle house'
    },
    {
        'question': 'Have a cat-sized elephant or an elephant-sized cat?',
        'answer1': 'Cat-sized elephant',
        'answer2': 'Elephant-sized cat'
    },
    {
        'question': 'Be able to fly or be able to breathe underwater?',
        'answer1': 'Fly',
        'answer2': 'Breath underwater'
    },
    {
        'question': 'Play any musical instrument or speak any language?',
        'answer1': 'Play any musical instrument',
        'answer2': 'Speak any language'
    },
    {
        'question': 'Be a famous movie star or a famous scientist?',
        'answer1': 'Famous movie star',
        'answer2': 'Famous scientist'
    },
]

// Function to select a random "Would You Rather" question from the array
function randomWYRQuestion() {
    // Generate a random index within the range of the questions array
    const randomIndex = Math.floor(Math.random() * questions.length)
    // Retrieve the question object at the randomly selected index
    const randomQuestion = questions[randomIndex]
    return randomQuestion  // Return the randomly selected question object

}   

// Export the randomWYRQuestion function to make it accessible to other modules
module.exports = randomWYRQuestion