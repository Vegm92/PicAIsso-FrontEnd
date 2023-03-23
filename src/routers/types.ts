interface Routes {
  login: string;
  create: string;
  detail: string;
  byId: string;
}

const endpoints: Routes = {
  login: "/login",
  create: "/create",
  detail: "/detail",
  byId: "/:id",
};

export default endpoints;
