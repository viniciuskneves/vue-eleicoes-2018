const SET_CANDIDATES = (state, candidatesPayload) => {
  const localState = state;
  const availableCandidates = candidatesPayload.filter(candidate => candidate.descricaoSituacao === 'Deferido');

  localState.candidates = availableCandidates;
};

export default {
  SET_CANDIDATES,
};
