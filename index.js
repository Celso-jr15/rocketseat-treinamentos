const questions = [
    "O que aprendi hoje? 1",
    "O que aprendi hoje? 2",
    "O que aprendi hoje? 3",
    "O que aprendi hoje? 4",
    "O que aprendi hoje? 5",
]


const ask = (index = 0 ) => {
    process.stdout.write("\n" + questions[index] + " > ")
}

ask()

const answers = []

process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if (answers.length < questions.length) {
        ask(answers.length)
    } else {
        console.log(answers)
        process.exit()
    }
})