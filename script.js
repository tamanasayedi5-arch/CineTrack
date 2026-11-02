// 1. Select HTML Elements

const studySection = document.querySelector(".study-section");
const allQuestionsList = document.querySelector(".all-questions-section ul");
const addQuestionForm = document.querySelector(".add-question-section form");

const inputs = addQuestionForm.querySelectorAll("input");


// 2. Answers for Existing Questions

const answers = {
    "What is HTML?": "HTML is used to create the structure of web pages.",
    "What is CSS?": "CSS is used to style and design web pages.",
    "What is JavaScript?": "JavaScript makes web pages interactive."
};


// 3. Show Answer Function

studySection.addEventListener("click", function(event) {

    if (event.target.tagName === "BUTTON") {

        const questionBox = event.target.parentElement;
        const question = questionBox.querySelector("p").textContent;

        let answer = questionBox.querySelector(".answer");

        if (answer) {
            answer.remove();
            event.target.textContent = "Show Answer";
        } else {
            answer = document.createElement("p");
            answer.className = "answer";

            answer.textContent = answers[question] || questionBox.dataset.answer;

            questionBox.appendChild(answer);
            event.target.textContent = "Hide Answer";
        }
    }

});


// 4. Add New Question Function

addQuestionForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const question = inputs[0].value.trim();
    const answer = inputs[1].value.trim();

    if (question === "" || answer === "") {
        alert("Please enter both question and answer.");
        return;
    }


    // Create New Question Box

    const questionBox = document.createElement("div");
    questionBox.className = "question-box";

    questionBox.dataset.answer = answer;

    const questionText = document.createElement("p");
    questionText.textContent = question;

    const showButton = document.createElement("button");
    showButton.type = "button";
    showButton.textContent = "Show Answer";


    // Add Elements to Question Box

    questionBox.appendChild(questionText);
    questionBox.appendChild(showButton);

    studySection.appendChild(questionBox);


    // Add Question to All Questions List

    const listItem = document.createElement("li");
    listItem.textContent = question;

    allQuestionsList.appendChild(listItem);


    // Clear Input Fields

    addQuestionForm.reset();

    alert("Question added successfully!");

});
const studyPage = document.getElementById("studyPage");
const allPage = document.getElementById("allPage");
const addPage = document.getElementById("addPage");

document.getElementById("studyBtn").onclick = function() {
    studyPage.style.display = "block";
    allPage.style.display = "none";
    addPage.style.display = "none";
};

document.getElementById("allBtn").onclick = function() {
    studyPage.style.display = "none";
    allPage.style.display = "block";
    addPage.style.display = "none";
};

document.getElementById("addBtn").onclick = function() {
    studyPage.style.display = "none";
    allPage.style.display = "none";
    addPage.style.display = "block";
};