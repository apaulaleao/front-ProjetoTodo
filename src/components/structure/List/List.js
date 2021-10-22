import React, { useState, useEffect } from 'react'
import Card from '../Card/Card'
import Api from '../../../api/api'

const List = () => {
  const [lista, setListas] = useState([]);
  
  useEffect(() => {
    getListas();
  }, []);
  
  const getListas = async () => {
    const response = await Api.fetchGetAll(); // requiscao do tipo GET para api
    const data = await response.json(); // API retorna um array com dados
    setListas(data); // atualizamos o nosso objeto do estado com o array vindo da api backend
  }

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
      {
        lista.map((lista, index) => ( // iterar o array de lista e para cada lista chamar um componente card
          <Card data={lista} key={index}/>
        ))
      }
    </div>
  )
}

export default List
