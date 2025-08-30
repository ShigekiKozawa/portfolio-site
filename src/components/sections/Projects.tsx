const Projects = () => {
  const projects = [
    {
      id: 'echoes',
      title: 'echoes',
      description: 'X上で圧倒的集客が可能なインスタントウィン（即時抽選）キャンペーンや、Instagramによるハッシュタグ投稿（UGC）の促進、来店クーポン施策が行えるサービスです。',
      image: 'https://via.placeholder.com/600x400/3b82f6/ffffff?text=echoes',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'AWS'],
    },
    {
      id: 'internal-solutions',
      title: '社内ソリューション開発',
      description: 'JavasSriptとPythonを活用したWebアプリケーション開発。自然言語処理、画像認識、予測分析機能を実装。',
      image: 'https://via.placeholder.com/600x400/10b981/ffffff?text=Internal+Solutions',
      technologies: ['javaScript', 'Python', 'FastAPI', 'MySQL', 'AWS']
    },
    {
      id: 'web-production',
      title: 'Web制作',
      description: '9年間のWeb制作経験を活かし、企業サイト、ランディングページ、ECサイトなど様々なWebサイトの制作を担当。レスポンシブデザイン、SEO対策、パフォーマンス最適化を重視した制作を行っています。',
      image: 'https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Web+Production',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'WordPress', 'MovableType'],
    },
  ];

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-96 object-cover rounded-2xl shadow-lg hover:transform hover:-translate-y-2 transition-transform duration-300"
                />
              </div>
              
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <h3 className="card-title">{project.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 