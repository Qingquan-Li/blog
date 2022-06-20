import React from 'react';
import './App.css';
import TableOfContents from './components/TableOfContents';

function App() {
  return (
    <div className="container blog-contents-container">
      <div class="row">
        <TableOfContents />
      </div>
    </div>
  );
}

export default App;
