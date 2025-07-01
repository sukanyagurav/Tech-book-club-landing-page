import Features from './components/Features';
import Header from './components/Header';
import Hero from './components/Hero';
import Membership from './components/Membership';
import Review from './components/Review';
import TechJourney from './components/TechJourney';
import Container from './components/UI/Container';
function App() {
  return (
    <>
      <div className="bg-[url(./assets/images/pattern-light-bg.svg)] py-8 px-6">
        <Header />
        <Hero />
      </div>
      <Container>
        <Features />
        <TechJourney/>
        <Membership/>
        <Review/>
      </Container>
    </>
  );
}

export default App;
