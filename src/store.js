import Vue from 'vue';
import Vuex from 'vuex';

import api from './api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    candidatos: [],
  },
  mutations: {
    SET_CANDIDATOS(state, candidatos) {
      console.log({ candidatos });

      const availableCandidatos = candidatos.filter(candidato => candidato.descricaoSituacao === 'Deferido');

      Vue.set(state, 'candidatos', availableCandidatos);
    },
    SET_CANDIDATO_PHOTO(state, { id, photoUrl }) {
      console.log({ id, photoUrl });

      const candidato = state.candidatos.find(_ => _.id === id);

      if (candidato) {
        Vue.set(candidato, 'photoUrl', photoUrl);
      }
    },
  },
  actions: {
    async FETCH_PHOTOS({ state, commit }) {
      try {
        const { candidatos } = state;
        const promises = candidatos.map(_ => api.getPresidente(_.id));

        const data = await Promise.all(promises);

        data.forEach((candidato) => {
          commit('SET_CANDIDATO_PHOTO', {
            id: candidato.id,
            photoUrl: candidato.fotoUrl,
          });
        });
      } catch (e) {
        console.error(e);
      }
    },
    async FETCH_DATA({ commit, dispatch }) {
      try {
        const data = await api.listPresidentes();
        const candidatos = data.candidatos.map((candidato) => {
          const {
            id,
            nomeUrna,
            nomeColigacao,
            numero,
            descricaoSituacao,
            partido: { sigla },
          } = candidato;

          return {
            id,
            nomeUrna,
            nomeColigacao,
            numero,
            descricaoSituacao,
            sigla,
          };
        });

        commit('SET_CANDIDATOS', candidatos);

        dispatch('FETCH_PHOTOS');
      } catch (e) {
        console.error(e);
      }
    },
  },
});
