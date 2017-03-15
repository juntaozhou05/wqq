import App from '../App.vue'

export default [{
    path: '/',
    component: App,
    children: [{
        path: '',
        component: r => require.ensure([], () => r(require('../page/home.vue')), 'home')
    }, {
        path: '/usercenter',
        component: r => require.ensure([], () => r(require('../page/usercenter.vue')), 'usercenter')
    }, {
        path: '/move',
        component: r => require.ensure([], () => r(require('../page/move.vue')), 'move')
    }]
}]