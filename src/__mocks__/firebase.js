let mockState = {
  posts: {}
};

export default {
  state: mockState,
  setState: state => (mockState = state),
  syncState: (database, state) => {
    state.context.setState(mockState);
  },
  removeBinding: () => {}
};
