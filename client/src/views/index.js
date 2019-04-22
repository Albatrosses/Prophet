import { createDefaultRounter, createRounter } from "helper/main/rounter";

const routes = new Array();
routes.push(createDefaultRounter("home-page"));
routes.push(createRounter("home-page", () => import("./component/HomePage"), "HomePage"));

export default routes;