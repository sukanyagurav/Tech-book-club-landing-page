import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Membership from './components/Membership';
import Review from './components/Review';
import TechJourney from './components/TechJourney';
import Container from './components/UI/Container';
function App() {
  return (
    <>
      <div className="py-8  pb-16 bg">
        <Container>
          <Header />
          <Hero />
        </Container>
      </div>
      <Container>
        <Features />
        <TechJourney />
        <Membership />
        <Review />
      </Container>
      <Footer />
    </>
  );
}

export default App;
