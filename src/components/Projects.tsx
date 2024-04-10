import PalH from '../assets/palHome.png'
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
  <div className="bg-white">
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



  </div>
 )
}
