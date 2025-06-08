let questions = [
  {
    question: "What does AI stand for?",
    options: ["Artificial Interface", "Automated Intelligence", "Artificial Intelligence", "Advanced Innovation"],
    answer: 2
  },
  {
    question: "Which of the following is a type of AI?",
    options: ["Narrow AI", "Reactive AI", "General AI", "All of the above"],
    answer: 3
  },
  {
    question: "AI can be categorized into how many types?",
    options: ["1", "2", "3", "4"],
    answer: 2
  },
  {
    question: "Which AI type mimics human cognitive abilities?",
    options: ["Narrow AI", "General AI", "Reactive AI", "Weak AI"],
    answer: 1
  },
  {
    question: "Which is a subset of AI?",
    options: ["Cloud Computing", "Deep Learning", "Blockchain", "IoT"],
    answer: 1
  },
  {
    question: "Which is an unsupervised learning algorithm?",
    options: ["SVM", "Naive Bayes", "K-Means", "Linear Regression"],
    answer: 2
  },
  {
    question: "Which of the following is not an AI application?",
    options: ["Speech Recognition", "Face Recognition", "Email", "Autonomous Cars"],
    answer: 2
  },
  {
    question: "Who proposed the Turing Test?",
    options: ["John McCarthy", "Geoffrey Hinton", "Alan Turing", "Ray Kurzweil"],
    answer: 2
  },
  {
    question: "Which AI system learns from its environment?",
    options: ["Reactive", "Limited Memory", "Theory of Mind", "Super AI"],
    answer: 1
  },
  {
    question: "What does reinforcement learning involve?",
    options: ["Supervision", "Feedback", "Labels", "Rules"],
    answer: 1
  },
  {
    question: "In ML, what is overfitting?",
    options: ["High accuracy", "Too much data", "Poor generalization", "Perfect learning"],
    answer: 2
  },
  {
    question: "What does CNN stand for in AI?",
    options: ["Central Neural Network", "Convolutional Neural Network", "Circular Network Node", "Common Neural Net"],
    answer: 1
  },
  // You can repeat these themed questions (already varied) to fill remaining up to 50:
  {
    question: "What is the goal of supervised learning?",
    options: ["To label new data", "To find patterns", "To predict from labeled data", "To compress data"],
    answer: 2
  },
  {
    question: "What is backpropagation used for?",
    options: ["Outputting predictions", "Weight updates in neural networks", "Initializing data", "None of the above"],
    answer: 1
  },
  {
    question: "Which is a benefit of AI?",
    options: ["Consistency", "24/7 Availability", "Error Reduction", "All of the above"],
    answer: 3
  },
  {
    question: "Which of these is used in computer vision?",
    options: ["CNN", "RNN", "DNN", "LSTM"],
    answer: 0
  },
  {
    question: "Which of the following is not a type of neural network?",
    options: ["RNN", "LSTM", "CNN", "MLP Board"],
    answer: 3
  },
  {
  question: "Which AI technique is inspired by the human brain?",
  options: ["Genetic Algorithms", "Neural Networks", "Rule-based Systems", "Fuzzy Logic"],
  answer: 1
},
{
  question: "Which company developed AlphaGo?",
  options: ["Apple", "Facebook", "DeepMind", "IBM"],
  answer: 2
},
{
  question: "What does NLP stand for in AI?",
  options: ["Natural Logic Processing", "Non-Linear Processing", "Natural Language Processing", "Neural Learning Protocol"],
  answer: 2
},
{
  question: "Which of the following is not a machine learning type?",
  options: ["Supervised", "Unsupervised", "Reinforcement", "Cloud-based"],
  answer: 3
},
{
  question: "Which AI method learns from rewards and punishments?",
  options: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "Batch Learning"],
  answer: 2
},
{
  question: "What is the purpose of training data in machine learning?",
  options: ["To test accuracy", "To visualize data", "To teach the model", "To store information"],
  answer: 2
},
{
  question: "Which AI field focuses on enabling machines to see and interpret visual data?",
  options: ["Computer Graphics", "Computer Vision", "Image Rendering", "Vision Science"],
  answer: 1
},
{
  question: "Which is an example of weak AI?",
  options: ["Self-aware robot", "Siri", "AGI", "Human-like android"],
  answer: 1
},
{
  question: "What is a dataset?",
  options: ["A software tool", "A large hardware", "A collection of data", "An AI algorithm"],
  answer: 2
},
{
  question: "What is the function of an activation function in neural networks?",
  options: ["Store weights", "Add bias", "Introduce non-linearity", "Predict outcomes"],
  answer: 2
},
{
  question: "What is the first step in building a machine learning model?",
  options: ["Training the model", "Testing the model", "Collecting data", "Making predictions"],
  answer: 2
},
{
  question: "Which of these is a type of bias in AI?",
  options: ["Color bias", "Shape bias", "Data bias", "Volume bias"],
  answer: 2
},
{
  question: "Which machine learning model is tree-based?",
  options: ["Logistic Regression", "Decision Tree", "KNN", "SVM"],
  answer: 1
},
{
  question: "What is 'label' in supervised learning?",
  options: ["A name tag", "The input data", "The output we want to predict", "An algorithm"],
  answer: 2
},
{
  question: "Which of the following is used in AI for making decisions?",
  options: ["Decision Trees", "Graphs", "Networks", "Heaps"],
  answer: 0
},
{
  question: "Which component is essential for training deep learning models?",
  options: ["Hard Disk", "Mouse", "GPU", "WiFi"],
  answer: 2
},
{
  question: "Which model is best for sequence prediction?",
  options: ["CNN", "RNN", "SVM", "Decision Tree"],
  answer: 1
},
{
  question: "Which platform is widely used for AI and ML development?",
  options: ["WordPress", "TensorFlow", "Photoshop", "Autocad"],
  answer: 1
},
{
  question: "Which of the following is a clustering algorithm?",
  options: ["KNN", "K-Means", "SVM", "Random Forest"],
  answer: 1
},
{
  question: "Which of the following AI systems was developed by OpenAI?",
  options: ["Watson", "Alexa", "ChatGPT", "Cortana"],
  answer: 2
},
{
  question: "What does GAN stand for in AI?",
  options: ["Generated AI Network", "Generative Adversarial Network", "Graphical AI Network", "Generic Algorithm Node"],
  answer: 1
},
{
  question: "Which is a key component in reinforcement learning?",
  options: ["Classifier", "Dataset", "Reward", "Labels"],
  answer: 2
},
{
  question: "What is the primary goal of AI?",
  options: ["To replace humans", "To learn painting", "To mimic human intelligence", "To make art"],
  answer: 2
},
{
  question: "Which of the following is used in AI voice assistants?",
  options: ["Blockchain", "NLP", "Cloud Storage", "3D Rendering"],
  answer: 1
},
{
  question: "What is 'training' in machine learning?",
  options: ["Running the app", "Teaching model with data", "Testing predictions", "Deploying the model"],
  answer: 1
},
{
  question: "Which algorithm is best suited for regression problems?",
  options: ["Linear Regression", "Decision Tree", "SVM", "Naive Bayes"],
  answer: 0
},
{
  question: "Which of the following is an AI framework by Facebook?",
  options: ["Keras", "TensorFlow", "Scikit-learn", "PyTorch"],
  answer: 3
},
{
  question: "What is the final stage in building an AI model?",
  options: ["Collect data", "Model training", "Prediction", "Deployment"],
  answer: 3
},
{
  question: "Which of these is not a real-world AI application?",
  options: ["Medical diagnosis", "Spam filtering", "Language translation", "Cooking food"],
  answer: 3
},
{
  question: "What is the function of loss in a neural network?",
  options: ["Store weights", "Update data", "Measure prediction error", "Reset model"],
  answer: 2
},
{
  question: "Which AI technique allows machines to learn from consequences?",
  options: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "Deep Learning"],
  answer: 2
},
{
  question: "What is the brain of an AI system?",
  options: ["Algorithm", "Data", "Model", "CPU"],
  answer: 2
},
{
  question: "Which AI concept enables language translation?",
  options: ["Image Recognition", "NLP", "Clustering", "Linear Regression"],
  answer: 1
},
{
  question: "Which of the following is true about weak AI?",
  options: ["It can perform all human tasks", "It is purely theoretical", "It is specialized for specific tasks", "It understands emotions"],
  answer: 2
},
{
  question: "Which area of AI focuses on vision and image understanding?",
  options: ["Speech Recognition", "Computer Vision", "Neural Networking", "Big Data"],
  answer: 1
},
{
  question: "Which AI model is based on biological neurons?",
  options: ["SVM", "Decision Tree", "Neural Network", "KNN"],
  answer: 2
},
{
  question: "Which AI field focuses on knowledge representation and reasoning?",
  options: ["Machine Learning", "Computer Vision", "Expert Systems", "Natural Language Processing"],
  answer: 2
},
{
  question: "Which of these is a type of supervised learning?",
  options: ["Clustering", "Regression", "Association", "Dimensionality Reduction"],
  answer: 1
},
{
  question: "Which component helps AI systems improve accuracy over time?",
  options: ["Big Data", "Training", "Debugging", "Feedback"],
  answer: 3
},
{
  question: "Which company created AlphaGo?",
  options: ["IBM", "Facebook", "Google DeepMind", "OpenAI"],
  answer: 2
},
{
  question: "Which AI branch involves simulating human thinking processes?",
  options: ["Cognitive Computing", "Neural Networks", "Genetic Algorithms", "Robotics"],
  answer: 0
},
{
  question: "What kind of AI would have self-awareness?",
  options: ["Weak AI", "Narrow AI", "Theory of Mind AI", "Reactive AI"],
  answer: 2
},
{
  question: "Which of these is a generative AI model?",
  options: ["GPT", "SVM", "K-Means", "Random Forest"],
  answer: 0
},
{
  question: "What is the first step in building an AI model?",
  options: ["Deploying the model", "Collecting data", "Testing", "Training"],
  answer: 1
},
{
  question: "What is 'bias' in an AI model?",
  options: ["A model’s preference", "Incorrect data labeling", "Error from incorrect assumptions", "Overuse of CPU"],
  answer: 2
},
{
  question: "What is a common use of AI in healthcare?",
  options: ["Medical image analysis", "Textbook publishing", "Hospital cleaning", "Billing invoices"],
  answer: 0
},
{
  question: "What does 'unsupervised learning' mean?",
  options: ["Using labeled data", "Data with clear outcomes", "Learning without labels", "Learning by copying"],
  answer: 2
},
{
  question: "What does a recommender system use to suggest items?",
  options: ["Sorting Algorithms", "Regression Models", "User Behavior and Preferences", "Firewalls"],
  answer: 2
},
{
  question: "Which is a common issue when training large AI models?",
  options: ["Too much RAM", "Underfitting", "Infinite loops", "Lack of Wi-Fi"],
  answer: 1
},
{
  question: "Which ethical concern is linked to facial recognition AI?",
  options: ["Data Compression", "Color Correction", "Privacy Violation", "Image Enhancement"],
  answer: 2
},
{
  question: "Which of these is an example of Natural Language Processing?",
  options: ["Image recognition", "Speech-to-text conversion", "Robot navigation", "Game playing"],
  answer: 1
},
{
  question: "Which learning type requires labeled data?",
  options: ["Reinforcement learning", "Unsupervised learning", "Supervised learning", "Self learning"],
  answer: 2
},
{
  question: "Which algorithm is used in decision-making trees?",
  options: ["ID3", "CNN", "RNN", "LSTM"],
  answer: 0
},
{
  question: "Which of these tasks is NOT typically done by AI?",
  options: ["Playing chess", "Generating music", "Solving calculus proofs", "Making coffee physically"],
  answer: 3
},
{
  question: "Which metric measures the performance of a classification model?",
  options: ["Accuracy", "Mean Squared Error", "Compression Rate", "Gradient"],
  answer: 0
},
{
  question: "Which technique helps prevent overfitting?",
  options: ["High learning rate", "Dropout", "Infinite training", "More layers"],
  answer: 1
},
{
  question: "Which one is NOT a type of machine learning?",
  options: ["Supervised", "Unsupervised", "Reinforced", "Hyperspaced"],
  answer: 3
},
{
  question: "Which model is used for sequence prediction?",
  options: ["CNN", "KNN", "RNN", "SVM"],
  answer: 2
},
{
  question: "Which tool is commonly used for building AI models in Python?",
  options: ["NumPy", "TensorFlow", "Flask", "PyGame"],
  answer: 1
},
{
  question: "Which dataset is popular for image classification tasks?",
  options: ["MNIST", "IMDB", "WikiText", "CIFAR-100"],
  answer: 0
},
{
  question: "What is vanishing gradient problem in deep learning?",
  options: ["Loss becomes constant", "Gradients become too small to update weights", "Learning rate is too high", "Too many output nodes"],
  answer: 1
},
{
  question: "What is the main purpose of an activation function in a neural network?",
  options: ["To update weights", "To introduce non-linearity", "To reduce loss", "To normalize inputs"],
  answer: 1
},
{
  question: "Which optimizer adapts the learning rate for each parameter?",
  options: ["SGD", "Adam", "RMSProp", "Gradient Descent"],
  answer: 1
},
{
  question: "What is the role of a loss function in training AI models?",
  options: ["To initialize weights", "To prevent overfitting", "To measure prediction error", "To clean the data"],
  answer: 2
},
{
  question: "In GANs, what does the discriminator do?",
  options: ["Generates fake data", "Evaluates real vs. fake data", "Adds noise", "Improves data quality"],
  answer: 1
},
{
  question: "Which concept describes how AI systems make decisions that humans can understand?",
  options: ["Generalization", "Explainability", "Bias-variance tradeoff", "Optimization"],
  answer: 1
},
{
  question: "Which technique is used for dimensionality reduction?",
  options: ["PCA", "CNN", "Gradient Descent", "Dropout"],
  answer: 0
},
{
  question: "Which neural network type is best for time-series forecasting?",
  options: ["CNN", "RNN", "DNN", "GAN"],
  answer: 1
},
{
  question: "Which method is used to train a deep neural network efficiently?",
  options: ["Mini-batch Gradient Descent", "Greedy Search", "Stochastic Dropout", "Pruning"],
  answer: 0
},
{
  question: "Which of the following is a challenge in reinforcement learning?",
  options: ["Sparse rewards", "Too much labeled data", "Short training time", "Few parameters"],
  answer: 0
},
{
  question: "Which AI application is widely used in recommendation systems?",
  options: ["K-Means Clustering", "Collaborative Filtering", "Reinforcement Learning", "A* Search"],
  answer: 1
},
{
  question: "Which company developed the AI assistant named Siri?",
  options: ["Google", "Microsoft", "Apple", "Amazon"],
  answer: 2
},
{
  question: "Which AI technique is used in fraud detection?",
  options: ["Linear Regression", "Anomaly Detection", "Apriori Algorithm", "Backpropagation"],
  answer: 1
},
{
  question: "Which of the following is an example of AI in healthcare?",
  options: ["Self-driving cars", "Disease prediction", "Facial recognition", "Spam detection"],
  answer: 1
},
{
  question: "Which AI-powered system is used in autonomous vehicles for perception?",
  options: ["Speech Recognition", "Computer Vision", "Text Classification", "Machine Translation"],
  answer: 1
},
{
  question: "ChatGPT is an example of an AI system built for:",
  options: ["Time-series forecasting", "Image processing", "Natural Language Processing", "Pathfinding"],
  answer: 2
},
{
  question: "How is AI used in agriculture?",
  options: ["Predicting crop diseases", "Operating elevators", "Managing stock portfolios", "Language translation"],
  answer: 0
},
{
  question: "Which AI application is common in email services?",
  options: ["Spam filtering", "Speech synthesis", "Robotic control", "Autonomous navigation"],
  answer: 0
},
{
  question: "Which AI method is commonly used in chatbots?",
  options: ["Sorting algorithms", "Natural Language Understanding", "Image Captioning", "Path Optimization"],
  answer: 1
},
{
  question: "AI in banking is primarily used for:",
  options: ["Code compilation", "Transaction optimization", "Fraud detection and customer service", "Game development"],
  answer: 2
},
{
  question: "In 2025, which AI model architecture is widely used for large-scale language tasks?",
  options: ["CNN", "Transformers", "RNN", "Naive Bayes"],
  answer: 1
},
{
  question: "Which AI technology is enhancing customer support through voice and chat in 2025?",
  options: ["OCR", "GANs", "Conversational AI", "Reinforcement Learning"],
  answer: 2
},
{
  question: "Which AI application is transforming the retail experience in 2025?",
  options: ["Predictive maintenance", "Autonomous checkout", "Speech-to-text", "Anomaly detection"],
  answer: 1
},
{
  question: "What is AI being used for in climate change research in 2025?",
  options: ["Crop rotation", "Predicting climate patterns", "Movie recommendation", "Speech generation"],
  answer: 1
},
{
  question: "Which generative AI technology is widely used for content creation in 2025?",
  options: ["CNN", "Autoencoders", "Diffusion Models", "Support Vector Machines"],
  answer: 2
},
{
  question: "In 2025, which AI tool is aiding radiologists in diagnosis?",
  options: ["Object detection", "Chatbots", "LLMs", "Medical image analysis AI"],
  answer: 3
},
{
  question: "What role does AI play in autonomous drone delivery in 2025?",
  options: ["Packaging", "Manual navigation", "Route optimization and obstacle avoidance", "Scheduling flights"],
  answer: 2
},
{
  question: "How is AI used in finance in 2025?",
  options: ["Creating memes", "Predicting stock trends and detecting fraud", "Counting coins", "Voice dubbing"],
  answer: 1
},
{
  question: "Which AI application helps personalize education in 2025?",
  options: ["Generative Adversarial Networks", "Adaptive learning platforms", "Neural Style Transfer", "Face detection"],
  answer: 1
},
{
  question: "Which AI-based tool is helping video creators in 2025 with auto-captioning and summarization?",
  options: ["Siri", "YOLO", "AI video editors", "Turing machine"],
  answer: 2
},
{
  question: "Which component of an AI system is responsible for learning from data?",
  options: ["Perception", "Inference Engine", "Learning Algorithm", "Knowledge Base"],
  answer: 2
},
{
  question: "Which logic is commonly used for handling uncertainty in AI?",
  options: ["Boolean Logic", "Fuzzy Logic", "Predicate Logic", "Propositional Logic"],
  answer: 1
},
{
  question: "What is the main purpose of the Turing Test?",
  options: [
    "To benchmark processor speed",
    "To compare neural network models",
    "To evaluate an AI's ability to mimic human intelligence",
    "To measure software development efficiency"
  ],
  answer: 2
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
