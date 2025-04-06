'use client';

import { useState } from 'react';
import { QuizQuestion } from '../data/animalFarm';

interface QuizSectionProps {
  questions: QuizQuestion[];
}

export default function QuizSection({ questions }: QuizSectionProps) {
  const [answers, setAnswers] = useState<number[]>(Array(questions.length).fill(-1));
  const [showResults, setShowResults] = useState(false);
  
  const handleOptionSelect = (questionIndex: number, optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
  };
  
  const handleSubmit = () => {
    setShowResults(true);
  };
  
  const handleReset = () => {
    setAnswers(Array(questions.length).fill(-1));
    setShowResults(false);
  };
  
  const calculateScore = () => {
    return answers.reduce((score, answer, index) => {
      return answer === questions[index].correctAnswer ? score + 1 : score;
    }, 0);
  };
  
  return (
    <section className="py-16 bg-amber-50">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Mini Quiz</h2>
          <div className="w-16 h-1 bg-amber-600 mb-6"></div>
          <p className="text-gray-700 max-w-2xl">
            Test your knowledge of Animal Farm
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
          {questions.map((question, questionIndex) => (
            <div key={questionIndex} className="mb-8 last:mb-0">
              <p className="text-lg font-medium text-gray-900 mb-4">
                {questionIndex + 1}. {question.question}
              </p>
              
              <div className="space-y-2">
                {question.options.map((option, optionIndex) => (
                  <div key={optionIndex} className="flex items-start">
                    <div className="flex items-center h-6">
                      <input
                        id={`question-${questionIndex}-option-${optionIndex}`}
                        type="radio"
                        checked={answers[questionIndex] === optionIndex}
                        onChange={() => handleOptionSelect(questionIndex, optionIndex)}
                        disabled={showResults}
                        className="h-5 w-5 text-amber-600 border-gray-300 focus:ring-amber-500"
                      />
                    </div>
                    <label
                      htmlFor={`question-${questionIndex}-option-${optionIndex}`}
                      className={`ml-3 text-gray-700 ${
                        showResults && optionIndex === question.correctAnswer ? 'font-bold text-green-600' : ''
                      } ${
                        showResults && answers[questionIndex] === optionIndex && optionIndex !== question.correctAnswer
                          ? 'font-bold text-red-600'
                          : ''
                      }`}
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </div>
              
              {showResults && (
                <div className="mt-3 text-sm">
                  {answers[questionIndex] === question.correctAnswer ? (
                    <p className="text-green-600">Correct!</p>
                  ) : (
                    <p className="text-red-600">
                      Incorrect. The correct answer is: {question.options[question.correctAnswer]}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
          
          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            {!showResults ? (
              <button
                onClick={handleSubmit}
                disabled={answers.some(answer => answer === -1)}
                className={`px-6 py-2 rounded-lg text-white shadow-md ${
                  answers.some(answer => answer === -1)
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-amber-600 hover:bg-amber-700'
                }`}
              >
                Check Answers
              </button>
            ) : (
              <div className="space-y-4">
                <p className="text-lg font-medium">
                  Your score: {calculateScore()} out of {questions.length}
                </p>
                <button
                  onClick={handleReset}
                  className="px-6 py-2 rounded-lg bg-amber-600 text-white shadow-md hover:bg-amber-700"
                >
                  Try Again
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
} 