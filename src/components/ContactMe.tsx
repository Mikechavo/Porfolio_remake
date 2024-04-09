import linkedin from '../assets/linkedin.png';
import emailLogo from '../assets/emailLogo.png';
import github from '../assets/github.png';
export default function ContactMe() {
 return (
  <div className='container'>
  <div className="mt-6 grid grid-cols-1  sm:grid-cols-5 lg:grid-cols-5 xl:gap-x-8">
              <a href="mailto:mchavez76@yahoo.com">
                <img src={emailLogo} alt="Email" className="icon-logo" />
              </a>
              <a href="https://github.com/Mikechavo"><img src={github} alt="GitHub" className="icon-logo" />
              </a>
              <a href="https://www.linkedin.com/in/michael-t-chavez/"><img src={linkedin} alt="LinkedIn" className="icon-logo" /></a>
            </div>
            </div>
 )
}