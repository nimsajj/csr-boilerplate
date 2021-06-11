import { LoginPage, LogoutPage } from "../features/auth";

const HomePage = () => <div>Home Page</div>;
const OnePage = () => <div>Page 1</div>;
const TwoPage = () => <div>Page 2</div>;

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/one-page",
    component: OnePage,
  },
  {
    path: "/two-page",
    component: TwoPage,
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/logout",
    component: LogoutPage,
  },
];

export default routes;
