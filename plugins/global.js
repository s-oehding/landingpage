import Vue from 'vue'

import AppLogo from '../components/AppLogo'

import NavBar from '../components/layout/NavBar'
import FooterMain from '../components/layout/FooterMain'

import TerminalWindow from '../components/terminal/TerminalWindow'

import PostList from '~/components/postList/Postlist'
import PostListItem from '~/components/postList/PostlistItem'

Vue.component('AppLogo', AppLogo)
Vue.component('NavBar', NavBar)
Vue.component('FooterMain', FooterMain)
Vue.component('TerminalWindow', TerminalWindow)
Vue.component('PostList', PostList)
Vue.component('PostListItem', PostListItem)
