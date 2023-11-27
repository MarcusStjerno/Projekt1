// RandomWordGenerator.js
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

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
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Random Word Generator</h1>
      <Button
        variant='danger'
        onClick={generateRandomWords}
        style={{ padding: '10px', marginBottom: '10px' }}
      >
        Generate Random Words
      </Button>
      {randomWords.length > 0 && (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {randomWords.map((word, index) => (
            <li
              key={word}
              style={{
                fontSize: '20px',
                margin: '10px',
                border: '1px solid #ccc',
                padding: '10px',
                borderRadius: '5px',
              }}
            >
              {`${index + 1}. ${word}`}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RandomWordGenerator;
