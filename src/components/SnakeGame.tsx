import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Trophy, RefreshCcw, ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

const GRID_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }, { x: 10, y: 11 }, { x: 10, y: 12 }];
const INITIAL_DIRECTION = { x: 0, y: -1 };
const INITIAL_SPEED = 150;

const SnakeGame = () => {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  
  const gameLoopRef = useRef<number | null>(null);

  const generateFood = useCallback(() => {
    let newFood;
    while (true) {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
      const isOnSnake = snake.some(segment => segment.x === newFood.x && segment.y === newFood.y);
      if (!isOnSnake) break;
    }
    return newFood;
  }, [snake]);

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setScore(0);
    setGameOver(false);
    setIsPaused(false);
    setFood(generateFood());
  };

  const moveSnake = useCallback(() => {
    if (gameOver || isPaused) return;

    const newSnake = [...snake];
    const head = { x: newSnake[0].x + direction.x, y: newSnake[0].y + direction.y };

    // Wall collision
    if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
      setGameOver(true);
      return;
    }

    // Self collision
    if (newSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
      setGameOver(true);
      return;
    }

    newSnake.unshift(head);

    // Food collision
    if (head.x === food.x && head.y === food.y) {
      setScore(s => {
        const newScore = s + 10;
        if (newScore > highScore) setHighScore(newScore);
        return newScore;
      });
      setFood(generateFood());
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  }, [snake, direction, food, gameOver, isPaused, highScore, generateFood]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowUp': if (direction.y === 0) setDirection({ x: 0, y: -1 }); break;
        case 'ArrowDown': if (direction.y === 0) setDirection({ x: 0, y: 1 }); break;
        case 'ArrowLeft': if (direction.x === 0) setDirection({ x: -1, y: 0 }); break;
        case 'ArrowRight': if (direction.x === 0) setDirection({ x: 1, y: 0 }); break;
        case ' ': setIsPaused(p => !p); break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [direction]);

  useEffect(() => {
    const speed = Math.max(60, INITIAL_SPEED - Math.floor(score / 50) * 10);
    gameLoopRef.current = window.setInterval(moveSnake, speed);
    return () => {
      if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    };
  }, [moveSnake, score]);

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex justify-between w-full max-w-[400px] bg-slate-900 p-4 rounded-2xl border border-slate-800 shadow-xl">
        <div className="flex flex-col">
          <span className="text-xs text-slate-400 uppercase tracking-widest font-bold">Score</span>
          <span className="text-2xl font-black text-emerald-400">{score.toString().padStart(4, '0')}</span>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-xs text-slate-400 uppercase tracking-widest font-bold">Best</span>
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span className="text-2xl font-black text-slate-100">{highScore.toString().padStart(4, '0')}</span>
          </div>
        </div>
      </div>

      <div className="relative">
        <div 
          className="grid bg-slate-900 border-4 border-slate-800 rounded-xl overflow-hidden shadow-2xl shadow-emerald-500/10"
          style={{ 
            gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
            width: 'min(90vw, 400px)',
            height: 'min(90vw, 400px)'
          }}
        >
          {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => {
            const x = i % GRID_SIZE;
            const y = Math.floor(i / GRID_SIZE);
            const isSnakeHead = snake[0].x === x && snake[0].y === y;
            const isSnakeBody = snake.slice(1).some(s => s.x === x && s.y === y);
            const isFood = food.x === x && food.y === y;

            return (
              <div 
                key={i} 
                className={`w-full h-full border-[0.5px] border-slate-800/30 transition-all duration-200
                  ${isSnakeHead ? 'bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.6)] z-10 rounded-sm' : ''}
                  ${isSnakeBody ? 'bg-emerald-600/80' : ''}
                  ${isFood ? 'bg-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.6)] animate-pulse rounded-full scale-75' : ''}
                `}
              />
            );
          })}
        </div>

        {(gameOver || isPaused) && (
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm flex flex-col items-center justify-center rounded-lg z-20">
            {gameOver ? (
              <div className="text-center animate-in fade-in zoom-in duration-300">
                <h2 className="text-4xl font-black text-rose-500 mb-2">GAME OVER</h2>
                <p className="text-slate-400 mb-6">Final Score: {score}</p>
                <button 
                  onClick={resetGame}
                  className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-3 rounded-full flex items-center gap-2 transition-all active:scale-95"
                >
                  <RefreshCcw className="w-5 h-5" />
                  Try Again
                </button>
              </div>
            ) : (
              <div className="text-center">
                <h2 className="text-4xl font-black text-emerald-400 mb-6">PAUSED</h2>
                <button 
                  onClick={() => setIsPaused(false)}
                  className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-3 rounded-full transition-all active:scale-95"
                >
                  Resume Game
                </button>
                <p className="mt-4 text-slate-500 text-sm">Press SPACE to toggle</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Mobile Controls */}
      <div className="grid grid-cols-3 gap-2 md:hidden">
        <div />
        <button onClick={() => direction.y === 0 && setDirection({ x: 0, y: -1 })} className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center active:bg-emerald-500/20"><ChevronUp /></button>
        <div />
        <button onClick={() => direction.x === 0 && setDirection({ x: -1, y: 0 })} className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center active:bg-emerald-500/20"><ChevronLeft /></button>
        <button onClick={() => direction.y === 0 && setDirection({ x: 0, y: 1 })} className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center active:bg-emerald-500/20"><ChevronDown /></button>
        <button onClick={() => direction.x === 0 && setDirection({ x: 1, y: 0 })} className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center active:bg-emerald-500/20"><ChevronRight /></button>
      </div>

      <div className="hidden md:block text-slate-500 text-sm font-medium">
        Use <span className="px-2 py-1 bg-slate-800 rounded text-slate-300">Arrow Keys</span> to move • <span className="px-2 py-1 bg-slate-800 rounded text-slate-300">Space</span> to pause
      </div>
    </div>
  );
};

export default SnakeGame;