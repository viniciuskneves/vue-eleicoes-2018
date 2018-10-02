import Vue from 'vue';

const SET_CANDIDATOS = (state, candidatos) => {
  const localState = state;
  const availableCandidatos = candidatos.filter(candidato => candidato.descricaoSituacao === 'Deferido');

  localState.candidatos = availableCandidatos;
};

const SET_CANDIDATO_PHOTO = (state, { id, photoUrl }) => {
  const candidato = state.candidatos.find(_ => _.id === id);

  if (candidato) {
    Vue.set(candidato, 'photoUrl', photoUrl);
  }
};

export default {
  SET_CANDIDATOS,
  SET_CANDIDATO_PHOTO,
};
