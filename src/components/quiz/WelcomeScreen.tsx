import { motion } from "framer-motion";
import { Compass } from "lucide-react";

interface WelcomeScreenProps {
  onStart: () => void;
}

const elements = [
  "Благодарность", "Обучение", "Гибкость мышления", "Комплименты",
  "Осознанность", "Доброта", "Смыслы и ценности", "Убеждения",
  "Планы и цели", "Энергия",
];

const WelcomeScreen = ({ onStart }: WelcomeScreenProps) => {
  return (
    <div className="min-h-screen bg-warm-gradient flex items-center justify-center px-4 py-8">
      <div className="max-w-2xl w-full text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <img
           src={`${import.meta.env.BASE_URL}newlogo.svg`}
            alt="HAPPI10"
           className="h-16 md:h-20 opacity-90 mb-8"
          />
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="mb-8 inline-block"
        >
          <div className="w-24 h-24 rounded-full btn-primary-gradient flex items-center justify-center shadow-lg">
            <Compass className="w-12 h-12 text-accent-foreground" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-3"
        >
          Компас счастья
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl font-heading font-semibold text-gradient-gold mb-8"
        >
          HAPPI10 Архитектура Счастья
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-10 space-y-4"
        >
          <p className="text-lg text-foreground leading-relaxed">
            Откройте для себя, насколько счастливы вы прямо сейчас.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Пройдите короткий тест из 10 вопросов, основанный на методике Ицхака Пинтосевича.
            Каждый вопрос измеряет один из 10 элементов архитектуры счастья.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-card/60 backdrop-blur-sm rounded-xl p-5 mb-10 border border-primary/20"
        >
          <p className="text-sm text-foreground/80">
            <span className="mr-2">✨</span>
            <span className="font-semibold text-gradient-gold">10 элементов счастья: </span>
            {elements.join(", ")}
          </p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={onStart}
          className="btn-primary-gradient text-accent-foreground font-heading font-bold py-4 px-14 rounded-xl text-lg btn-glow transition-all duration-300 hover:brightness-110"
        >
          Начать тест
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-8 text-sm text-muted-foreground"
        >
          Тест займёт примерно 3–5 минут
        </motion.p>
      </div>
    </div>
  );
};

export default WelcomeScreen;
