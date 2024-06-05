import { Route, Router } from 'react-router-dom';
import Contact from './components/Contact'
import Footer from  './components/Footer'


function App() {
  return (<>
    <Router>
    <Contact />
    <Footer />
    <Route path="/Aviso-legal" component={LegalNotice} />
    <Route path="/politica-de-privacidad" component={PrivacyPolicy} />
    </Router>
    </>
    
    
  );
}

export default App;
