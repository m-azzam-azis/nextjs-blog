import Image from 'next/image'

export default function Home() {
  return (
    <main className='bg-blue-500 bg-opacity-30 h-full px-6 sm:px-12 md:px-18 lg:px-24 xl:px-30 pt-6 z-0 pb-6'>
      <div className='container bg-red-50 p-12 rounded-3xl'>
        <h1 className='text-6xl pt-8 font-serif sm:text-7xl sm:pt-10 md:text-8xl md:pt-12 lg:text-9xl lg:pt-14 border-gray-400 border-b-2 pb-6'>
          Hi There!
        </h1>
        <div className='text-md sm:text-lg md:text-xl lg:text-2xl text-justify'>
          <p className='py-12' id='about'>My name is <span className='underline font-semibold'>Muhammad Azzam</span>, I am currently a student at the University of Indonesia. I am from Jakarta, and I'm currently trying to explore my passion for <span className='underline font-semibold'>Programming</span> and I'm also working to expand my <span className='underline font-semibold'>network & experience</span>.</p>
        </div>
      </div>
      <div className='container bg-amber-100 py-6 mt-6 px-12 rounded-3xl font-mono'>
        <div className='text-md sm:text-lg md:text-xl lg:text-2xl text-justify'>
          <div className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold' id='experience'>
            Experiences:
          </div>
          <ul className='list-disc pt-4'>
            <li>Harvard's CS50 online Course</li>
            <li>HTML, Tailwindcss, basic js</li>
            <li>Harvard's CS50 online Course</li>
          </ul>
        </div>
        <div className='text-md sm:text-lg md:text-xl lg:text-2xl text-justify'>
        </div>
      </div>
      
    </main>
  )
}

