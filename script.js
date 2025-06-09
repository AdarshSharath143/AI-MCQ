let questions = [
  {
    "question": "What is AI short for?",
    "options": ["Artificial Intelligence", "Amazing Internet", "Apple Ice", "Animal Inspector"],
    "answer": 0,
    "explanation": "AI stands for Artificial Intelligence, which means making computers smart!"
  },
  {
    "question": "Which of these is an example of AI?",
    "options": ["A talking robot", "A bicycle", "A pencil", "A chair"],
    "answer": 0,
    "explanation": "Talking robots use AI to understand and respond to people."
  },
  {
    "question": "What does a smart speaker (like Alexa) use to answer questions?",
    "options": ["Artificial Intelligence", "Magic", "A tiny person inside", "Wind power"],
    "answer": 0,
    "explanation": "Smart speakers use AI to listen and give answers."
  },
  {
    "question": "Which of these can AI help with?",
    "options": ["Answering homework questions", "Making pizza dough", "Growing plants", "Painting a house"],
    "answer": 0,
    "explanation": "AI like chatbots can help explain school topics!"
  },
  {
    "question": "What do self-driving cars use to see the road?",
    "options": ["Cameras and sensors", "Binoculars", "Telescopes", "Magnifying glasses"],
    "answer": 0,
    "explanation": "They use special cameras and sensors just like eyes!"
  },
  {
    "question": "Can AI feel emotions like humans?",
    "options": ["No", "Yes", "Only at night", "When it rains"],
    "answer": 0,
    "explanation": "AI can pretend but doesn't feel real emotions."
  },
  {
    "question": "Which of these is NOT a robot?",
    "options": ["A toaster", "A vacuum that cleans by itself", "A toy dinosaur that walks", "A car that drives itself"],
    "answer": 0,
    "explanation": "Regular toasters don't use AI or move on their own!"
  },
  {
    "question": "What does a face recognition app use?",
    "options": ["AI to identify people", "A secret password", "Fingerprints", "Your voice"],
    "answer": 0,
    "explanation": "It uses AI to study face shapes and features."
  },
  {
    "question": "How do video games use AI?",
    "options": ["To make smart enemies", "To paint the screen", "To build the game console", "To add sound effects"],
    "answer": 0,
    "explanation": "AI helps game characters act smart and challenging!"
  },
  {
    "question": "What is a chatbot?",
    "options": ["A computer program that talks", "A robot waiter", "A phone case", "A video game controller"],
    "answer": 0,
    "explanation": "Chatbots use AI to have text conversations."
  },
  {
    "question": "Which of these uses AI to recommend videos?",
    "options": ["YouTube", "A calculator", "A flashlight app", "A calendar"],
    "answer": 0,
    "explanation": "YouTube's AI suggests videos you might like!"
  },
  {
    "question": "What is machine learning?",
    "options": ["Teaching computers with examples", "Building robots with tools", "Playing video games", "Drawing pictures"],
    "answer": 0,
    "explanation": "It's how AI learns from data, like practicing math problems."
  },
  {
    "question": "Which animal is often shown with robots in movies?",
    "options": ["Dogs", "Cats", "Fish", "Birds"],
    "answer": 0,
    "explanation": "Robot dogs like Sony's Aibo are famous AI pets!"
  },
  {
    "question": "What does 'smart' mean in 'smartphone'?",
    "options": ["It can use AI apps", "It's very heavy", "It changes color", "It can fly"],
    "answer": 0,
    "explanation": "Smartphones have AI for photos, maps, and assistants!"
  },
  {
    "question": "Can AI write stories?",
    "options": ["Yes, like ChatGPT", "No, never", "Only in winter", "Only about animals"],
    "answer": 0,
    "explanation": "AI like ChatGPT can write poems and stories!"
  },
  {
    "question": "What do robots use to move their arms?",
    "options": ["Motors", "Muscles", "Batteries", "Solar power"],
    "answer": 0,
    "explanation": "Motors help robots move just like our muscles!"
  },
  {
    "question": "Which of these is safe to tell an AI assistant?",
    "options": ["What's the weather?", "Your home address", "Your password", "Your mom's name"],
    "answer": 0,
    "explanation": "Never share private info with AI!"
  },
  {
    "question": "What does a robot vacuum use to clean?",
    "options": ["AI to map rooms", "A broom", "A mop", "A dustpan"],
    "answer": 0,
    "explanation": "It uses AI to remember where it cleaned!"
  },
  {
    "question": "Which job can AI do?",
    "options": ["Answer customer questions", "Eat pizza", "Go swimming", "Take naps"],
    "answer": 0,
    "explanation": "AI chatbots help customers in online stores!"
  },
  {
    "question": "What is a 'smart home'?",
    "options": ["A house with AI devices", "A house made of glass", "A treehouse", "A house that floats"],
    "answer": 0,
    "explanation": "Smart homes use AI for lights, security, and more!"
  },
  {
    "question": "Can AI play chess?",
    "options": ["Yes, very well!", "No, it's too hard", "Only on Tuesdays", "Only with 2 players"],
    "answer": 0,
    "explanation": "AI like Deep Blue beat world champions!"
  },
  {
    "question": "What does a voice assistant (like Siri) need to work?",
    "options": ["Microphone to hear you", "A camera", "A printer", "A keyboard"],
    "answer": 0,
    "explanation": "It listens through your phone's microphone!"
  },
  {
    "question": "Which of these is made by AI?",
    "options": ["A cartoon drawn by computer", "A sandwich", "A paper airplane", "A wooden chair"],
    "answer": 0,
    "explanation": "AI art tools can create cartoons and paintings!"
  },
  {
    "question": "Will AI replace all human jobs?",
    "options": ["No, just some", "Yes, next year", "Only in space", "Only for teachers"],
    "answer": 0,
    "explanation": "AI helps with some tasks but needs humans too!"
  },
  {
    "question": "What is the most important thing about AI?",
    "options": ["It helps people", "It's scary", "It can replace humans", "It doesn't need electricity"],
    "answer": 0,
    "explanation": "The best AI helps doctors, teachers, and scientists!"
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
