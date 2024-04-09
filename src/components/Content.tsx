import ai_image from '../assets/ai_image.png';

type ContentProps = {
 id: string
 title: string
}
const Content = ({id, title}: ContentProps) => {

 return(
  <div className="overflow-y-auto flex-grow">
   <a>
          <img className="homeImage" src={ai_image} alt="AI picture of me"></img>
        </a>
  </div>
 )
}

export default Content