'use client';

import { useState, useRef, useEffect } from 'react';

interface SummarySectionProps {
  summary: string;
}

export default function SummarySection({ summary }: SummarySectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(135); // Placeholder duration in seconds
  const [volume, setVolume] = useState(80);
  const [isVolumeOpen, setIsVolumeOpen] = useState(false);
  const [isSpeedOpen, setIsSpeedOpen] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  
  const progressRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  
  // For demo purposes, simulate playback time progress
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentTime((prevTime) => {
          const newTime = prevTime + 1;
          return newTime >= duration ? duration : newTime;
        });
      }, 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPlaying, duration]);
  
  // Stop playback when it reaches the end
  useEffect(() => {
    if (currentTime >= duration) {
      setIsPlaying(false);
    }
  }, [currentTime, duration]);

  const togglePlay = () => {
    if (currentTime >= duration) {
      setCurrentTime(0);
    }
    setIsPlaying(!isPlaying);
  };
  
  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (progressRef.current) {
      const rect = progressRef.current.getBoundingClientRect();
      const position = (e.clientX - rect.left) / rect.width;
      const newTime = Math.floor(position * duration);
      setCurrentTime(newTime >= 0 ? (newTime <= duration ? newTime : duration) : 0);
    }
  };
  
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseInt(e.target.value));
  };
  
  const setSpeed = (speed: number) => {
    setPlaybackSpeed(speed);
    setIsSpeedOpen(false);
  };
  
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">TL;DR Summary</h2>
          <div className="w-16 h-1 bg-amber-600 mb-6"></div>
          <p className="text-gray-700 mb-2">The essential Animal Farm story in a quick read</p>
        </div>
        
        <div className="bg-gray-50 rounded-2xl shadow-md p-8 md:p-10">
          <div className="prose prose-amber prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">{summary}</p>
          </div>
          
          <div className="mt-8 border-t border-gray-200 pt-6">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              {/* Progress bar */}
              <div 
                ref={progressRef}
                className="h-2 w-full bg-gray-100 cursor-pointer"
                onClick={handleProgressClick}
              >
                <div 
                  className="h-full bg-amber-600 transition-all duration-100"
                  style={{ width: `${(currentTime / duration) * 100}%` }}
                ></div>
              </div>
              
              {/* Controls */}
              <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center space-x-4">
                  {/* Play/Pause button */}
                  <button
                    onClick={togglePlay}
                    className="flex items-center justify-center h-10 w-10 rounded-full bg-amber-600 text-white hover:bg-amber-700 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                  >
                    {isPlaying ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 00-1 1v2a1 1 0 002 0V9a1 1 0 00-1-1zm4 0a1 1 0 00-1 1v2a1 1 0 002 0V9a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                  
                  {/* Time display */}
                  <div className="text-gray-500 text-sm">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  {/* Playback speed */}
                  <div className="relative">
                    <button 
                      onClick={() => { setIsSpeedOpen(!isSpeedOpen); setIsVolumeOpen(false); }}
                      className="text-gray-500 hover:text-gray-800 transition-colors p-1 rounded focus:outline-none"
                    >
                      <span className="text-xs font-medium">{playbackSpeed}x</span>
                    </button>
                    
                    {isSpeedOpen && (
                      <div className="absolute bottom-full mb-2 right-0 bg-white rounded-lg shadow-lg border border-gray-200 p-2 min-w-24 z-10">
                        {[0.5, 0.75, 1, 1.25, 1.5, 2].map((speed) => (
                          <button
                            key={speed}
                            onClick={() => setSpeed(speed)}
                            className={`block w-full text-left px-3 py-1.5 text-sm rounded ${
                              playbackSpeed === speed 
                                ? 'bg-amber-100 text-amber-900 font-medium' 
                                : 'hover:bg-gray-100'
                            }`}
                          >
                            {speed}x
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {/* Volume control */}
                  <div className="relative">
                    <button 
                      onClick={() => { setIsVolumeOpen(!isVolumeOpen); setIsSpeedOpen(false); }}
                      className="text-gray-500 hover:text-gray-800 transition-colors p-1 rounded focus:outline-none"
                    >
                      {volume === 0 ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217z" clipRule="evenodd" />
                          <path d="M12.707 3.293a1 1 0 011.414 0L17.414 6.5l-3.293 3.293a1 1 0 11-1.414-1.414L15.586 6.5 12.707 4.707a1 1 0 010-1.414z" />
                          <path d="M15.293 3.293a1 1 0 011.414 0L20 6.5l-3.293 3.293a1 1 0 01-1.414-1.414L18.586 6.5 15.707 4.707a1 1 0 010-1.414z" />
                        </svg>
                      ) : volume < 50 ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217z" clipRule="evenodd" />
                          <path d="M12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217z" clipRule="evenodd" />
                          <path d="M14.293 5.293a1 1 0 011.414 0L17 6.586l1.293-1.293a1 1 0 111.414 1.414L18.414 8l1.293 1.293a1 1 0 01-1.414 1.414L17 9.414l-1.293 1.293a1 1 0 01-1.414-1.414L15.586 8l-1.293-1.293a1 1 0 010-1.414z" />
                        </svg>
                      )}
                    </button>
                    
                    {isVolumeOpen && (
                      <div className="absolute bottom-full mb-2 right-0 bg-white rounded-lg shadow-lg border border-gray-200 p-4 w-48 z-10">
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={volume}
                          onChange={handleVolumeChange}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
                        />
                        <div className="flex justify-between mt-1 text-xs text-gray-500">
                          <span>0%</span>
                          <span>{volume}%</span>
                          <span>100%</span>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Download button */}
                  <button className="text-gray-500 hover:text-gray-800 transition-colors p-1 rounded focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="mt-4 text-center text-sm text-gray-500">
              <span>Narrated by AI Voice Assistant • Generated with TTS technology</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 