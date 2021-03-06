import Vue from 'vue';
import Router from "vue-router";
import Login from "@/components/Login";
import Register from "@/components/Register";
import Companies from "@/components/Companies";
import Company from "@/components/Company";
import Stocks from "@/components/Stocks";
import User from "@/components/User";
import store from './stores/store';
import TradeHistory from "@/components/TradeHistory";
import Offers from "@/components/Offers";
import Bonjur from "@/components/Bonjur";
import Adios from "@/components/Adios";

Vue.use(Router);

const ifNotAuthenticated = (to, from, next) => {
    if (!store.getters.isAuthenticated) {
        next()
        return
    }
    next('/stocks')
}

const ifAuthenticated = (to, from, next) => {
    if (store.getters.isAuthenticated) {
        next()
        return
    }
    next('/login')
}

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Login,
            beforeEnter: ifNotAuthenticated
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            beforeEnter: ifNotAuthenticated
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
            beforeEnter: ifNotAuthenticated
        },
        {
            path: '/stocks',
            name: 'stocks',
            component: Stocks,
            beforeEnter: ifAuthenticated
        },
        {
            path: '/companies',
            name: 'companies',
            component: Companies,
            beforeEnter: ifAuthenticated
        },
        {
            path: '/company/:id',
            name: 'company',
            component: Company,
            beforeEnter: ifAuthenticated
        },
        {
            path: '/user',
            name: 'user',
            component: User,
            beforeEnter: ifAuthenticated
        },
        {
            path: '/trades/history',
            name: 'tradesHistory',
            component: TradeHistory,
            beforeEnter: ifAuthenticated
        },
        {
            path: '/offers',
            name: 'offers',
            component: Offers,
            beforeEnter: ifAuthenticated
        },
        {
            path: '/bonjur',
            name: 'bonjur',
            component: Bonjur,
            beforeEnter: ifAuthenticated
        },
        {
            path: '/adios',
            name: 'adios',
            component: Adios,
            beforeEnter: ifNotAuthenticated
        },
        {
            path: '*',
            name: 'default',
            component: Login,
            beforeEnter: ifNotAuthenticated
        },
    ]
})

export default router

