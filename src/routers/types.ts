interface Routes {
  login: string;
  create: string;
  detail: string;
}

const endpoints: Routes = {
  login: "/login",
  create: "/createPage",
  detail: "/detail/:id",
};

export default endpoints;
