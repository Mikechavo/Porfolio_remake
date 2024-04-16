import resumeImage from '../assets/resume_mike.png'; 

const Resume = () => {
  return (
    <div className="container mx-auto mt-6">
      <a href="https://docs.google.com/document/d/1SkrVFIcJuQcVxa0Asvo_5mvJ8VVSAG4yVvv79o4cBJw/edit#heading=h.gjdgxs" target="_blank" rel="noopener noreferrer">
        <img src={resumeImage} alt="Resume" style={{ width: '100%', height: 'auto' }} /> {/* Correct usage of src attribute */}
      </a>
    </div>
  );
};

export default Resume;

