import VueRouter from 'vue-router'
import Store from '../store'

/** Routes */
import routes from './routes'

/** Router Instance */
const router = new VueRouter({
	mode: 'history',
	routes
});

export default router;