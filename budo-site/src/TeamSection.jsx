import './TeamSection.css'

const people = [
    {
      name: 'Luca De mol',
      role: 'Co-Founder / Informatica',
      imageUrl:
        '/src/assets/bram.jpg',
      socials: ['mail']
    },
    {
      name: 'Bram Verstappen',
      role: 'Co-Founder / Informatica',
      imageUrl:
        '/src/assets/bram.jpg',
      socials: ['mail']
    },
    {
      name: 'Mauro Vranckx',
      role: 'Co-Founder / Industrële ingineur',
      imageUrl:
        '/src/assets/mauro.jpg',
      socials: ['mail']
    }
  ]
  
  export default function TeamSection() {
    return (
      <div className="w-screen h-screen pt-20 bg-white">
        <div className="mx-auto grid max-w-7xl gap-x-8 px-6 lg:px-8">
          <div className="max-w-2xl md:container">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl flex items-center justify-center">Meet our team</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 flex items-center justify-center px-20 text-center">
            At the core of our journey, you'll find three close friends who have turned their shared passion for software into a remarkable adventure of friendship and innovation.
            Our team consists of Luca, Bram, and Mauro, each of us contributing our unique skills and driving our efforts forward.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 flex items-center justify-center px-20 text-center">
            When we combine our talents, you can be certain that extraordinary, tailor-made software solutions will emerge.
             With our distinctive abilities, we create software that not only operates seamlessly but also reflects the passion and commitment that define each of us as individuals.
            </p>
          </div>
          <ul role="list" className="gap-x-8 py-10 flex items-center justify-center">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex bg-white items-center gap-x-6 listElement shadow-lg border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400">
                  <img className="photo" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600 pr-10">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }