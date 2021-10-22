import React from 'react'
import './Cadastro.css';
import Api from '../../api/api';

const Cadastro = (props) => {
  const history = props.history;

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    // pego o valor que usuario digitou nos inputs
    const titulo = evento.target.titulo.value; 
    const descricao = evento.target.descricao.value;
    const prioridade = evento.target.prioridade.value;
    const status = evento.target.status.value;
    const prazo = evento.target.prazo.value;



    const lista = {
      titulo,
      //salario: parseInt(salario),
      descricao,
      prioridade,
      status,
      prazo,

    }
    
    try {
      const response = await Api.fetchPost(lista)
      const result = await response.json();
      alert(result.message);
      history.push('/'); // forca o historico a voltar para a rota de / => home
    } catch(error) {
      console.log(error);
    }
    
  }

  return (
    <div className="container cadastro">
      <div className="card mt-4">
        <div className="card-title">
          <div className="row">
            <div className="col">
              <h3>Cadastro de Tarefas</h3>
            </div>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" name="titulo" id="floatingInput" placeholder="Digite o Titulo"/>
                  <label htmlFor="floatingInput">Titulo</label>
                </div>
              </div>

          
            </div>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" name="descricao" id="floatingInput" placeholder="Digite a Descricao"/>
                  <label htmlFor="floatingInput">Descricao</label>
                </div>
              </div>
              </div>

              <div className="col">
                <div className="form-floating">
                  <select className="form-control" name="prioridade" id="floatingprioridade" placeholder="Digite a Prioridade">
                    <option value="alta">Alta</option>
                    <option value="media">Média</option>
                    <option value="baixa">Baixa</option>
                  </select>
                  <label htmlFor="floatingprioridade">Prioridade</label>
                </div>

                <div className="col">
                <div className="form-floating">
                  <select className="form-control" name="status" id="floatingstatus" placeholder="Digite o Status">
                    <option value="junior">Fazer</option>
                    <option value="pleno">Realizando</option>
                    <option value="pleno">Concluido</option>
                  </select>
                  <label htmlFor="floatingstatus">Status</label>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" name="prazo" id="floatingInput" placeholder="Digite o Prazo"/>
                  <label htmlFor="floatingInput">Prazo</label>
                </div>
              </div>
              </div>
           

            <div className="row">
              <div className="col">
                <button className="btn btn-success" type="submit">Enviar</button>
                <button className="btn btn-warning">Voltar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Cadastro
