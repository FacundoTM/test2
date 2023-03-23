import { Slider } from './components/Slider.jsx';
import { Header } from './components/Header';
import { Portfolio } from './components/Portfolio.jsx';
import { Contacto } from './components/Contacto.jsx';
import { Footer } from './components/Footer.jsx';

export function App() {
    return(
    <div>
        <div class="container">
            <Header />
            <Slider />
        </div>
        <div>
            <Portfolio />
        </div>
        <div>
            <Contacto />
            <Footer />
        </div>
    </div>
    );
}