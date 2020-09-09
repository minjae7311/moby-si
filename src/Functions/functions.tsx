export const goDetail = (history, path, id) => {
  history.push(`/${path}/${id}`);
};

export const goBack = (history) => {
  history.goBack();
};
