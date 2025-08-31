import echoesImage from '../../assets/images/echoes.png';
import alphaImage from '../../assets/images/alpha.png';
import webdesignImage from '../../assets/images/webdesign.jpg';

const Projects = () => {
  const projects = [
    {
      id: 'echoes',
      title: 'echoes',
      description: 'Xでの様々なキャンペーンの実現、Instagramによるハッシュタグ投稿（UGC）の促進、来店クーポン施策が行えるサービスです。こちらのプロダクト開発において、フロントエンドの開発を担当しています。',
      image: echoesImage,
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'AWS', 'Google Analytics'],
    },
    {
      id: 'alpha',
      title: 'データ集積・分析ソリューション提供',
      description: 'AI基礎開発チーム（αチーム）では、JavasScriptとPythonを用いたデータ集積ツールやGoogle Apps Scriptによるデータ分析ツールを開発。弊社のデータチームと共にデータ活用を軸としたPOCの確立に取り組んでいます。',
      image: alphaImage,
      technologies: ['JavaScript', 'Google Apps Script', 'MySQL', 'AWS']
    },
    {
      id: 'web-design',
      title: 'Web制作',
      description: '企業サイト、ランディングページ、ECサイトなど様々なWebサイトの制作を担当。レスポンシブデザイン、SEO対策、パフォーマンス最適化を重視した制作を行っています。',
      image: webdesignImage,
      technologies: ['HTML', 'CSS', 'JavaScript', 'WordPress', 'MovableType', 'Google Analytics'],
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
                  className="w-full h-72 object-cover rounded-2xl shadow-lg hover:transform hover:-translate-y-2 transition-transform duration-300"
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