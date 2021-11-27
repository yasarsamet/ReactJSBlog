import React from 'react';
import Navbar from './Components/Navbar'
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Post from './Components/Post';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About}  />
        <Route path="/contact" component={Contact}  />
        <Route path="/post/:post_id" component={Post}  />
      </div>
    </BrowserRouter>
  );
}

export default App;
