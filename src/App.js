import React from 'react';
import logo from './logo.svg';
import './App.css';
import CategoryList from './components/CategoryList';
import { robots } from './Robots';

function App() {
  return (
    <div>
      <div className="App tc">
        <h1 className="App-header">Spouse Visa Application Helper</h1>
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
