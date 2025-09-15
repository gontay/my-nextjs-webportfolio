import React from 'react'

type Props = {}

const Timeline = (props: Props) => {
  return (
    <div className="flex-col w-full max-w-5xl items-center lg:flex">
    <h1 className="justify-center text-center text-xl font-bold p-5">Professional Timeline</h1>
    <div>
    <ol className="relative border-s border-gray-200 dark:border-gray-700">                  
        <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">July 2025</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Left ABeam Singapore</h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"></p>
        </li>
        <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">January 2025</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">ABeam Singapore</h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Employed as a SAP FI System Analyst 🤓</p>
        </li>
        <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">October 2024</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Graduated from Singapore University of Social Sciences 🎓</h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Graduated with a BSc Information Technology and Business (ERP) Second Class Honours (Lower)</p>
        </li>
        <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">August 2023</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Left the Digital and Intelligence Service</h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400"></p>
        </li>
        <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">January 2020</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Matriculated into Singapore University of Social Sciences</h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Started studying part time for Bachelor of Applied Science in Information Technology and Business</p>
        </li>
        <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">December 2018</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Digital and Intelligence Service</h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Signed on as a Military Intelligence Expert Engineer (Now Digital and Intelligence Service Engineer)</p>
        </li>
        <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2018</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Graduated from Nanyang Polytechnic 🎉</h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Graduated with a Diploma in Information Technology</p>
        </li>
        <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2017 to May 2017</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Internship at PwC Singapore</h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Gained exposure to the professional service world.
                Developed a web crawler with python Scrappy library and Java Crawler4j library as an internship project.
            </p>
        </li>
    </ol>
    </div>
    </div>
  )
}

export default Timeline