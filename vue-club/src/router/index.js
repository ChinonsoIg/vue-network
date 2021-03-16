import { createRouter, createWebHistory } from "vue-router";

// import Header from "../components/commons/Header.vue";
import Home from "../pages/Home.vue";
import Room from "../components/Room.vue";
import Invites from "../pages/Invites.vue";
import Events from "../pages/Events.vue";
import AddEvent from "../components/AddEvent";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Notifications from "../pages/Notifications.vue";
import Profile from "../pages/Profile";

const routes = [
  { path: "/profile", name: "Profile", component: Profile },
  { path: "/notifications", name: "Notifications", component: Notifications },
  { path: "/events/add", name: "AddEvent", component: AddEvent },
  { path: "/events", name: "Events", component: Events },
  { path: "/invites", name: "Invites", component: Invites },
  { path: "/room", name: "Room", component: Room },
  { path: "/signin", name: "SignIn", component: SignIn },
  { path: "/signup", name: "SignUp", component: SignUp },
  { path: "/", name: "Home", component: Home },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes
});

export default router;