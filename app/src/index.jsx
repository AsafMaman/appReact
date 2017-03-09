// Dependencies
import React from 'react'; 
import {render} from 'react-dom';
import {Router,Route,browserHistory} from 'react-router'
// import ReactDOM from 'react-dom';

// Components
import Main from './components/common/main.jsx';
import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx';

// Styles
import './index.scss';

render(
     <Router history={browserHistory}>
        <Route component={Main}>
            <Route path="/" component={Home}/>
            <Route path="/about" component={About}/>
        </Route>
    </Router>,
    document.getElementById('main')
//<App />, document.getElementById('main')
);