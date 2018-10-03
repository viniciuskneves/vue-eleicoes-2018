import { getCandidatesList, getCandidatePhoto } from '@/api';

const FETCH_PHOTOS = async ({ state, commit }) => {
  try {
    const { candidatos } = state;
    const promises = candidatos.map(_ => getCandidatePhoto(_.id));

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
};

const FETCH_DATA = async ({ commit, dispatch }) => {
  try {
    const data = await getCandidatesList();
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
};

export default {
  FETCH_PHOTOS,
  FETCH_DATA,
};
