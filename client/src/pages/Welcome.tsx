import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface WelcomeProps {
  onStart: () => void;
}

export default function Welcome({ onStart }: WelcomeProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F5DC] via-white to-[#FFF8DC] flex items-center justify-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full text-center"
      >
        {/* Logo/Title */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8"
        >
          <div className="inline-block mb-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FF4500] flex items-center justify-center shadow-lg">
              <span className="text-4xl font-bold text-white">🧭</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-[#2C2C2C] mb-2">
            Компас счастья
          </h1>
          <p className="text-xl text-[#FF4500] font-semibold">
            HAPPI10 Архитектура Счастья
          </p>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-lg text-[#2C2C2C] mb-4 leading-relaxed">
            Откройте для себя, насколько счастливы вы прямо сейчас.
          </p>
          <p className="text-base text-[#555] leading-relaxed mb-6">
            Пройдите короткий тест из 10 вопросов, основанный на методике
            Ицхака Пинтосевича. Каждый вопрос измеряет один из 10 элементов
            архитектуры счастья, которые создают устойчивое состояние
            благополучия.
          </p>
          <div className="bg-white bg-opacity-60 backdrop-blur rounded-lg p-6 border border-[#FFD700] border-opacity-30">
            <p className="text-sm text-[#2C2C2C]">
              ✨ <strong>10 элементов счастья:</strong> Благодарность, Обучение,
              Гибкость мышления, Комплименты, Осознанность, Доброта, Смыслы и
              ценности, Убеждения, Планы и цели, Энергия
            </p>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Button
            onClick={onStart}
            className="bg-gradient-to-r from-[#FFD700] to-[#FF4500] hover:from-[#FFC700] hover:to-[#FF3500] text-white font-bold py-6 px-12 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Начать тест
          </Button>
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12 text-sm text-[#888]"
        >
          Тест займет примерно 3-5 минут
        </motion.p>
      </motion.div>
    </div>
  );
}
