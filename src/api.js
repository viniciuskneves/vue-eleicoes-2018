export default {
  listCandidatos(state, type) {
    return fetch(`http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/listar/2018/${state}/2022802018/${type}/candidatos`)
      .then(response => response.json());
  },
  getCandidato(id, state) {
    return fetch(`http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/buscar/2018/${state}/2022802018/candidato/${id}`)
      .then(response => response.json());
  },
};
