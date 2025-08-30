const PersonalDev = () => {
  const personalProjects = [
    {
      id: 'study-group',
      title: '技術勉強会運営',
      description: 'エンジニア向け技術勉強会の企画・運営。React、Vue.js、AI技術に関する勉強会を定期的に開催し、技術コミュニティの発展に貢献。',
      technologies: ['React', 'Vue.js', 'Python', 'コミュニティ運営'],
      github: 'https://github.com/ShigekiKozawa/figma-plugin',
    },
    {
      id: 'figma-plugin',
      title: 'Figmaプラグイン開発',
      description: 'デザインワークフローを効率化するFigmaプラグインを開発。デザイナーとエンジニアの連携を改善するツールを提供。',
      technologies: ['TypeScript', 'Figma API', 'React'],
      github: 'https://github.com/ShigekiKozawa/figma-plugin',
    },
    {
      id: 'gas-automation',
      title: 'Google Apps Script自動化',
      description: '業務効率化のためのGASスクリプト開発。データ処理、レポート生成の自動化により、チームの生産性向上に貢献。',
      technologies: ['JavaScript', 'Google Apps Script', 'Google Sheets API'],
      github: 'https://github.com/ShigekiKozawa/gas-automation',
    },
    {
      id: 'vue-library',
      title: 'Vue.jsライブラリ',
      description: '再利用可能なVue.jsコンポーネントライブラリの開発。開発効率向上とコード品質の統一を目指したプロジェクト。',
      technologies: ['Vue.js', 'TypeScript', 'Vite'],
      github: 'https://github.com/ShigekiKozawa/vue-library',
    },
  ];

  return (
    <section id="personal-dev" className="section-padding bg-gray-50">
      <div className="container">
        <h2 className="section-title">Personal Development</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {personalProjects.map((project) => (
            <div key={project.id} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl">
              
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
              
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-800 font-medium transition-colors"
                  >
                    GitHub
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalDev; 