import "./styles/style.scss"
import Header from "./componens/header/header";
import Hero from "./componens/hero/hero";
import About from "./componens/about/about"
import Programs from "./componens/programs/programs";
import Pricing from "./componens/pricing/pricing";
import Footer from "./componens/footer/footer";
function App() {
    return (
        <>
            <Header/>
            <Hero/>
            <Programs/>
            <Pricing/>
            <About/>
            <Footer/>
        </>
    );
}

export default App;
