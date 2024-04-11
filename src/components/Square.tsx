import PropTypes from 'prop-types';

const Square = ({ value, onClick }) => {
  return (
    <div className="w-16 h-16 border border-gray-300 flex justify-center items-center" onClick={onClick}>
      {value === "X" && <img src="https://www.onlygfx.com/wp-content/uploads/2018/07/8-grunge-x-brush-stroke-9.png" alt="X" className="w-8 h-8" />} 
      {value === "O" && <img src="https://pngimg.com/d/circle_PNG59.png" alt="O" className="w-8 h-8" />} 
    </div>
  );
};

Square.propTypes = {
  value: PropTypes.oneOf(['X', 'O', null]), // Value can be 'X', 'O', or null
  onClick: PropTypes.func.isRequired, // onClick must be a function and is required
};

export default Square;
