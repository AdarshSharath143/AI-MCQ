let questions = [
  {
    "question": "What does AI stand for?",
    "options": ["Artificial Intelligence", "Amazing Ideas", "Auto Insurance", "Animal Inspector"],
    "answer": 0
  },
  {
    "question": "Which of these is an example of AI?",
    "options": ["A calculator", "A voice assistant like Siri", "A bicycle", "A pencil"],
    "answer": 1
  },
  {
    "question": "What do robots use to 'see' things?",
    "options": ["Cameras", "Microphones", "Sunglasses", "Wheels"],
    "answer": 0
  },
  {
    "question": "What is a chatbot?",
    "options": ["A robot that cleans floors", "A computer program that talks like a human", "A type of video game", "A flying drone"],
    "answer": 1
  },
  {
    "question": "Which of these is NOT a use of AI?",
    "options": ["Playing chess", "Washing dishes by hand", "Recognizing faces in photos", "Driving self-driving cars"],
    "answer": 1
  },
  {
    "question": "What is machine learning?",
    "options": ["Teaching computers to learn from data", "Building robots with tools", "A sports training method", "A cooking technique"],
    "answer": 0
  },
  {
    "question": "Which animal is often used to represent AI in movies?",
    "options": ["A dog", "A cat", "A robot", "A dolphin"],
    "answer": 2
  },
  {
    "question": "What does a self-driving car use to navigate?",
    "options": ["Sensors and AI", "A magic wand", "A remote control", "A bicycle horn"],
    "answer": 0
  },
  {
    "question": "What is the name of the AI in smartphones that answers questions?",
    "options": ["Siri/Alexa/Google Assistant", "Superman", "Calculator", "Camera"],
    "answer": 0
  },
  {
    "question": "Which of these is made by AI?",
    "options": ["A handwritten letter", "A painting created by a computer", "A tree", "A rock"],
    "answer": 1
  },
  {
    "question": "What is data in AI?",
    "options": ["Information used to train computers", "A type of food", "A musical instrument", "A sports car"],
    "answer": 0
  },
  {
    "question": "What does a robot use to move?",
    "options": ["Motors", "Thoughts", "Magical powers", "A keyboard"],
    "answer": 0
  },
  {
    "question": "Which of these can AI help with?",
    "options": ["Answering questions", "Making pizza", "Growing taller", "Turning into a superhero"],
    "answer": 0
  },
  {
    "question": "What is a computer program?",
    "options": ["Instructions for a computer", "A TV show", "A type of sandwich", "A musical note"],
    "answer": 0
  },
  {
    "question": "Which device often uses AI at home?",
    "options": ["A smart speaker (like Alexa)", "A toaster", "A chair", "A lamp"],
    "answer": 0
  },
  {
    "question": "Can AI feel emotions like humans?",
    "options": ["Yes", "No", "Only on weekends", "Only when it rains"],
    "answer": 1
  },
  {
    "question": "What is a common AI toy for kids?",
    "options": ["A stuffed animal", "A robot dog", "A wooden block", "A water bottle"],
    "answer": 1
  },
  {
    "question": "What does 'smart' mean in 'smartphone'?",
    "options": ["It can use AI and apps", "It can fly", "It can cook food", "It can swim"],
    "answer": 0
  },
  {
    "question": "Which job can AI do?",
    "options": ["Answer customer questions", "Eat food", "Sleep", "Take a vacation"],
    "answer": 0
  },
  {
    "question": "What is a computer's 'brain' called?",
    "options": ["CPU", "Screen", "Keyboard", "Mouse"],
    "answer": 0
  },
  {
    "question": "Which of these is NOT a robot?",
    "options": ["A vacuum cleaner that moves by itself", "A person", "A toy that talks", "A car with no driver"],
    "answer": 1
  },
  {
    "question": "What is coding?",
    "options": ["Writing instructions for computers", "Drawing pictures", "Playing music", "Building a house"],
    "answer": 0
  },
  {
    "question": "Which of these is safe to share with AI?",
    "options": ["Your favorite color", "Your home address", "Your password", "Your family secrets"],
    "answer": 0
  },
  {
    "question": "What can AI do better than humans?",
    "options": ["Solve math problems quickly", "Feel love", "Eat pizza", "Blink"],
    "answer": 0
  },
  {
    "question": "Will AI replace all human jobs?",
    "options": ["Yes", "No", "Only on Mars", "Only in cartoons"],
    "answer": 1
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
