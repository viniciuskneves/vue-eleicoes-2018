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
      
      state.candidatos = candidatos.filter(candidato => candidato.descricaoSituacao === 'Deferido');
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
            id, nomeCompleto, nomeUrna, nomeColigacao, numero, descricaoSituacao,
          } = candidato;

          return {
            id,
            nomeCompleto,
            nomeUrna,
            nomeColigacao,
            numero,
            descricaoSituacao,
          };
        });

        commit('SET_CANDIDATOS', candidatos);

        dispatch('FETCH_PHOTOS');
      } catch (e) {
        console.error(e);
      }
    }
  },
});
