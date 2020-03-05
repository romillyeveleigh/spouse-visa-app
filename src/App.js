import React from 'react';
import logo from './logo.svg';
import './App.css';
import CategoryList from './components/CategoryList';
import { robots } from './Robots';
import {Navbar} from 'react-bootstrap';

function App() {
  return (
    <div>
      <div className="App tc">
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">Spouse Visa Application Helper</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
          <p>
            Choose from the following document categories:
          </p>
        <div>
          <CategoryList robots={robots} />
        </div>
      </div>
    </div>
  );
}

export default App;
