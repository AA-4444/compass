import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WelcomeScreen from "@/components/quiz/WelcomeScreen";
import QuizQuestion from "@/components/quiz/QuizQuestion";
import ResultScreen from "@/components/quiz/ResultScreen";
import { quizQuestions, calculateResult, type QuizResult } from "@/data/quizData";

type Screen = "welcome" | "quiz" | "result";

const Index = () => {
  const [screen, setScreen] = useState<Screen>("welcome");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const handleStart = () => {
    setScreen("quiz");
    setCurrentQuestion(0);
    setAnswers([]);
  };

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setScreen("result");
    }
  };

  const handleRestart = () => {
    setScreen("welcome");
    setCurrentQuestion(0);
    setAnswers([]);
  };

  const result: QuizResult | null =
    screen === "result" ? calculateResult(answers) : null;

  return (
    <div className="min-h-screen bg-warm-gradient relative overflow-hidden">
      <AnimatePresence mode="wait">
        {screen === "welcome" && (
          <motion.div
            key="welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <WelcomeScreen onStart={handleStart} />
          </motion.div>
        )}
        {screen === "quiz" && (
          <motion.div
            key={`quiz-${currentQuestion}`}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.35 }}
          >
            <QuizQuestion
              question={quizQuestions[currentQuestion]}
              questionNumber={currentQuestion + 1}
              totalQuestions={quizQuestions.length}
              onAnswer={handleAnswer}
            />
          </motion.div>
        )}
        {screen === "result" && result && (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ResultScreen result={result} onRestart={handleRestart} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
