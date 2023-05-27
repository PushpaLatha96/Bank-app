import styles from "./style";
// import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import Billing from './components/Billing'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Business from './components/Business'
import CardDeal  from "./components/CardDeal";
import Clients from "./components/Clients";
import CTA from "./components/CTA";
import Footer from "./components/Footer"
import Stats from './components/Stats'
import Testimonial from "./components/Testimonial";
const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart} `}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonial />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
