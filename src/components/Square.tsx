import React from 'react';

interface SquareProps {
  value: string | null;
  onClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  return (
    <button className="bg-gray-200 w-20 h-20" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;