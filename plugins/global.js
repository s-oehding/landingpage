import Vue from 'vue'

import AppLogo from '../components/AppLogo'

import NavBar from '../components/layout/NavBar'
import FooterMain from '../components/layout/FooterMain'

import VueTerminal from '../components/vue-terminal/VueTerminal'
import VueTerminalWindow from '../components/vue-terminal/VueTerminalWindow'

import PostList from '~/components/postList/PostList'
import PostListItem from '~/components/postList/PostListItem'

Vue.component('AppLogo', AppLogo)
Vue.component('NavBar', NavBar)
Vue.component('FooterMain', FooterMain)
Vue.component('PostList', PostList)
Vue.component('PostListItem', PostListItem)
Vue.component('VueTerminal', VueTerminal)
Vue.component('VueTerminalWindow', VueTerminalWindow)
