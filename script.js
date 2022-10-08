// document.querySelectorAll(".question").forEach((question) => question.addEventListener("click", () => {
//     if(question.parentNode.classList.contains("active")) {
//         question.parentNode.classList.toggle("active")
//     } else {
//         document.querySelectorAll(".question").forEach(question => question.parentNode.classList.remove("active"))

//         question.parentNode.classList.add("active")
//     }
// }))

// document.querySelectorAll('.answer').forEach((answer) => question.addEventListener('click', () => {
//     if(question.parentElement.classList.contains('active')){
//         question.parentElement.classList.toggle('active')
//     } else {
//         document.querySelectorAll('.answer').forEach(question => question.parentElement.classList.remove('active'))

//         question.parentElement.classList.add('active')
//     }
// }))

const questions = document.querySelectorAll('.question');

questions.forEach((question) => 
    question.addEventListener('click', () => {
        if(question.parentNode.classList.contains('active')){
            question.parentNode.classList.toggle('active')
        } else {
            questions.forEach((question) => question.parentNode.classList.remove('active'))
            question.parentNode.classList.add('active')
        }
    })
)