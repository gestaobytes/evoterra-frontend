
export const state = () => ({
	show: false
});

export const getters = {
	show(state) {
		return state.show
	}
};

export const mutations = {
	SET_MODAL(state, data) {
		state.show = data;
	}
};

export const actions = {
	SET_MODAL({ commit }, show) {
		commit("SET_MODAL", show);
	},
	CLOSE_MODAL({ commit }) {
		commit("SET_MODAL", false);
	},

};