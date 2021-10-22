const Api = {
 apiUrl: "https://backend-todoana.herokuapp.com/lista",
  fetchGetAll: () => fetch(Api.apiUrl),
  fetchGetById: id => fetch(`${Api.apiUrl}/${id}`),
  fetchPost: (lista) => {
    return fetch(Api.apiUrl, {
      method: 'POST',
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(lista)
    })
  },
  fetchPut: (lista, id) => {
    return fetch(`${Api.apiUrl}/${id}`, {
      method: 'PUT',
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(lista)
    })
  },
  fetchDelete: (id) => {
    return fetch(`${Api.apiUrl}/${id}`, {
      method: 'DELETE'
    })
  }
}

export default Api;