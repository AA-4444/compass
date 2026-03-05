export interface QuizQuestion {
  id: number;
  element: string;
  elementColor: 'yellow' | 'red' | 'orange';
  question: string;
  answers: {
    text: string;
    points: number;
  }[];
}

export interface QuizResult {
  totalScore: number;
  percentage: number;
  message: string;
  elements: {
    name: string;
    color: string;
    score: number;
  }[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    element: 'Благодарность',
    elementColor: 'yellow',
    question: 'Как часто вы замечаете и цените хорошее в своей жизни?',
    answers: [
      { text: 'Никогда не замечаю', points: 0 },
      { text: 'Редко, только в исключительных случаях', points: 1 },
      { text: 'Иногда, когда вспомню', points: 2 },
      { text: 'Часто, это становится привычкой', points: 3 },
      { text: 'Постоянно, это часть моего мышления', points: 4 },
    ],
  },
  {
    id: 2,
    element: 'Обучение',
    elementColor: 'orange',
    question: 'Насколько активно вы развиваетесь и учитесь новому?',
    answers: [
      { text: 'Не учусь вообще', points: 0 },
      { text: 'Учусь только когда вынужден', points: 1 },
      { text: 'Иногда прохожу курсы или читаю', points: 2 },
      { text: 'Регулярно развиваюсь в своей сфере', points: 3 },
      { text: 'Постоянно учусь и расту во всех областях', points: 4 },
    ],
  },
  {
    id: 3,
    element: 'Гибкость мышления',
    elementColor: 'red',
    question: 'Легко ли вы адаптируетесь к изменениям и новым ситуациям?',
    answers: [
      { text: 'Очень сложно, я люблю стабильность', points: 0 },
      { text: 'С трудом, но стараюсь', points: 1 },
      { text: 'Нормально, привыкаю со временем', points: 2 },
      { text: 'Хорошо адаптируюсь к переменам', points: 3 },
      { text: 'Легко, я вижу возможности в переменах', points: 4 },
    ],
  },
  {
    id: 4,
    element: 'Комплименты',
    elementColor: 'yellow',
    question: 'Как часто вы получаете признание и поддержку от других?',
    answers: [
      { text: 'Никогда не получаю', points: 0 },
      { text: 'Очень редко', points: 1 },
      { text: 'Иногда люди замечают мои успехи', points: 2 },
      { text: 'Регулярно получаю признание', points: 3 },
      { text: 'Постоянно чувствую поддержку и признание', points: 4 },
    ],
  },
  {
    id: 5,
    element: 'Осознанность',
    elementColor: 'orange',
    question: 'Насколько вы присутствуете в текущем моменте?',
    answers: [
      { text: 'Постоянно в спешке, не живу настоящим', points: 0 },
      { text: 'Часто отвлекаюсь на прошлое или будущее', points: 1 },
      { text: 'Иногда замечаю текущий момент', points: 2 },
      { text: 'Часто живу здесь и сейчас', points: 3 },
      { text: 'Полностью присутствую в каждом моменте', points: 4 },
    ],
  },
  {
    id: 6,
    element: 'Доброта',
    elementColor: 'red',
    question: 'Как часто вы совершаете добрые дела и помогаете другим?',
    answers: [
      { text: 'Редко помогаю, сосредоточен на себе', points: 0 },
      { text: 'Иногда помогаю, если просят', points: 1 },
      { text: 'Регулярно помогаю близким', points: 2 },
      { text: 'Часто помогаю людям, это приносит мне радость', points: 3 },
      { text: 'Постоянно ищу способы помочь, это мой образ жизни', points: 4 },
    ],
  },
  {
    id: 7,
    element: 'Смыслы и ценности',
    elementColor: 'yellow',
    question: 'Насколько ясны для вас ваши жизненные ценности и смыслы?',
    answers: [
      { text: 'Не знаю, в чем мой смысл', points: 0 },
      { text: 'Смутно понимаю, но не уверен', points: 1 },
      { text: 'Есть какие-то ценности, но они не чёткие', points: 2 },
      { text: 'Хорошо понимаю свои ценности', points: 3 },
      { text: 'Полностью ясны мои смыслы и ценности', points: 4 },
    ],
  },
  {
    id: 8,
    element: 'Убеждения и критерии успеха',
    elementColor: 'orange',
    question: 'Есть ли у вас чёткие критерии успеха в жизни?',
    answers: [
      { text: 'Не знаю, что такое успех для меня', points: 0 },
      { text: 'Критерии размыты, зависят от обстоятельств', points: 1 },
      { text: 'Есть примерные критерии, но они меняются', points: 2 },
      { text: 'Хорошо определены мои критерии успеха', points: 3 },
      { text: 'Чётко знаю, что такое успех, и движусь к нему', points: 4 },
    ],
  },
  {
    id: 9,
    element: 'Планы и цели',
    elementColor: 'red',
    question: 'Насколько чётко вы планируете свою жизнь и ставите цели?',
    answers: [
      { text: 'Не планирую, живу день за днем', points: 0 },
      { text: 'Иногда думаю о целях, но не записываю', points: 1 },
      { text: 'Есть примерные планы на год', points: 2 },
      { text: 'Регулярно ставлю цели и отслеживаю прогресс', points: 3 },
      { text: 'Чётко спланирована моя жизнь на несколько лет', points: 4 },
    ],
  },
  {
    id: 10,
    element: 'Энергия',
    elementColor: 'yellow',
    question: 'Как часто вы чувствуете себя полным энергии и жизненной силы?',
    answers: [
      { text: 'Постоянно устаю и нет сил', points: 0 },
      { text: 'Часто чувствую усталость', points: 1 },
      { text: 'Нормально, но иногда падает энергия', points: 2 },
      { text: 'Часто чувствую бодрость и энергию', points: 3 },
      { text: 'Постоянно полон энергии и жизненной силы', points: 4 },
    ],
  },
];

export function calculateResult(scores: number[]): QuizResult {
  const totalScore = scores.reduce((a, b) => a + b, 0);
  const percentage = Math.round((totalScore / 40) * 100);

  let message = '';
  if (percentage <= 25) {
    message = 'Начните путь к счастью';
  } else if (percentage <= 50) {
    message = 'Хороший фундамент';
  } else if (percentage <= 75) {
    message = 'Вы на правильном пути';
  } else {
    message = 'Вы архитектор своего счастья';
  }

  const elements = quizQuestions.map((q, idx) => ({
    name: q.element,
    color: q.elementColor,
    score: scores[idx],
  }));

  return {
    totalScore,
    percentage,
    message,
    elements,
  };
}
