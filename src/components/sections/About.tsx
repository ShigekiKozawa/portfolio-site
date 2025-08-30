const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container">
        <h2 className="section-title">About</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://via.placeholder.com/600x400/3b82f6/ffffff?text=小澤繁輝"
              alt="小澤繁輝"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
          
          <div>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              Vue.js/Laravel、Python/AI活用の技術力を持つフロントエンドエンジニアです。
              9年間のWeb制作経験と2年間のプロダクト開発実績を持ち、様々なソリューション提供に貢献してきました。
            </p>
            
            <div className="bg-blue-50 p-6 rounded-xl mb-8 border-l-4 border-blue-600">
              <h3 className="text-lg font-semibold text-blue-700 mb-2">
                アライドアーキテクツ株式会社
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                2005年創業以来、6,000社以上のマーケティング支援実績を活かし、独自開発のSaaS・SNS・AI技術とデジタル・AI人材を組み合わせた統合ソリューションを提供。
              </p>
            </div>
            
            <div className="flex gap-4">
              <a
                href="https://github.com/ShigekiKozawa"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              
              <a
                href="https://x.com/home"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              
              <a
                href="https://www.facebook.com/profile.php?id=100005526343283"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 