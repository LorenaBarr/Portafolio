import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Presentation from './components/Presentation';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />
        <Presentation></Presentation>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={AboutMe} />
          <Route path="/projects" component={Projects} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
