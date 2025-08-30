import Header from './components/common/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import PersonalDev from './components/sections/PersonalDev';
import Contact from './components/sections/Contact';
import Footer from './components/common/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Projects />
      <PersonalDev />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
