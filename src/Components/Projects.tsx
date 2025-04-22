import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Piplup',
      date: '2024',
      about: 'AI integrated Quiz App that enables users to create quizzes using AI and participate in quizzes.',
      url: 'https://github.com/nextpointer/piplup'
    },
    {
      title: 'Mind Matrix',
      date: '2023',
      about: 'Mental Health Management platform that provides tools and resources for mental well-being.',
      url: 'https://github.com/nextpointer/Mind-Matrix'
    },
    {
      title: 'RYIT',
      date: '2023',
      about: 'An educational course platform that offers a variety of online courses for learners.',
      url: 'https://github.com/nextpointer/RYATM'
    },
    {
      title: 'SplitIt',
      date: '2024',
      about: 'A money-splitting app that helps users easily divide expenses among friends and family.',
      url: 'https://github.com/nextpointer/SplitIt'
    },
    {
      title: 'Mr. Calculator',
      date: '2022',
      about: 'A large number calculator designed to perform large calculations with ease.',
      url: 'https://github.com/nextpointer/Mr.-Calculator'
    }
  ];

  return (
    <>
      <div className='flex flex-col w-full mt-2'>
        {projects.map((project, index) => (
          <div 
            key={index} 
            className='flex flex-col w-full mb-4 transition-all duration-200 border-[#6c6c6c] ease-linear hover:border rounded-lg group projects-border' > 
            <div className='flex flex-row w-full justify-between'>
              <h3 className='flex items-center gap-1'>
                <Link href={project.url} target="_blank" rel="noopener noreferrer" className='flex items-center gap-1'>
                  {project.title}
                  <ArrowUpRight className='h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 project-link' /> 
                </Link>
              </h3>
              <span>{project.date}</span>
            </div>
            <div>
              <p className='text-sm'>{project.about}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;