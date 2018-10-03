const API_BASE_URL = 'http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura';

const getAPIUrl = (state, type) => `${API_BASE_URL}/listar/2018/${state}/2022802018/${type}/candidatos`;

const getCandidatesList = async (type, state = 'PE') => {
  let url = '';

  switch (type) {
    case 'governador':
      url = getAPIUrl(state, '3');
      break;
    case 'senador':
      url = getAPIUrl(state, '5');
      break;
    case 'federal':
      url = getAPIUrl(state, '6');
      break;
    case 'estadual':
      url = getAPIUrl(state, '7');
      break;
    default:
      url = getAPIUrl('BR', '1');
  }

  try {
    const response = await fetch(url);
    return response.json();
  } catch (e) {
    return e;
  }
};

const getCandidate = async (id, state = 'BR') => {
  const url = `${API_BASE_URL}/buscar/2018/${state}/2022802018/candidato/${id}`;

  try {
    const response = await fetch(url);
    return response.json();
  } catch (e) {
    return e;
  }
};

export { getCandidatesList, getCandidate };
