import React from 'react';
import List from '../../components/structure/List/List';
import './Home.css';

const Home = () => {
  return (
    <div className="containerHome">
      <h2 className="textcenter">Tarefas do Dia</h2>
      <List/>
    </div>
  )
}

export default Home
