import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Grid from './components/Grid';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
        <Header onSearch={setSearchQuery} />
        <Grid searchQuery={searchQuery} />
    </>
  );
}

export default App;
