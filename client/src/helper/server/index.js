const http = async (url, payload) => {
  let responese = await fetch(url, payload);
  return responese.json();
};

export default http;
