import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import PresentationTemplates from './components/PresentationTemplates';
import Services from './components/Services';
import { useScrollReveal } from './hooks/useScrollReveal';

function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-cream font-body text-chocolate">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <PresentationTemplates />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
