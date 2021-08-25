import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Todolist from "./pages/Todolist";
import Profile from "./pages/Profile";
import { ROUTE_PATHS } from "./utils/constant/router";
import TodolistSaga from "./pages/TodolistSaga";

export const anonymousRouters = [{
    href: ROUTE_PATHS.HOME,
    exact:true,
    component:Home,
    template:'default',
},{
    href: ROUTE_PATHS.ABOUT_US,
    exact:true,
    component:AboutUs,
    template:'default',
},{
    href: ROUTE_PATHS.CONTACT,
    exact:true,
    component:Contact,
    template:'default',
},{
    href: ROUTE_PATHS.LOGIN,
    exact:true,
    component:Login,
    template:'default',
},{
    href: ROUTE_PATHS.DETAIL,
    exact:true,
    component:Detail,
    template:'default',
},{
    href: ROUTE_PATHS.PROFILE,
    exact:true,
    component:Profile,
    template:'default',
},{
    href: ROUTE_PATHS.PROFILE,
    exact:true,
    component:Profile,
    template:'default',
},{
    href: ROUTE_PATHS.TODOLIST,
    exact:true,
    component:Todolist,
    template:'default',
},{
    href: ROUTE_PATHS.TODOLIST_SAGA,
    exact:true,
    component:TodolistSaga,
    template:'default',
},{
    href: ROUTE_PATHS.PAGE_NOT_FOUND,
    exact:true,
    component:PageNotFound,
    template:'default',

}
]