let questions = [
  {
  question: "What does AI stand for?",
  options: ["Artificial Intelligence", "Automated Internet", "Advanced Input", "Automatic Integration"],
  answer: 0
},
{
  question: "Which is an example of AI?",
  options: ["Calculator", "Google Maps", "Light Bulb", "Fan"],
  answer: 1
},
{
  question: "Which device uses AI to recognize your voice?",
  options: ["Microwave", "Speaker", "Smartphone", "Keyboard"],
  answer: 2
},
  {
  question: "Which of these is a common application of AI?",
  options: ["Email spam filter", "Television", "Refrigerator", "Light switch"],
  answer: 0
},
{
  question: "What is a chatbot?",
  options: ["A robot that cleans", "A program that talks with users", "A toy", "A machine that builds houses"],
  answer: 1
},
{
  question: "Which field is most related to AI?",
  options: ["Cooking", "Gardening", "Computer Science", "Painting"],
  answer: 2
},
{
  question: "AI helps computers to:",
  options: ["Sleep", "Think and learn", "Eat", "Dance"],
  answer: 1
},
{
  question: "Which of these is used in AI to learn from data?",
  options: ["Machine Learning", "Manual Coding", "Copying", "Drawing"],
  answer: 0
},
{
  question: "AI is mostly used in which modern service?",
  options: ["Online shopping suggestions", "Paper delivery", "Street cleaning", "Brick making"],
  answer: 0
},
{
  question: "Which assistant uses AI?",
  options: ["Siri", "Calculator", "Clock", "Flashlight"],
  answer: 0
},
{
  question: "AI stands for:",
  options: ["Automatic Information", "Artificial Intelligence", "Auto Input", "Advanced Integration"],
  answer: 1
},
{
  question: "Which one is NOT an AI application?",
  options: ["Face recognition", "Autonomous cars", "Online exams", "Light bulb"],
  answer: 3
},
{
  question: "AI helps in recognizing:",
  options: ["Voices and faces", "Smells", "Tastes", "Touch"],
  answer: 0
},
  {
  question: "Which algorithm is commonly used for classification tasks in AI?",
  options: ["K-Means", "Naive Bayes", "Linear Regression", "PCA"],
  answer: 1
},
{
  question: "What is overfitting in machine learning?",
  options: ["Model performs well on all data", "Model memorizes training data", "Model doesn't learn at all", "Model has high bias"],
  answer: 1
},
{
  question: "Which of the following is a supervised learning algorithm?",
  options: ["K-Means", "Apriori", "Decision Tree", "Autoencoder"],
  answer: 2
},
{
  question: "What does a neural network model consist of?",
  options: ["Nodes and links", "Weights and neurons", "Loops and counters", "Conditions and branches"],
  answer: 1
},
{
  question: "What is the main goal of reinforcement learning?",
  options: ["Classify data", "Group data", "Maximize reward", "Minimize bias"],
  answer: 2
},
{
  question: "What is 'backpropagation' used for?",
  options: ["Visualizing data", "Training neural networks", "Sorting datasets", "Reducing features"],
  answer: 1
},
{
  question: "Which of the following is a benefit of using deep learning?",
  options: ["Works with small data", "No training required", "Learns features automatically", "Needs no hardware"],
  answer: 2
},
{
  question: "Which AI technique is best for finding patterns without labels?",
  options: ["Supervised learning", "Reinforcement learning", "Unsupervised learning", "Regression"],
  answer: 2
},
{
  question: "What is the 'bias' in a machine learning model?",
  options: ["An input feature", "A kind of error", "A label", "A hidden neuron"],
  answer: 1
},
{
  question: "Which of the following is an activation function in neural networks?",
  options: ["ReLU", "RMS", "MSE", "ROC"],
  answer: 0
},
  {
  question: "Which language is most commonly used for developing AI models?",
  options: ["Java", "Python", "C++", "Ruby"],
  answer: 1
},
{
  question: "Which metric is used to evaluate classification models?",
  options: ["Accuracy", "Mean Squared Error", "R-squared", "Clustering Score"],
  answer: 0
}

  // 48 more to be added...
];

let current = 0;
let selected = Array(questions.length).fill(null);

function renderQuestion(index) {
  document.getElementById("question-text").innerText = questions[index].question;
  let optionsList = document.getElementById("options-list");
  optionsList.innerHTML = "";

  questions[index].options.forEach((opt, i) => {
    let li = document.createElement("li");
    li.innerText = opt;
    li.onclick = () => {
      selected[index] = i;
      renderQuestion(index); // re-render to highlight
    };
    if (selected[index] === i) li.style.background = "#4c5fb4";
    optionsList.appendChild(li);
  });

  document.querySelectorAll(".question-numbers button").forEach(btn => {
    btn.classList.remove("active");
  });
  document.getElementById(`qbtn-${index}`).classList.add("active");
}

function nextQuestion() {
  if (current < questions.length - 1) current++;
  renderQuestion(current);
}

function prevQuestion() {
  if (current > 0) current--;
  renderQuestion(current);
}

function buildQuestionNav() {
  let nav = document.getElementById("question-numbers");
  for (let i = 0; i < questions.length; i++) {
    let btn = document.createElement("button");
    btn.innerText = i + 1;
    btn.id = `qbtn-${i}`;
    btn.onclick = () => {
      current = i;
      renderQuestion(i);
    };
    nav.appendChild(btn);
  }
}

function submitQuiz() {
  let correct = 0;
  questions.forEach((q, i) => {
    if (selected[i] === q.answer) correct++;
  });
  let accuracy = (correct / questions.length) * 100;
  document.getElementById("result").style.display = "block";
  document.getElementById("result").innerText = `Score: ${correct}/${questions.length} (${accuracy.toFixed(2)}% accuracy)`;
}

// Countdown timer
let totalTime = 50 * 60;
setInterval(() => {
  if (totalTime <= 0) return;
  totalTime--;
  let minutes = Math.floor(totalTime / 60);
  let seconds = totalTime % 60;
  document.getElementById("timer").innerText = `Time remaining: ${minutes}:${seconds.toString().padStart(2, '0')}`;
}, 1000);

// Initialize
buildQuestionNav();
renderQuestion(current);
