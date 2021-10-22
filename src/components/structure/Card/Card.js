import React from 'react'
import { Link } from 'react-router-dom';

const Card = (props) => {
  const lista = props.data;
  return (
    <Link to={`/view/${lista._id}`} className="col">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{ lista.titulo }</h5>
          <span className="badge bg-primary">{ lista.prioridade }</span>
          <span className="badge bg-light text-dark"> { lista.prazo }</span>
        </div>
      </div>
    </Link>
  )
}

export default Card
