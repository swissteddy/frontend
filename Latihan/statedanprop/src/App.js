import React from 'react';
import Kursus from'./state/state';
import Materi from './props/prop';
import './styles/style.css';


function App() {
  return (
    <div className="App">
      <Kursus/>
      <p>contoh state</p>
      <hr/>
      <Materi des="belajar seo" harga="120000"/>
      <Materi des="belajar react" harga="150000"/>
      <Materi des="belajar android" harga="220000"/>
      </div>
  );
}

export default App;
