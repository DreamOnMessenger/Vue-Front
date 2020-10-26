import { uuid } from 'vue-uuid';

export const state = () => ({
  list: [
    {
      name: 'test name',
      type: 'my type',
      url: '',
      id: '1234',
    },
  ],
});

export const mutations = {
  add: (state, provider) => {
    const id = uuid.v4();
    provider = { ...provider, id };
    // TODO Register provider lib
    state.list.push(provider);
  },
  remove: (state, { provider }) => {
    // TODO Unregister provider lib
    state.list.splice(state.list.indexOf(provider), 1);
  },
};
