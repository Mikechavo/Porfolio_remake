import PalH from '../assets/palHome.png'
import PintPal from '../assets/PintPal.png'
import JJK from '../assets/JJK.png'
import PcPart from '../assets/pcPart.png'
import PcTab from '../assets/tabs.png'
import FitFolio from '../assets/fitFolio.png'
import Button from './Button'


// const features = [
//  { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
//  { name: 'Material', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
//  { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
//  { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
//  { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
//  { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
// ]

export default function Projects() {
 return (
  <div className="container mx-auto mt-6">
  <div className="bg-white">

    {/* MiniPaldex */}
   <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
    <div>
     <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Mini-Paldex</h2>
     <p className="mt-4 text-gray-500">
      In this Fullstack application, I utilized Python, Django framework, and Bootstrap along with PostgreSQL to develop the Mini-Paldex app. The application serves as a comprehensive reference for Palworld Pals, containing essential data such as type, skills, work, drops, and price for all Palworld creatures. This website allows you to sign up and log in into your own Mini-Paldex so you can create as many combonations of Fire Teams of 5. One of the highlights of the project is the creation of a robust backend system that seamlessly handles data storage and retrieval, ensuring a smooth user experience. This project showcases my skills in Fullstack development, data management, and creating a streamlined user experience.

      Full functionality with CRUD.
     </p>

     <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">

      <div className="border-t border-gray-200 pt-4">
       <Button><a href="https://github.com/Mikechavo/paldex">
        Source Code
       </a>
       </Button>
       {/* <dd className="mt-2 text-sm text-gray-500"> Python, Django framework(maybe put an image here)</dd> */}
      </div>
      <div className="border-t border-gray-200 pt-4">
      <Button><a href="https://paldex-seven.vercel.app/">
        Live Site
       </a>
       </Button>
       {/* <dd className="mt-2 text-sm text-gray-500"> Python, Django framework(maybe put an image here)</dd> */}
      </div>

     </dl>
    </div>
    <div className="grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8">
     <img
      src={PalH}
      alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
      className="rounded-lg bg-gray-100"
     />

    </div>
   </div>


{/* pintpal */}
   <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
    <div>
     <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">PintPal</h2>
     <p className="mt-4 text-gray-500">
     A Fullstack beer community/review application is a comprehensive platform designed for beer enthusiasts. Built using React for dynamic user interfaces, Ruby on Rails for robust backend functionality, and PostgreSQL for efficient data management, this application provides a seamless experience for users to explore, share, and review a wide variety of craft beers. Users can connect with like-minded beer lovers, post reviews, and dive into the rich world of craft brews. It's the ultimate destination for beer aficionados looking to discover and discuss their favorite beverages.
     </p>

     <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">

      <div className="border-t border-gray-200 pt-4">
       <Button><a href="https://github.com/MMPThree/pintpal-frontend">
        Frontend Source Code
       </a>
       </Button>
       {/* <dd className="mt-2 text-sm text-gray-500"> Python, Django framework(maybe put an image here)</dd> */}
      </div>
      <div className="border-t border-gray-200 pt-4">
       <Button><a href="https://github.com/MMPThree/backend-pintpal">
        Backend Source Code
       </a>
       </Button>
       {/* <dd className="mt-2 text-sm text-gray-500"> Python, Django framework(maybe put an image here)</dd> */}
      </div>
      <div className="border-t border-gray-200 pt-4">
      <Button><a href="https://pintpal.onrender.com/">
        Live Site
       </a>
       </Button>
       {/* <dd className="mt-2 text-sm text-gray-500"> Python, Django framework(maybe put an image here)</dd> */}
      </div>

     </dl>
    </div>
    <div className="grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8">
     <img
      src={PintPal}
      alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
      className="rounded-lg bg-gray-100"
     />

    </div>
   </div>


{/* myfavoriteanime */}
<div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
    <div>
     <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">My Favorite Anime</h2>
     <p className="mt-4 text-gray-500">
     My Favorite Anime is a frontend application that showcases a curated list of my favorite anime titles. Developed using React, JavaScript, Reactstrap, and Bootstrap, this project is a passion project. As an anime enthusiast and frontend developer, My Favorite Anime serves as both a personal reference and a showcase of my skills. It's a fun project that allows me to combine my passion for anime with my expertise in frontend development.
     </p>

     <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">

      <div className="border-t border-gray-200 pt-4">
       <Button><a href="https://github.com/Mikechavo/my_fav_anime_react">
        Source Code
       </a>
       </Button>
       {/* <dd className="mt-2 text-sm text-gray-500"> Python, Django framework(maybe put an image here)</dd> */}
      </div>
      <div className="border-t border-gray-200 pt-4">
      <Button><a href="https://my-favorite-anime.netlify.app/">
        Live Site
       </a>
       </Button>
       {/* <dd className="mt-2 text-sm text-gray-500"> Python, Django framework(maybe put an image here)</dd> */}
      </div>

     </dl>
    </div>
    <div className="grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8">
     <img
      src={JJK}
      alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
      className="rounded-lg bg-gray-100"
     />

    </div>
   </div>


   {/* PC Part Inventory Management System */}
   <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
    <div>
     <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">PC Part Inventory Management System</h2>
     <p className="mt-4 text-gray-500">
     The PC Part Inventory Management System is a Java application aimed at improving my Java programming skills. It utilizes JavaFX for a user-friendly interface displaying essential details of PC parts, such as ID, name, brand, quantity, and price. Developed independently, the project focuses on JavaFX GUI development, object-oriented programming, and data modeling. While still a work in progress, future plans include implementing full CRUD operations and data persistence. Open to collaboration and feedback, the project serves as a practical learning experience to deepen my understanding of Java programming concepts and software development principles.
     </p>

     <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">

      <div className="border-t border-gray-200 pt-4">
       <Button><a href="https://github.com/Mikechavo/PcInventoryManagement">
       GUI Source Code
       </a>
       </Button>
       {/* <dd className="mt-2 text-sm text-gray-500"> Python, Django framework(maybe put an image here)</dd> */}
      </div>

     </dl>
    </div>
    <div className="grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8">
     <img
      src={PcPart}
      alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
      className="rounded-lg bg-gray-100"
     />
     <img
      src={PcTab}
      alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
      className="rounded-lg bg-gray-100"
     />

    </div>
   </div>


      {/* FitFolio */}
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
    <div>
     <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">FitFolio</h2>
     <p className="mt-4 text-gray-500">
     A Fullstack application using React, Javascript, Reactstrap, PostgreSQL and Ruby on Rails that allows you to craft your perfect workout with Fitfolio! Tailor routines to your goals, choose from a variety of exercises, and track progress effortlessly. User-friendly, flexible, and designed for your fitness journey. Stay tuned in for updates as I refine and enhance this fitness journey companion!
     </p>

     <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">

      <div className="border-t border-gray-200 pt-4">
       <Button><a href="https://github.com/Mikechavo/workout_frontend">
       Frontend Source Code
       </a>
       </Button>
       {/* <dd className="mt-2 text-sm text-gray-500"> Python, Django framework(maybe put an image here)</dd> */}
      </div>
      <div className="border-t border-gray-200 pt-4">
       <Button><a href="https://github.com/Mikechavo/workout_backend">
       Backend Source Code
       </a>
       </Button>
       {/* <dd className="mt-2 text-sm text-gray-500"> Python, Django framework(maybe put an image here)</dd> */}
      </div>

     </dl>
    </div>
    <div className="grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8">
     <img
      src={FitFolio}
      alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
      className="rounded-lg bg-gray-100"
     />
    </div>
   </div>

      {/* FitFolio */}
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
    <div>
     <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">FitFolio</h2>
     <p className="mt-4 text-gray-500">
     A Fullstack application using React, Javascript, Reactstrap, PostgreSQL and Ruby on Rails that allows you to craft your perfect workout with Fitfolio! Tailor routines to your goals, choose from a variety of exercises, and track progress effortlessly. User-friendly, flexible, and designed for your fitness journey. Stay tuned in for updates as I refine and enhance this fitness journey companion!
     </p>

     <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">

      <div className="border-t border-gray-200 pt-4">
       <Button><a href="https://github.com/Mikechavo/workout_frontend">
       Frontend Source Code
       </a>
       </Button>
       {/* <dd className="mt-2 text-sm text-gray-500"> Python, Django framework(maybe put an image here)</dd> */}
      </div>
      <div className="border-t border-gray-200 pt-4">
       <Button><a href="https://github.com/Mikechavo/workout_backend">
       Backend Source Code
       </a>
       </Button>
       {/* <dd className="mt-2 text-sm text-gray-500"> Python, Django framework(maybe put an image here)</dd> */}
      </div>

     </dl>
    </div>
    <div className="grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8">
     <img
      src={FitFolio}
      alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
      className="rounded-lg bg-gray-100"
     />
    </div>
   </div>


  </div>
  </div>
 )
}
