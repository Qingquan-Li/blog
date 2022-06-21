import React from 'react';
import './App.css';
import TableOfContents from './components/TableOfContents';
import GithubCorner from './components/GithubCorner';

function App() {
  return (
    <div className="container blog-contents-container">
      <div className="row">
        <TableOfContents />
        <GithubCorner />
      </div>
    </div>
  );
}

export default App;
