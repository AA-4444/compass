import { Button } from '@/components/ui/button';
import { QuizResult } from '@/lib/quizData';
import { motion } from 'framer-motion';

interface ResultProps {
  result: QuizResult;
  onRestart: () => void;
}

const colorMap = {
  yellow: '#FFD700',
  red: '#E60000',
  orange: '#FF4500',
};

export default function Result({ result, onRestart }: ResultProps) {
  const topElements = result.elements
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
  const bottomElements = result.elements
    .sort((a, b) => a.score - b.score)
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F5DC] via-white to-[#FFF8DC] flex items-center justify-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full"
      >
        {/* Main Score Circle */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6, type: 'spring' }}
          className="mb-8 flex justify-center"
        >
          <div className="relative w-48 h-48 md:w-56 md:h-56">
            {/* Outer circle */}
            <svg
              className="absolute inset-0 w-full h-full transform -rotate-90"
              viewBox="0 0 200 200"
            >
              <circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="#E0E0E0"
                strokeWidth="8"
              />
              <motion.circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="8"
                strokeDasharray={`${(result.percentage / 100) * 565.48} 565.48`}
                initial={{ strokeDasharray: '0 565.48' }}
                animate={{ strokeDasharray: `${(result.percentage / 100) * 565.48} 565.48` }}
                transition={{ delay: 0.4, duration: 1.5 }}
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#FFD700" />
                  <stop offset="100%" stopColor="#FF4500" />
                </linearGradient>
              </defs>
            </svg>

            {/* Center content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <p className="text-sm text-[#888] font-semibold mb-2">
                  Ваш уровень счастья
                </p>
                <motion.p
                  className="text-5xl md:text-6xl font-bold text-[#2C2C2C]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  {result.percentage}%
                </motion.p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-3">
            {result.message}
          </h2>
          <p className="text-lg text-[#555]">
            {result.percentage <= 25 &&
              'Это начало вашего пути к устойчивому счастью. Каждый элемент важен для построения прочной архитектуры.'}
            {result.percentage > 25 && result.percentage <= 50 &&
              'У вас есть хороший фундамент. Продолжайте развивать каждый элемент для большей гармонии.'}
            {result.percentage > 50 && result.percentage <= 75 &&
              'Вы на правильном пути! Ваша архитектура счастья становится все более устойчивой.'}
            {result.percentage > 75 &&
              'Поздравляем! Вы создали мощную архитектуру счастья, где все элементы работают в гармонии.'}
          </p>
        </motion.div>

        {/* Element Breakdown */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mb-10 grid md:grid-cols-2 gap-6"
        >
          {/* Strongest Elements */}
          <div className="bg-white bg-opacity-70 backdrop-blur rounded-lg p-6 border border-[#FFD700] border-opacity-30">
            <h3 className="font-bold text-[#2C2C2C] mb-4 flex items-center">
              <span className="text-xl mr-2">💪</span>
              Ваши сильные стороны
            </h3>
            <div className="space-y-3">
              {topElements.map((element, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + idx * 0.1 }}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: colorMap[element.color as keyof typeof colorMap] }}
                    />
                    <span className="text-sm text-[#2C2C2C]">
                      {element.name}
                    </span>
                  </div>
                  <span className="font-bold text-[#FF4500]">{element.score}/4</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Areas for Growth */}
          <div className="bg-white bg-opacity-70 backdrop-blur rounded-lg p-6 border border-[#FF4500] border-opacity-30">
            <h3 className="font-bold text-[#2C2C2C] mb-4 flex items-center">
              <span className="text-xl mr-2">🌱</span>
              Области для развития
            </h3>
            <div className="space-y-3">
              {bottomElements.map((element, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + idx * 0.1 }}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: colorMap[element.color as keyof typeof colorMap] }}
                    />
                    <span className="text-sm text-[#2C2C2C]">
                      {element.name}
                    </span>
                  </div>
                  <span className="font-bold text-[#E60000]">{element.score}/4</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="bg-gradient-to-r from-[#FFD700] to-[#FF4500] rounded-lg p-8 text-center mb-6"
        >
          <h3 className="text-2xl font-bold text-white mb-3">
            Готовы углубить свою архитектуру счастья?
          </h3>
          <p className="text-white mb-6">
            Откройте полную методику Ицхака Пинтосевича и начните строить
            устойчивое счастье.
          </p>
          <a
            href="https://www.happi10.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#FF4500] font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Узнать больше об Архитектуре счастья
          </a>
        </motion.div>

        {/* Restart Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="flex gap-4"
        >
          <Button
            onClick={onRestart}
            className="flex-1 py-3 bg-white border-2 border-[#2C2C2C] text-[#2C2C2C] hover:bg-gray-50 font-semibold"
          >
            Пройти тест заново
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
