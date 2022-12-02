const routers = [
  {
    path: "/",
    redirect: "/auth",
  },
  {
    component: "AuthLayout",
    path: "/auth",
    auth: false,
    name: "Auth",
    exact: false,
    redirect: "/auth/login",
    childrens: [
      {
        component: "Login",
        path: "/login",
        componentPath: "pages/auth/login",
        name: "Login",
        auth: false,
        exact: true,
      }
    ],
  },
  {
    component: "MainLayout",
    path: "/main",
    auth: false,
    name: "Dashboard",
    exact: false,
    redirect: "/main/dashboard",
    childrens: [
      {
        component: "Dashboard",
        path: "/dashboard",
        componentPath: "pages/dashboard/dashboard",
        name: "Dashboard",
        auth: false,
        exact: true,
      },
    ],

  },
];
export default routers;
