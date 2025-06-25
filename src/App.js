
import './App.css';
import Navbar from './components/Navbar';
import Features from './components/Features';
import CartSection from './components/CartSection';
import Footer from './components/Footer';
import Courses from './components/Courses';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Slider from './Slider';
import FAQ from './components/FAQ';
function App() {
  return (
<>

<Navbar/>
 <Features/>
 <CartSection/>
 <Courses/>
 <HowItWorks/>
 <Pricing/>
 <Slider/>
 <FAQ/>
 <Footer/>
</>
  );
}

export default App;
