import ai_image from '../assets/ai_image.jpg';


const features = [
 { name: 'US Army Veteran', description: 'Served 7 years. Held the role of Squad Leader' },
 { name: 'Talent Acquisition Specialist ', description: 'Sourcing Recruiter at Uber before layoffs' },
 { name: 'Full Stack Developer', description: "I'm a Software Developer" },
 { name: 'Father', description: 'Two Beautiful Girls' },
 
]

export default function HomePage() {
 return (
  <div className="container mx-auto mt-6">
   <div className="bg-white">
     <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-4 sm:px-6 sm:py-2 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
       <div>
         <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Hi I'm Mike</h2>
         {/* <p className="mt-4 text-gray-500">
           The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated
           steel divider separates active cards from new ones, or can be used to archive important task lists.
         </p> */}

         <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
           {features.map((feature) => (
             <div key={feature.name} className="border-t border-gray-200 pt-4">
               <dt className="font-medium text-gray-900">{feature.name}</dt>
               <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
             </div>
           ))}
         </dl>
       </div>
       <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
         <img
           src={ai_image}
           alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
           className="rounded-lg bg-gray-100"
         />
         <img
           src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Logo_of_the_United_States_Army.svg/1533px-Logo_of_the_United_States_Army.svg.png"
           alt="Top down view of walnut card tray with embedded magnets and card groove."
           className="rounded-lg bg-gray-100"
         />
         <img
           src="https://helios-i.mashable.com/imagery/articles/03y6VwlrZqnsuvnwR8CtGAL/hero-image.fill.size_1200x675.v1623372852.jpg"
           alt="Side of walnut card tray with card groove and recessed card area."
           className="rounded-lg bg-gray-100"
         />
         <img
           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhTchP-umy4-CmWv4_Ts-62ywTiO8ekxoaIUitXGcrnQ&s"
           alt="Walnut card tray filled with cards and card angled in dedicated groove."
           className="rounded-lg bg-gray-100"
         />
       </div>
     </div>
   </div>
   </div>
 )
}