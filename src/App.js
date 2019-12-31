import React from 'react';
import logo from './logo.svg';
import './App.css';
import {  BrowserRouter as Router,  Switch,  Route,  Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
		<Router>
			<div>
				<ul>
				<li>
					<Link to="/works">My Works</Link>
				</li>
				
				<li>
					<Link to="/blog">My Blog</Link>
				</li>
				
				<li>
					<Link to="/contact">Contact Me</Link>
				</li>
				</ul>

				<Switch>
					<Route path="/works">
						<Works />
					</Route>
					<Route path="/blog">
						<Blog />
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>
				</Switch>
				
			</div>
		</Router>
    </div>
  );
}

function Works() {
  return (
    <div>
      <h2>Works</h2>
    </div>
  );
}

function Blog() {
  return (
    <div>
      <h2>Blog</h2>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
    </div>
  );
}

export default App;
