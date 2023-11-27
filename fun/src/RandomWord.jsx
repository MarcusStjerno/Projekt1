// RandomWordGenerator.js
import React, { useState } from 'react';

const RandomWordGenerator = () => {
  const [randomWords, setRandomWords] = useState([]);

  const generateRandomWords = async () => {
    try {
      const response = await fetch('https://random-word-api.herokuapp.com/word?number=4');
      if (!response.ok) {
        throw new Error('Failed to fetch random words');
      }

      const words = await response.json();
      setRandomWords(words);
    } catch (error) {
      console.error('Error fetching random words:', error.message);
    }
  };

  return (
    <div>
      <h1>Random Word Generator</h1>
      <button onClick={generateRandomWords}>Generate Random Words</button>
      {randomWords.length > 0 && (
        <ul>
          {randomWords.map((word, index) => (
            <li key={index}>{word}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RandomWordGenerator;
