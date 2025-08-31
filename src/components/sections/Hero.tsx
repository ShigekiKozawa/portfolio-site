import heroImage from '../../assets/images/hero.png';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-100 py-12">
      {/* フォトフレーム */}
      <div className="relative w-full max-w-6xl mx-6 -mt-20">
        {/* 外枠 - フレーム効果 */}
        <div className="relative bg-white p-6 rounded-3xl shadow-2xl">
          {/* 内枠 - より深いフレーム効果 */}
          <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 p-4 rounded-2xl">
            {/* 画像コンテナ - 内側に影 */}
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-inner">
              {/* 背景画像 */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${heroImage})`,
                }}
              ></div>
              
              {/* グラデーションオーバーレイ */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/30"></div>
              
              {/* パターン背景 */}
              <div className="absolute inset-0 opacity-10 bg-repeat" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}></div>
              
              {/* コンテンツ */}
              <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-6">
                <div>
                  <h1 className="hero-title drop-shadow-lg">
                    Kozawa Shigeki
                  </h1>
                  
                  <p className="text-2xl text-white mb-2 drop-shadow-md">
                    Portfolio Site
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* スクロール矢印 - フレームの外に配置 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-slate-600 text-sm font-medium">Scroll Down</span>
          <button
            onClick={scrollToAbout}
            className="group flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <svg 
              className="w-6 h-6 text-blue-600 group-hover:text-blue-700 transition-colors animate-bounce" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero; 