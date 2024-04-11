import React, { useState } from 'react';

const generateRandomLetter = () => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const randomIndex = Math.floor(Math.random() * alphabet.length);
  return alphabet[randomIndex];
};

const PasswordGen: React.FC = () => {
  const [userInput, setUserInput] = useState<string>('');
  const [randomOutput, setRandomOutput] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  const generateRandomOutput = () => {
    const inputArray = userInput.split('');

    let output = '';

    for (const char of inputArray) {
      if (/[a-zA-Z]/.test(char)) {
        const randomChar = generateRandomLetter();
        output += char.toLowerCase() === char ? randomChar : randomChar.toUpperCase();
      } else {
        output += char;
      }
    }

    setRandomOutput(output);
  };

  const clearInput = () => {
    setUserInput('');
    setRandomOutput('');
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={userInput}
        onChange={handleInputChange}
        placeholder="Enter Existing Password"
        className="border border-gray-300 rounded-md px-4 py-2 mb-4"
      />
      <div className="mb-4">
        <button onClick={generateRandomOutput} className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md mr-2">
          Generate Random Password
        </button>
        <button onClick={clearInput} className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md">
          Clear
        </button>
      </div>
      <h2 className="mb-2">Password:</h2>
      <u><h3 className="text-xl">{randomOutput}</h3></u>
    </div>
  );
};

export default PasswordGen;
