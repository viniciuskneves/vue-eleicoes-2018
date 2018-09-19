export default {
  listPresidentes() {
    return fetch('http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/listar/2018/BR/2022802018/1/candidatos')
      .then(response => response.json());
  },
  getPresidente(id) {
    return fetch(`http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/buscar/2018/BR/2022802018/candidato/${id}`)
      .then(response => response.json());
  },
};
