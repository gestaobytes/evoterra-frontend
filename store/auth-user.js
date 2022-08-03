
export const state = () => ({
	authenticated: false
});

export const getters = {
	authenticated(state) {
		return state.authenticated
	}
};

export const mutations = {
	SET_USER_LOGGED(state, data) {
		state.authenticated = data;
	}
};

export const actions = {
	SET_USER_LOGGED({ commit }, authenticated) {
		commit("SET_USER_LOGGED", authenticated);
	},
};
