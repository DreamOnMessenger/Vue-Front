export const state = () => ({
  test: 0,
});

export const mutatinos = {
  increment: (state) => {
    state.test++;
  },
};
