/** Route Components */
import Main from '../components/Main.vue'
import Home from '../components/views/Home.vue'
import Projects from '../components/views/Projects.vue'
import Project from '../components/views/Project.vue'

import About from '../components/views/About.vue'
import Contact from '../components/views/Contact.vue'

import NotFound from '../components/views/404.vue'

import store from '../store'

var defaultHome = '/' + store.state.lang + '/'

/** Routes */
export default [
	{
		path: '/',
		redirect: defaultHome
	},
	{
		path: '/:lang', 
		component: Main,
		children: [
			{
				path: '',
				redirect: 'projects'
			},
			{
				name: 'projects',
				path: 'projects',
				component: Projects
			},
			{
				name: 'about',
				path: 'about', 
				component: About
			},
			{
				name: 'contact',
				path: 'contact', 
				component: Contact
			},
			{
				path: 'projects/:project',
				component: Project,
				children: [
					{
						name: 'project',
						path: '',
					}
				]
			},
			{
				path: '*',
				component: NotFound
			}
		]
	}
]