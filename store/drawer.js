
export const state = () => ({
	show: false
});

export const getters = {
	show(state) {
		return state.show
	}
};

export const mutations = {
	SET_DRAWER(state, data) {
		state.show = data;
	}
};

export const actions = {
	SET_DRAWER({ commit }, show) {
		commit("SET_DRAWER", show);
	},
	CLOSE_DRAWER({ commit }) {
		commit("SET_DRAWER", false);
	},

};