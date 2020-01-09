
import Dashboard from "views/Home.jsx";
import TrackPlayers from "views/TrackPlayers";
import CreateUser from "views/CreateUser.jsx";
import LogIn from 'views/LogIn.jsx'
import LogOut from 'views/LogOut.jsx'


const dashboardRoutes = [
  {
    path: "/Home",
    name: "Home",
    icon: "pe-7s-home",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "Track Your Players",
    icon: "pe-7s-user",
    component: TrackPlayers,
    layout: "/admin"
  },

  {
    path: "/createUser",
    name: "Create User",
    icon: "pe-7s-user",
    component: CreateUser,
    layout: "/admin",
    className: "createUser"
  },
  {
    path: "/login",
    name: "Log In",
    component: LogIn,
    layout: "/admin",
  },
  {
    path: "/logout",
    name: "Log Out",
    component: LogOut,
    layout: "/admin",
  },
];

export default dashboardRoutes;
