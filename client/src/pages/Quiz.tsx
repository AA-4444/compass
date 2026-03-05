import { Button } from '@/components/ui/button';
import { quizQuestions } from '@/lib/quizData';
import { motion, AnimatePresence } from 'framer-motion';

interface QuizProps {
  currentQuestion: number;
  scores: number[];
  onAnswer: (points: number) => void;
  onPrevious: () => void;
}

const colorMap = {
  yellow: '#FFD700',
  red: '#E60000',
  orange: '#FF4500',
};

export default function Quiz({
  currentQuestion,
  scores,
  onAnswer,
  onPrevious,
}: QuizProps) {
  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
  const elementColor = colorMap[question.elementColor];
  const isAnswered = scores[currentQuestion] !== undefined;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F5DC] via-white to-[#FFF8DC] flex items-center justify-center px-4 py-8">
      <div className="max-w-2xl w-full">
        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8"
        >
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-semibold text-[#2C2C2C]">
              Вопрос {currentQuestion + 1} из {quizQuestions.length}
            </span>
            <span className="text-sm text-[#888]">{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
              className="h-full bg-gradient-to-r from-[#FFD700] to-[#FF4500]"
            />
          </div>
        </motion.div>

        {/* Element Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <div
            className="inline-block px-4 py-2 rounded-full text-white font-semibold text-sm"
            style={{ backgroundColor: elementColor }}
          >
            {question.element}
          </div>
        </motion.div>

        {/* Question */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-2">
              {question.question}
            </h2>
            <div
              className="h-1 w-16 rounded-full"
              style={{ backgroundColor: elementColor }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Answer Options */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-3 mb-8"
        >
          {question.answers.map((answer, idx) => (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onAnswer(answer.points)}
              className={`w-full p-4 rounded-lg text-left font-medium transition-all duration-300 border-2 ${
                isAnswered && scores[currentQuestion] === answer.points
                  ? 'border-[#E60000] bg-[#E60000] text-white shadow-lg'
                  : 'border-gray-200 bg-white text-[#2C2C2C] hover:border-[#FFD700] hover:bg-[#FFF8DC]'
              }`}
            >
              <div className="flex items-center">
                <span className="text-lg mr-3">
                  {isAnswered && scores[currentQuestion] === answer.points
                    ? '✓'
                    : '○'}
                </span>
                <span>{answer.text}</span>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex gap-4"
        >
          <Button
            onClick={onPrevious}
            disabled={currentQuestion === 0}
            variant="outline"
            className="flex-1 py-3 border-2 border-gray-300 text-[#2C2C2C] hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ← Назад
          </Button>
          <Button
            disabled={!isAnswered}
            className="flex-1 py-3 bg-gradient-to-r from-[#FFD700] to-[#FF4500] hover:from-[#FFC700] hover:to-[#FF3500] text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {currentQuestion === quizQuestions.length - 1
              ? 'Получить результат'
              : 'Далее →'}
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
