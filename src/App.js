import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Footer from './components/Footer';

function App() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className='main'>
      <Router>
        <div>
          <Navbar onClick={showSidebar} sidebar={sidebar} name={"Susan"}/>
        </div>        
        <div className={ sidebar ? 'switch' :'change-switch' }>          
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/reports' component={Reports} />
              <Route path='/products' component={Products} />
    
            </Switch>
          
        </div>  
        <div className="">
          <Footer />
        </div>  
      </Router>
    </div>
  );
}

export default App;