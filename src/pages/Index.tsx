import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const categories = ['All', 'Design', 'Development', 'Photography'];

const projects = [
  {
    id: 1,
    title: 'Brand Identity Design',
    category: 'Design',
    description: 'Complete brand identity system for a tech startup',
    link: 'https://example.com/project1',
    image: 'https://v3b.fal.media/files/b/elephant/5XJ6klLTvQW9bepJCUlde_output.png'
  },
  {
    id: 2,
    title: 'E-commerce Platform',
    category: 'Development',
    description: 'Full-stack web application with React and Node.js',
    link: 'https://example.com/project2',
    image: 'https://v3b.fal.media/files/b/elephant/5XJ6klLTvQW9bepJCUlde_output.png'
  },
  {
    id: 3,
    title: 'Architecture Photography',
    category: 'Photography',
    description: 'Professional photo series of modern architecture',
    link: 'https://example.com/project3',
    image: 'https://v3b.fal.media/files/b/elephant/5XJ6klLTvQW9bepJCUlde_output.png'
  },
  {
    id: 4,
    title: 'Mobile App UI/UX',
    category: 'Design',
    description: 'User interface design for fitness tracking app',
    link: 'https://example.com/project4',
    image: 'https://v3b.fal.media/files/b/elephant/5XJ6klLTvQW9bepJCUlde_output.png'
  },
  {
    id: 5,
    title: 'Dashboard Analytics',
    category: 'Development',
    description: 'Data visualization dashboard with real-time updates',
    link: 'https://example.com/project5',
    image: 'https://v3b.fal.media/files/b/elephant/5XJ6klLTvQW9bepJCUlde_output.png'
  },
  {
    id: 6,
    title: 'Portrait Series',
    category: 'Photography',
    description: 'Studio portrait photography collection',
    link: 'https://example.com/project6',
    image: 'https://v3b.fal.media/files/b/elephant/5XJ6klLTvQW9bepJCUlde_output.png'
  }
];

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-3xl font-bold tracking-tight text-black">PORTFOLIO</h1>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16">
        <section className="mb-24">
          <h2 className="text-2xl font-semibold mb-4 text-black">Обо мне</h2>
          <p className="text-gray-600 max-w-2xl leading-relaxed">
            Я — креативный специалист с фокусом на дизайне, разработке и фотографии. 
            Создаю визуальные решения, которые объединяют эстетику и функциональность. 
            Каждый проект — это возможность превратить идею в реальность.
          </p>
        </section>

        <section>
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl font-semibold text-black">Проекты</h2>
            <div className="flex gap-2">
              {categories.map(category => (
                <Button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  variant={activeCategory === category ? 'default' : 'outline'}
                  className={activeCategory === category 
                    ? 'bg-black text-white hover:bg-gray-800' 
                    : 'bg-white text-black border-black hover:bg-gray-50'
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <Card key={project.id} className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-black">{project.title}</h3>
                    <p className="text-sm text-gray-500 mb-3">{project.category}</p>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-black hover:underline"
                    >
                      View Project
                      <Icon name="ExternalLink" size={16} />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 mt-24">
        <div className="container mx-auto px-6 py-8">
          <p className="text-center text-gray-500 text-sm">
            © 2025 Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
