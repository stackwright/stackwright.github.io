import { Header, Footer, Section } from './components/layout';
import { Hero, About, Services, Approach, Contact } from './components/sections';
import { Logo } from './components/ui';

/**
 * Main App Component
 * Single-page application with smooth scrolling sections
 */
function App() {
  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Approach', href: '#approach' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <Header logo={<Logo variant="full" size="small" />} navLinks={navLinks} />

      <main>
        <Hero />

        <Section id="about">
          <About />
        </Section>

        <Section id="services">
          <Services />
        </Section>

        <Section id="approach">
          <Approach />
        </Section>

        <Section id="contact">
          <Contact />
        </Section>
      </main>

      <Footer companyName="Stackwright" />
    </>
  );
}

export default App;
