
import army_image from '../assets/army_image.jpg'
import arrow from '../assets/arrow.png'

export default function Journey() {
 return (
  <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
   <div className="absolute inset-0 -z-10 overflow-hidden">
    <svg
     className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
     aria-hidden="true"
    >
     <defs>
      <pattern
       id="e813992c-7d03-4cc4-a2bd-151760b470a0"
       width={200}
       height={200}
       x="50%"
       y={-1}
       patternUnits="userSpaceOnUse"
      >
       <path d="M100 200V.5M.5 .5H200" fill="none" />
      </pattern>
     </defs>
     <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
      <path
       d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
       strokeWidth={0}
      />
     </svg>
     <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
    </svg>
   </div>
   <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
     <div className="lg:pr-4">
      <div className="lg:max-w-lg">
       <p className="text-base font-semibold leading-7 text-indigo-600">My Software Development Journey</p>
       <p>
        I started my career studying Computer Science back in 2017 when I was in the US Army. The first time I really implemented code was when I worked at Uber as a Technical Sourcing Recruiter, I built automation tools with Google Apps Script.
       </p>

       <div className="flex justify-center items-center mt-8 mb-8">
        <a><img src={arrow} alt="arrow" className="w-[5rem] max-w-none sm:w-[5rem]" /></a>
       </div>

       <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">University of Maryland Global Campus</h1>
       {/* <img className="mx-auto" src={army_image}></img> */}
       <p className="mt-6 text-xl leading-8 text-gray-700">
        I started studying Computer Science at the University of Maryland Global Campus while serving in the US Army. This is where I started learning C and C++..
       </p>
       <div className="flex justify-center items-center mt-8 mb-8">
        <a><img src={arrow} alt="arrow" className="w-[5rem] max-w-none sm:w-[5rem]" /></a>
       </div>
       <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Uber</h1>
       {/* <img className="mx-auto" src={army_image}></img> */}
       <p className="mt-6 text-xl leading-8 text-gray-700">
        This is where I finally got introduced into the tech industry and taught myself Google App’s Script(HTML & JavaScript). Though coding wasn’t a part of my Job description as Sourcer, I wanted to make things easier with automation for my organization. Using Google Sheets, LinkedIn, Beamery and internal dashboards I was able to create multiple automation tools for different use cases.
       </p>
       <div className="flex justify-center items-center mt-8 mb-8">
        <a><img src={arrow} alt="arrow" className="w-[5rem] max-w-none sm:w-[5rem]" /></a>
       </div>
       <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">LEARN Academy</h1>
       {/* <img className="mx-auto" src={army_image}></img> */}
       <p className="mt-6 text-xl leading-8 text-gray-700">
        I wanted to have more structure to the learning process of Software Development so I enrolled into LEARN’s Fullstack development bootcamp. I graduated from LEARN Academy, where I honed my skills in JavaScript, React, Ruby on Rails, and PostgreSQL, among others.
       </p>
       <div className="flex justify-center items-center mt-8 mb-8">
        <a><img src={arrow} alt="arrow" className="w-[5rem] max-w-none sm:w-[5rem]" /></a>
       </div>
       <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ceatus Media Group</h1>
       {/* <img className="mx-auto" src={army_image}></img> */}
       <p className="mt-6 text-xl leading-8 text-gray-700">
        During my internship at Ceatus Media Group, I had the opportunity to dive deep into the world of full stack development, gaining valuable hands-on experience and enhancing my technical skills.
       </p>
       <p className="mt-6 text-xl leading-8 text-gray-700">
        As a Full Stack Developer intern, I was tasked with developing web application features using the Ruby on Rails framework. This involved implementing MVC architecture and RESTful design principles across two separate applications, showcasing my proficiency in Ruby on Rails.
       </p>
       <p className="mt-6 text-xl leading-8 text-gray-700">
        Additionally, I honed my database management skills by creating, querying, and maintaining relational databases, with a specialization in PostgreSQL. This experience provided me with a solid foundation in efficient data storage and retrieval practices, crucial for optimizing application performance.
       </p>
       <p className="mt-6 text-xl leading-8 text-gray-700">
        One of the highlights of my internship was the opportunity to work on dynamic user interfaces, where I leveraged HTML, Slim, CSS, and jQuery to create dynamic and responsive views. This not only enhanced the user experience but also expanded my expertise in front-end development.
       </p>
       <p className="mt-6 text-xl leading-8 text-gray-700">
        Furthermore, I developed expertise in custom route configurations, enabling the creation of user-friendly and SEO-optimized URLs for our web application. This demonstrated my ability to optimize application accessibility and visibility.
       </p>
       <p className="mt-6 text-xl leading-8 text-gray-700">
        Throughout my internship, I gained a deeper understanding of the Model-View-Controller (MVC) framework, ensuring code modularity, maintainability, and efficient development workflows. This knowledge proved invaluable in streamlining development processes and collaborating effectively with team members.
       </p>
       <p className="mt-6 text-xl leading-8 text-gray-700">
        Moreover, I developed proficiency in SQL, constructing complex queries for data extraction, filtering, and aggregation. This enabled me to support data-driven decision-making processes and contribute to the overall success of our projects.
       </p>
       <p className="mt-6 text-xl leading-8 text-gray-700">
        Overall, my internship at Ceatus Media Group provided me with invaluable hands-on experience, enhancing my technical skills and preparing me for future opportunities in full stack development.
       </p>
      </div>
     </div>
    </div>
    <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
     <img
      className="w-[22rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[22rem]"
      src={army_image}
      alt=""
     />
    </div>
    {/* <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
                vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
                erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
                semper sed amet vitae sed turpis id.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Push to deploy.</strong> Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                    blanditiis ratione.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">SSL certificates.</strong> Anim aute id magna aliqua
                    ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Database backups.</strong> Ac tincidunt sapien
                    vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
                fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
                adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">No server? No problem.</h2>
              <p className="mt-6">
                Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
                Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed
                tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                turpis ipsum eu a sed convallis diam.
              </p>
            </div>
          </div>
        </div> / */}
   </div>
  </div>
 )
}
