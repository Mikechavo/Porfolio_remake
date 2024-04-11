import PalH from '../assets/palHome.png'
import PintPal from '../assets/PintPal.png'
import JJK from '../assets/JJK.png'
import PcPart from '../assets/pcPart.png'
import PcTab from '../assets/tabs.png'
import FitFolio from '../assets/fitFolio.png'
import Flare from '../assets/flare.png'
// import TicTacToe from '../components/TicTacToe';
import TicTac from '../assets/TicTac.png'
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
              alt=""
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
              alt=""
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
              alt=""
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
              alt=""
              className="rounded-lg bg-gray-100"
            />
            <img
              src={PcTab}
              alt=""
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
              alt=""
              className="rounded-lg bg-gray-100"
            />
          </div>
        </div>

        {/* Project Flare: */}
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Project Flare:</h2>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Automated Candidate Management Tool at Uber</h2>
            <p className="mt-4 text-gray-500">
              I designed, developed, and launched Project Flare at Uber, a powerful automation tool utilizing Google Apps Script, Gsheets, Gmail, and integrated it seamlessly into an internal dashboard. My role involved conceptualizing the solution, overseeing the development process, and successfully launching the tool. Project Flare efficiently identified stale candidates in the recruitment pipeline and automated personalized emails to prompt Talent Acquisition (TA) team members for data hygiene reviews. This initiative significantly enhanced the efficiency and organization of Uber's talent acquisition processes.
            </p>
            <p className="mt-4 text-gray-500">
              <strong><u>Key Contributions:</u></strong></p>
            <p className="mt-4 text-gray-500">
              <u>End-to-End Ownership:</u> Led the entire lifecycle of Project Flare, from conceptualization and design to development and successful deployment.
            </p>
            <p className="mt-4 text-gray-500">
              <u>Stale Candidate Identification:</u> Systematically designed the process for scrubbing candidate ownership data to accurately identify stale candidates.
            </p>
            <p className="mt-4 text-gray-500">
              <u>Automated Email Generation:</u> Orchestrated the automation of personalized emails sent to TA members, including critical candidate details and requisition information.
            </p>
            <p className="mt-4 text-gray-500">
              <u>Internal Dashboard Integration: </u>  Ensured seamless integration with an internal dashboard for real-time visibility into candidate hygiene initiatives.
            </p>

            <p className="mt-4 text-gray-500">
              <strong><u>Impact:</u></strong></p>
            <p className="mt-4 text-gray-500">
              Project Flare stands as a testament to my ability to take ownership of complex projects, design effective automation solutions, and drive positive outcomes. The tool significantly streamlined Uber's recruitment pipeline, showcasing my proficiency in technology-driven process improvements.
            </p>

            <p className="mt-4 text-gray-500">
              <strong><u>Technologies Used:</u></strong></p>
            <p className="mt-4 text-gray-500">
              Google Apps Script(HTML, CSS, Javascript), SQL, GSheets, Gmail, Internal Dashboards
            </p>
            <p className="mt-4 text-gray-500">
              iCIMS, Beamery, LinkedIn Recruiter
            </p>


            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">

              <div className="border-t border-gray-200 pt-4">
                <Button><a href="https://github.com/Mikechavo/Project-Beacon-Flare-GAS/blob/main/flareGetEmail.js">
                  Source Code
                </a>
                </Button>
                {/* <dd className="mt-2 text-sm text-gray-500"> Python, Django framework(maybe put an image here)</dd> */}
              </div>
              <div className="border-t border-gray-200 pt-4">
                <Button><a href="https://docs.google.com/spreadsheets/d/1HIRP86Fj51r3kcNx-BltYzuDliUY_pO4gMQIVr3w6K4/edit#gid=913754463">
                  Demo
                </a>
                </Button>
                {/* <dd className="mt-2 text-sm text-gray-500"> Python, Django framework(maybe put an image here)</dd> */}
              </div>

            </dl>
          </div>
          <div className="grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8">
            <img
              src={Flare}
              alt=""
              className="rounded-lg bg-gray-100"
            />
          </div>
        </div>




        {/* Tic-Tac-Toe */}
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Tic-Tac-Toe</h2>
            <p className="mt-4 text-gray-500">
              This is a classic Tic-Tac-Toe game designed for two players to enjoy on the same screen. The game offers a
              simple yet engaging experience, with players taking turns to compete in this age-old battle of Xs and Os. It's
              a perfect way to have fun and test your strategic skills against a friend or family member without the need
              for any installations or downloads.
            </p>
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              <div className="border-t border-gray-200 pt-4">
                <Button><a href="https://github.com/learn-academy-2023-echo/tic-tac-toe-naughts-and-crosses">
                  Source Code
                </a>
                </Button>
                {/* <dd className="mt-2 text-sm text-gray-500"> Python, Django framework(maybe put an image here)</dd> */}
              </div>
            </dl>
          </div>
          {/* <div className="grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8">
            <TicTacToe />
          </div> ITS NOT WORKING RN*/}

          <div className="grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8">
            <img
              src={TicTac}
              alt=""
              className="rounded-lg bg-gray-100"
            />
          </div>
        </div>





      </div>
    </div>
  )
}
