import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";
import { quizQuestions } from "@/data/quizData";
import { getResultLevel, type QuizResult } from "@/data/quizData";
import {
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  Radar, ResponsiveContainer,
} from "recharts";

interface ResultScreenProps {
  result: QuizResult;
  onRestart: () => void;
}

const ResultScreen = ({ result, onRestart }: ResultScreenProps) => {
  const level = getResultLevel(result.average);

  const chartData = quizQuestions.map((q, i) => ({
    element: q.element,
    value: result.answers[i],
    fullMark: 10,
  }));

  return (
    <div className="min-h-screen bg-warm-gradient flex items-center justify-center px-4 py-8">
      <div className="max-w-2xl w-full">
        {/* Score header */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="text-center mb-8"
        >
          <div className="text-6xl mb-4">{level.emoji}</div>
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
            {level.title}
          </h1>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-5xl font-heading font-black text-gradient-gold">
              {result.total}
            </span>
            <span className="text-xl text-muted-foreground font-heading">/ 100</span>
          </div>
          <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
            {level.description}
          </p>
        </motion.div>
        
        {/* Gift CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card/90 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-primary/20 shadow-lg text-center"
        >
          <p className="text-base md:text-lg font-heading font-semibold text-foreground mb-4">
            <span className="text-gradient-gold font-bold">
              Получи в подарок скидку 90%
            </span>{" "}
            на проверенную систему по достижению устойчивого ощущения счастья,
            к которой я шел 20 лет.
          </p>
        
          <a
            href="https://www.happi10.com/#programs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block btn-primary-gradient text-accent-foreground font-heading font-bold py-4 px-10 rounded-xl text-lg btn-glow transition-all duration-300 hover:brightness-110 hover:scale-105"
          >
            Получить доступ
          </a>
        </motion.div>

        {/* Radar chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-card/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 mb-8 border border-primary/20 shadow-lg"
        >
          <h3 className="text-lg font-heading font-semibold text-foreground mb-4 text-center">
            Ваш профиль счастья
          </h3>
          <div className="w-full h-[300px] md:h-[380px]">
            <ResponsiveContainer>
              <RadarChart data={chartData} cx="50%" cy="50%" outerRadius="70%">
                <PolarGrid stroke="hsl(45 20% 85%)" />
                <PolarAngleAxis
                  dataKey="element"
                  tick={{ fill: "hsl(0 0% 40%)", fontSize: 10 }}
                />
                <PolarRadiusAxis
                  angle={90}
                  domain={[0, 10]}
                  tick={{ fill: "hsl(0 0% 55%)", fontSize: 10 }}
                />
                <Radar
                  name="Счастье"
                  dataKey="value"
                  stroke="hsl(20 100% 50%)"
                  fill="hsl(45 100% 50%)"
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Individual scores */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-card/80 backdrop-blur-sm rounded-2xl p-5 md:p-6 mb-8 border border-primary/20 shadow-lg"
        >
          <h3 className="text-lg font-heading font-semibold text-foreground mb-5 text-center">
            Детальный результат
          </h3>
          <div className="space-y-3">
            {quizQuestions.map((q, i) => (
              <div key={q.id} className="flex items-center gap-3">
                <span className="text-lg w-8 text-center">{q.emoji}</span>
                <span className="text-sm text-foreground/80 flex-1 truncate font-heading">
                  {q.element}
                </span>
                <div className="w-32 h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className="h-full btn-primary-gradient rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${(result.answers[i] / 10) * 100}%` }}
                    transition={{ delay: 0.6 + i * 0.08, duration: 0.5 }}
                  />
                </div>
                <span className="text-sm font-heading font-bold text-gradient-gold w-6 text-right">
                  {result.answers[i]}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center space-y-4"
        >
          <a
            href="https://www.happi10.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block btn-primary-gradient text-accent-foreground font-heading font-bold py-4 px-10 rounded-xl text-lg btn-glow transition-all duration-300 hover:brightness-110 hover:scale-105"
          >
            Узнать о программе HAPPI10
          </a>

          <div>
            <button
              onClick={onRestart}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-heading text-sm mt-4"
            >
              <RotateCcw className="w-4 h-4" />
              Пройти тест заново
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResultScreen;
