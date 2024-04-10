
import github from '../assets/github.png';
import js_logo from '../assets/js_logo.png';
import react_logo from '../assets/react_logo.png';
import rails_logo from '../assets/rails_logo.png';
import css_logo from '../assets/css_logo.png';
import html_logo from '../assets/html_logo.png';
import sql_logo from '../assets/sql_logo.png';
import gas_logo from '../assets/gas_logo.png';
import c_logo from '../assets/c_logo.png';
import ruby_logo from '../assets/ruby_logo.png';
import jest_logo from '../assets/jest_logo.png';
import rspec_logo from '../assets/rspec_logo.png';
import jquery from '../assets/jquery.png';
import Postgresql from '../assets/Postgresql.png';
import haml from '../assets/haml.png';
import python_logo from '../assets/python-logo.png';
import flask from '../assets/flask.png';
import bootstrap from '../assets/bootstrap.png';
import django from '../assets/django.png';
import java from '../assets/java.png';
import pytorch from '../assets/pytorch.png';
import tailwind from '../assets/tailwind.png';
import TS from '../assets/TS.png';
import stableDiffusion from '../assets/stableDiffusion.webp';

const Skill = () => {
 return (
   <div className="container mx-auto mt-6">
     <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
       {skills.map((skill, index) => (
         <div key={index} className="flex items-center justify-center">
           <img src={skill.logo} alt={skill.name} className="w-16 sm:w-20" />
         </div>
       ))}
     </div>
   </div>
 );
};

const skills = [
 { name: "JavaScript", logo: js_logo },
 { name: "jQuery", logo: jquery },
 { name: "TypeScript", logo: TS },
 { name: "React", logo: react_logo },
 { name: "Bootstrap", logo: bootstrap },
 { name: "Tailwind CSS", logo: tailwind },
 { name: "Python", logo: python_logo },
 { name: "Flask", logo: flask },
 { name: "Django", logo: django },
 { name: "PyTorch", logo: pytorch },
 { name: "Ruby", logo: ruby_logo },
 { name: "Ruby on Rails", logo: rails_logo },
 { name: "Java", logo: java },
 { name: "C", logo: c_logo },
 { name: "PostgreSQL", logo: Postgresql },
 { name: "SQL", logo: sql_logo },
 { name: "HTML", logo: html_logo },
 { name: "CSS", logo: css_logo },
 { name: "Haml", logo: haml },
 { name: "Jest", logo: jest_logo },
 { name: "RSpec", logo: rspec_logo },
 { name: "Google Apps Script", logo: gas_logo },
 { name: "GitHub", logo: github },
 { name: "Stable Diffusion", logo: stableDiffusion }
];

export default Skill;