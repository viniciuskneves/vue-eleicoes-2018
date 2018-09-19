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
  },
  actions: {
    async FETCH_DATA({ commit }) {
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
      } catch (e) {
        console.error(e);
      }
    }
  },
});
