import React from 'react'
import { urlFor } from '../Sanity/Client'

const Card = ({features}) => {

    const{title,skills,description,enddate,startdate,thumbnail,project_url}= features
  return (
    <div className="overflow-hidden  rounded-lg shadow-md bg-gray-950 col-span-6 lg:col-span-2">
    <img className="object-cover w-full h-64" src={urlFor(thumbnail).url()} alt="Article"/>

    <div className="p-6">
        <div>
            <span className="text-xs font-medium text-yellow-400 flex flex-row space-x-2">
                {
                        skills.map((skill,idx)=><div className='' key={idx}>{skill}</div>)
            }
            </span>
            <a href={project_url}  target='_blank' className="block mt-2 text-xl font-semibold transition-colors duration-300 transform text-white hover:text-gray-600 hover:underline" role="link">{title}</a>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>
        </div>

        <div className="mt-4">
            <div className="flex items-center">
                <div className="flex items-center">
                   
                </div>
                <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">Start:- {startdate}</span>
                <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">end:- {enddate}</span>
            </div>
        </div>
    </div>
</div>
  )
}

export default Card
