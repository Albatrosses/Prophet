export const createDefaultRounter = (redirect) => {
  return {
    path: "/",
    redirect: `/${redirect}`,
  }
};

export const createRounter = (path, component, name = path, meta) => {
  return {
    path: `/${path}`,
    component: component,
    name: name,
    meta: {
      ...meta
    }
  };
};