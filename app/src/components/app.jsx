// Dependencies
import React from 'react';

// Components
import Header from './header/header.jsx';  
import Content from './content/content.jsx';  
import Footer from './footer/footer.jsx';

// Styles
// import './App.scss';

function App() {  
  return (
    <div className="site-wrapper">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;  