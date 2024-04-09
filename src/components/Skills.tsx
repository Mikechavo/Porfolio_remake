import React from 'react';
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

  <div className="container">
   <div className="mt-6 grid grid-cols-1  sm:grid-cols-5 lg:grid-cols-5 xl:gap-x-8">
    <img src={js_logo}></img>
    <img src={jquery}></img>
    <img src={TS}></img>
    <img src={react_logo}></img>
    <img src={bootstrap}></img>
    <img src={tailwind}></img>
    <img src={python_logo}></img>
    <img src={flask}></img>
    <img src={django}></img>
    <img src={pytorch}></img>
    <img src={ruby_logo}></img>
    <img src={rails_logo}></img>
    <img src={java}></img>
    <img src={c_logo}></img>
    <img src={Postgresql}></img>
    <img src={sql_logo}></img>
    <img src={html_logo}></img>
    <img src={css_logo}></img>
    <img src={haml}></img>
    <img src={jest_logo}></img>
    <img src={rspec_logo}></img>
    <img src={gas_logo}></img>
    <img src={github}></img>
    <img src={stableDiffusion}></img>
   </div>
  </div>




 )
}

export default Skill;