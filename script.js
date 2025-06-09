let questions = [
  { // Easy
    "question": "What does AI stand for?",
    "options": ["Artificial Intelligence", "Automated Information", "Advanced Internet", "Algorithmic Input"],
    "answer": 0,
    "explanation": "AI stands for Artificial Intelligence - programs that can learn and make decisions.",
    "difficulty": "easy"
  },
  { // Medium
    "question": "What is the main purpose of a training dataset in machine learning?",
    "options": [
      "To teach the model patterns",
      "To test the final model",
      "To store backup data", 
      "To visualize results"
    ],
    "answer": 0,
    "explanation": "The training set is used to teach the model to recognize patterns before testing it on new data.",
    "difficulty": "medium"
  },
  { // Easy
    "question": "Which of these is an example of AI you use every day?",
    "options": ["Voice assistants (Siri/Alexa)", "Calculator app", "Camera flash", "Alarm clock"],
    "answer": 0,
    "explanation": "Voice assistants use AI to understand and respond to speech.",
    "difficulty": "easy"
  },
  { // Hard
    "question": "What problem does dropout solve in neural networks?",
    "options": [
      "Overfitting",
      "Slow training speed",
      "Data imbalance",
      "Feature selection"
    ],
    "answer": 0,
    "explanation": "Dropout randomly deactivates neurons during training to prevent over-reliance on specific nodes.",
    "difficulty": "hard"
  },
  { // Easy
    "question": "Can current AI feel emotions?",
    "options": ["No", "Yes", "Only positive ones", "Only when programmed to"],
    "answer": 0,
    "explanation": "AI can simulate emotions but doesn't experience them like humans.",
    "difficulty": "easy"
  },
  { // Medium
    "question": "Why do we split data into training and test sets?",
    "options": [
      "To check if the model works on new data",
      "To make the dataset smaller",
      "Because some data is faulty",
      "It's required for all algorithms"
    ],
    "answer": 0,
    "explanation": "The test set acts as unseen data to evaluate real-world performance.",
    "difficulty": "medium"
  },
  { // Hard
    "question": "What does the 'attention mechanism' in transformers do?",
    "options": [
      "Focuses on relevant parts of input",
      "Speeds up training",
      "Reduces memory usage",
      "Generates random outputs"
    ],
    "answer": 0,
    "explanation": "It weights the importance of different input parts (like focusing on key words in a sentence).",
    "difficulty": "hard"
  },
  { // Easy
    "question": "Which device commonly uses facial recognition AI?",
    "options": ["Smartphones", "Microwaves", "Hair dryers", "Doorbells"],
    "answer": 0,
    "explanation": "Phones use it for unlocking and photo organization.",
    "difficulty": "easy"
  },
  { // Medium
    "question": "What's the key advantage of random forests over single decision trees?",
    "options": [
      "Reduces overfitting",
      "Trains faster",
      "Works without data",
      "Only needs 10 samples"
    ],
    "answer": 0,
    "explanation": "By combining many trees, it averages out individual errors.",
    "difficulty": "medium"
  },
  { // Hard
    "question": "What does batch normalization accomplish in deep learning?",
    "options": [
      "Stabilizes layer inputs",
      "Increases batch size",
      "Skips gradient steps",
      "Visualizes features"
    ],
    "answer": 0,
    "explanation": "It normalizes inputs to each layer to maintain stable learning.",
    "difficulty": "hard"
  },
  { // Easy
    "question": "What do robot vacuums use to navigate?",
    "options": ["Sensors and AI", "Magic", "Remote control", "Human eyesight"],
    "answer": 0,
    "explanation": "They map rooms using sensors and AI pathfinding.",
    "difficulty": "easy"
  },
  { // Medium
    "question": "When would you use precision over accuracy?",
    "options": [
      "When false positives are dangerous (e.g., spam filtering)",
      "For all classification problems",
      "Only with neural networks",
      "When data is perfectly balanced"
    ],
    "answer": 0,
    "explanation": "Precision measures how many flagged items are truly positive.",
    "difficulty": "medium"
  },
  { // Easy
    "question": "Can AI create original artwork?",
    "options": ["Yes, like DALL-E", "No, never", "Only by copying", "Only in black/white"],
    "answer": 0,
    "explanation": "AI art tools generate new images from text prompts.",
    "difficulty": "easy"
  },
  { // Hard
    "question": "What is vanishing gradient problem?",
    "options": [
      "Early layers learn too slowly in deep networks",
      "Data disappears during training",
      "Models become too accurate",
      "GPUs overheat"
    ],
    "answer": 0,
    "explanation": "Gradients become extremely small as they backpropagate, stalling learning in early layers.",
    "difficulty": "hard"
  },
  { // Medium
    "question": "What does SMOTE do for imbalanced datasets?",
    "options": [
      "Creates synthetic minority samples",
      "Deletes majority samples",
      "Speeds up training",
      "Reduces feature count"
    ],
    "answer": 0,
    "explanation": "It oversamples the minority class by generating similar but artificial examples.",
    "difficulty": "medium"
  }
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
