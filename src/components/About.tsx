import { AboutProps } from '@/types/portfolio'

const About = ({ personalInfo }: AboutProps) => {
  const skillCategories = [
    { title: 'Frontend', skills: personalInfo.skills.frontend, colorClass: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100' },
    { title: 'Backend', skills: personalInfo.skills.backend, colorClass: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100' },
    { title: 'DevOps', skills: personalInfo.skills.devops, colorClass: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100' }
  ]

  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              {personalInfo.about}
            </p>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              I'm always eager to learn new technologies and tackle challenging problems.
              My approach combines technical expertise with a strong focus on delivering
              user-friendly solutions that drive business value.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
              Technical Skills
            </h3>
            <div className="space-y-6">
              {skillCategories.map((category) => (
                <div key={category.title}>
                  <h4 className="font-medium mb-3 text-gray-800 dark:text-gray-200">
                    {category.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1 rounded-full text-sm ${category.colorClass}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About