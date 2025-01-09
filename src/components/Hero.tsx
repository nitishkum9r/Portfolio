import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { HeroProps } from '@/types/portfolio'

const Hero = ({ personalInfo }: HeroProps) => {
  return (
    <section className="pt-32 pb-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8">
          <div className="relative w-32 h-32 mx-auto">
            <img
              src="/profile.jpg"
              alt={personalInfo.name}
              className="rounded-full object-cover w-full h-full"
            />
            <div className="absolute inset-0 rounded-full border-2 border-blue-500 animate-pulse"></div>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
          {personalInfo.name}
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
          {personalInfo.title}
        </p>

        <div className="max-w-2xl mx-auto mb-12">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {personalInfo.about}
          </p>
        </div>
        
        <div className="flex justify-center space-x-6">
          <a 
            href={personalInfo.contacts.github}
            className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={24} />
          </a>
          <a 
            href={personalInfo.contacts.linkedin}
            className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href={`mailto:${personalInfo.contacts.email}`}
            className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
          >
            <Mail size={24} />
          </a>
          {personalInfo.contacts.twitter && (
            <a 
              href={personalInfo.contacts.twitter}
              className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter size={24} />
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero