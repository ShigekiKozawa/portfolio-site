const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-900 to-blue-700">
      <div className="absolute inset-0 opacity-10 bg-repeat" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <h1 className="hero-title">
          Kozawa Shigeki
        </h1>
        
        <p className="text-2xl text-blue-200 mb-2">
          Portfolio Site
        </p>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToAbout}
          className="text-blue-300 hover:text-blue-200 transition-colors animate-bounce"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero; 