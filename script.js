let questions = [
  {
    "question": "Which metric is used to evaluate classification models?",
    "options": ["Accuracy", "Mean Squared Error", "R-squared", "Clustering Score"],
    "answer": 0
  },
  {
    "question": "What is the primary goal of supervised learning?",
    "options": ["To learn from labeled data", "To find patterns in unlabeled data", "To optimize game strategies", "To generate random outputs"],
    "answer": 0
  },
  {
    "question": "Which of the following is a type of machine learning?",
    "options": ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "All of the above"],
    "answer": 3
  },
  {
    "question": "What does 'AI' stand for?",
    "options": ["Artificial Intelligence", "Automated Inference", "Advanced Integration", "Algorithmic Intelligence"],
    "answer": 0
  },
  {
    "question": "Which algorithm is commonly used for classification tasks?",
    "options": ["Linear Regression", "K-Means", "Decision Tree", "Principal Component Analysis"],
    "answer": 2
  },
  {
    "question": "What is overfitting in machine learning?",
    "options": ["When a model performs well on training data but poorly on test data", "When a model is too simple", "When data is perfectly balanced", "When a model ignores noise"],
    "answer": 0
  },
  {
    "question": "Which of these is NOT a neural network type?",
    "options": ["CNN (Convolutional Neural Network)", "RNN (Recurrent Neural Network)", "SVM (Support Vector Machine)", "GAN (Generative Adversarial Network)"],
    "answer": 2
  },
  {
    "question": "What is the purpose of a loss function?",
    "options": ["To measure model performance", "To generate random numbers", "To visualize data", "To clean datasets"],
    "answer": 0
  },
  {
    "question": "Which Python library is commonly used for machine learning?",
    "options": ["TensorFlow", "Pandas", "Scikit-learn", "All of the above"],
    "answer": 3
  },
  {
    "question": "What does 'deep learning' refer to?",
    "options": ["A type of machine learning using neural networks with many layers", "A method for data cleaning", "A statistical technique for regression", "A clustering algorithm"],
    "answer": 0
  },
  {
    "question": "Which of the following is an example of unsupervised learning?",
    "options": ["Linear Regression", "K-Means Clustering", "Logistic Regression", "Support Vector Machines"],
    "answer": 1
  },
  {
    "question": "What is the role of an activation function in a neural network?",
    "options": ["To introduce non-linearity", "To store weights", "To normalize data", "To shuffle datasets"],
    "answer": 0
  },
  {
    "question": "Which metric is used for regression models?",
    "options": ["Accuracy", "Mean Squared Error (MSE)", "Precision", "F1 Score"],
    "answer": 1
  },
  {
    "question": "What is a feature in machine learning?",
    "options": ["An input variable used for making predictions", "A type of algorithm", "A visualization tool", "A debugging technique"],
    "answer": 0
  },
  {
    "question": "Which of these is a reinforcement learning example?",
    "options": ["Training a robot to walk", "Classifying emails as spam or not", "Grouping customers by behavior", "Predicting house prices"],
    "answer": 0
  },
  {
    "question": "What is the purpose of a training set in machine learning?",
    "options": ["To train the model", "To test the model", "To deploy the model", "To visualize data"],
    "answer": 0
  },
  {
    "question": "Which of the following is NOT a supervised learning task?",
    "options": ["Classification", "Regression", "Clustering", "Image Recognition"],
    "answer": 2
  },
  {
    "question": "What does 'epoch' mean in deep learning?",
    "options": ["One complete pass through the training dataset", "A type of neural network", "A loss function", "A data preprocessing step"],
    "answer": 0
  },
  {
    "question": "Which algorithm is used for dimensionality reduction?",
    "options": ["K-Nearest Neighbors", "Principal Component Analysis (PCA)", "Random Forest", "Logistic Regression"],
    "answer": 1
  },
  {
    "question": "What is the main advantage of using a decision tree?",
    "options": ["Easy to interpret", "Requires large amounts of data", "Works only for regression", "Slow training time"],
    "answer": 0
  },
  {
    "question": "Which of these is a popular AI application?",
    "options": ["Facial recognition", "Weather forecasting", "Stock market prediction", "All of the above"],
    "answer": 3
  },
  {
    "question": "What is a hyperparameter in machine learning?",
    "options": ["A parameter set before training", "A learned parameter", "A type of dataset", "A visualization method"],
    "answer": 0
  },
  {
    "question": "Which of these is a common activation function?",
    "options": ["ReLU", "MSE", "PCA", "KNN"],
    "answer": 0
  },
  {
    "question": "What is the purpose of cross-validation?",
    "options": ["To evaluate model performance robustly", "To clean data", "To visualize neural networks", "To generate synthetic data"],
    "answer": 0
  },
  {
    "question": "Which of the following is an example of a classification problem?",
    "options": ["Predicting house prices", "Identifying spam emails", "Grouping similar customers", "Forecasting stock prices"],
    "answer": 1
  },
  {
    "question": "What is the main challenge in AI ethics?",
    "options": ["Bias in algorithms", "Computing power", "Data storage", "Model interpretability"],
    "answer": 0
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
