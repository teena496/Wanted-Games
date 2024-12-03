import API_BASE_URL from "./config";

export const home = async () => {
  const response = await fetch(`${API_BASE_URL}/home`).catch(
    (err) => ("Error", console.error(err))
  );
  const data = await response.json();
  return data;
};

export const about = async () => {
  const response = await fetch(`${API_BASE_URL}/about`).catch(
    (err) => ("Error", console.error(err))
  );
  const data = await response.json();
  return data;
};

export const gallery = async () => {
  const response = await fetch(`${API_BASE_URL}/gallery`).catch(
    (err) => ("Error", console.error(err))
  );
  const data = await response.json();
  return data;
};

export const games = async () => {
  const response = await fetch(`${API_BASE_URL}/games`).catch(
    (err) => ("Error", console.error(err))
  );
  const data = await response.json();
  return data;
};

export const email = async () => {
  const response = await fetch(`${API_BASE_URL}/email`).catch(
    (err) => ("Error", console.error(err))
  );
  const data = await response.json();
  return data;
};

export const phone = async () => {
  const response = await fetch(`${API_BASE_URL}/phone`).catch(
    (err) => ("Error", console.error(err))
  );
  const data = await response.json();
  return data;
};

export const social = async () => {
  const response = await fetch(`${API_BASE_URL}/social`).catch(
    (err) => ("Error", console.error(err))
  );
  const data = await response.json();
  return data;
};

export const media = async () => {
  const response = await fetch(`${API_BASE_URL}/media`).catch(
    (err) => ("Error", console.error(err))
  );
  const data = await response.json();
  return data;
};
