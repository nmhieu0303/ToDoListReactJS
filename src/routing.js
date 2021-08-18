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
},{
    href: ROUTE_PATHS.ABOUT_US,
    exact:true,
    component:AboutUs,
},{
    href: ROUTE_PATHS.CONTACT,
    exact:true,
    component:Contact,
},{
    href: ROUTE_PATHS.LOGIN,
    exact:true,
    component:Login,
},{
    href: ROUTE_PATHS.DETAIL,
    exact:true,
    component:Detail,
},{
    href: ROUTE_PATHS.PROFILE,
    exact:true,
    component:Profile,
},{
    href: ROUTE_PATHS.PROFILE,
    exact:true,
    component:Profile,
},{
    href: ROUTE_PATHS.TODOLIST,
    exact:true,
    component:Todolist,
},{
    href: ROUTE_PATHS.TODOLIST_SAGA,
    exact:true,
    component:TodolistSaga,
},{
    href: ROUTE_PATHS.PAGE_NOT_FOUND,
    exact:true,
    component:PageNotFound,
}
]