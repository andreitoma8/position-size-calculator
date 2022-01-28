export const isPersistedState = stateName => {
    const localState = localStorage.getItem(stateName);
    return localState && JSON.parse(localState);
};

