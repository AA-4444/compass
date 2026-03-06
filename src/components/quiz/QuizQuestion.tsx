import { useState } from "react";
import { motion } from "framer-motion";
import type { QuizQuestion as QuizQuestionType } from "@/data/quizData";

interface QuizQuestionProps {
  question: QuizQuestionType;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (value: number) => void;
}

const QuizQuestion = ({ question, questionNumber, totalQuestions, onAnswer }: QuizQuestionProps) => {
  const [selected, setSelected] = useState<number | null>(null);

  const handleSelect = (index: number, value: number) => {
    setSelected(index);
    setTimeout(() => onAnswer(value), 500);
  };

  const progress = (questionNumber / totalQuestions) * 100;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="max-w-xl w-full">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground font-heading">
              Вопрос {questionNumber} из {totalQuestions}
            </span>
            <span className="text-sm font-semibold font-heading text-gradient-gold">
              {question.element}
            </span>
          </div>
          <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
            <motion.div
              className="h-full btn-primary-gradient rounded-full"
              initial={{ width: `${((questionNumber - 1) / totalQuestions) * 100}%` }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Question card */}
        <div className="glass-card rounded-2xl p-6 md:p-8 mb-8">
          <div className="text-4xl mb-4">{question.emoji}</div>
          <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-3 leading-tight">
            {question.question}
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {question.description}
          </p>
        </div>

        {/* Answer options */}
        <div className="space-y-3">
          {question.answers.map((answer, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleSelect(index, answer.value)}
              className={`
                w-full text-left p-4 rounded-xl border transition-all duration-300 font-body text-sm md:text-base leading-relaxed
                ${selected === index
                  ? "btn-primary-gradient text-accent-foreground border-primary btn-glow font-semibold"
                  : "bg-card text-foreground border-border hover:border-primary/50 hover:shadow-md"
                }
              `}
            >
              {answer.text}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizQuestion;
