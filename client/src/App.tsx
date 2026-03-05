import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import Welcome from "@/pages/Welcome";
import Quiz from "@/pages/Quiz";
import Result from "@/pages/Result";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { useState } from "react";
import { calculateResult, quizQuestions } from "@/lib/quizData";

type AppState = "welcome" | "quiz" | "result";

function Router() {
  const [appState, setAppState] = useState<AppState>("welcome");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<number[]>(new Array(quizQuestions.length).fill(undefined));

  const handleStart = () => {
    setAppState("quiz");
    setCurrentQuestion(0);
    setScores(new Array(quizQuestions.length).fill(undefined));
  };

  const handleAnswer = (points: number) => {
    const newScores = [...scores];
    newScores[currentQuestion] = points;
    setScores(newScores);

    // Move to next question or result
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setAppState("result");
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleRestart = () => {
    setAppState("welcome");
    setCurrentQuestion(0);
    setScores(new Array(quizQuestions.length).fill(undefined));
  };

  const result = calculateResult(scores);

  return (
    <Switch>
      <Route path={"/"}>
        {appState === "welcome" && <Welcome onStart={handleStart} />}
        {appState === "quiz" && (
          <Quiz
            currentQuestion={currentQuestion}
            scores={scores}
            onAnswer={handleAnswer}
            onPrevious={handlePrevious}
          />
        )}
        {appState === "result" && (
          <Result result={result} onRestart={handleRestart} />
        )}
      </Route>
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
