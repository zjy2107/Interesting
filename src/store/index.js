import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js'
import app from './modules/app.js'
import user from './modules/user.js'
import permission from './modules/permission'
Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
		app,
		user,
		permission
	},
	getters,
	state: {
		dialogVisible: true
	}
})

export default store