import linkedin from '../assets/linkedin.png';
import emailLogo from '../assets/emailLogo.png';
import github from '../assets/github.png';

type ContactLink = {
  src: string;
  alt: string;
  title: string;
  href: string;
};

const ContactMe: React.FC = () => {
  const contactLinks: ContactLink[] = [
    { src: emailLogo, alt: "Email", title: "Send me an email", href: "mailto:mchavez76@yahoo.com" },
    { src: github, alt: "GitHub", title: "Checkout me out on GitHub", href: "https://github.com/Mikechavo" },
    { src: linkedin, alt: "LinkedIn", title: "Connect with me via LinkedIn", href: "https://www.linkedin.com/in/michael-t-chavez/" }
  ];

  return (
    
    <div className='container'>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-5 lg:grid-cols-5 xl:gap-x-8">
        {contactLinks.map((link, index) => (
          <a key={index} href={link.href} title={link.title} className="flex flex-col items-center">
            <img src={link.src} alt={link.alt} className="icon-logo" />
            <span className="text-xs">{link.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactMe;
