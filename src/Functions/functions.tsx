export const goDetail = (history, path, id) => {
	history.push(`/${path}/${id}`);
};

export const goBack = (history) => {
	history.goBack();
};

export const goList = (history, path) => {
	history.push(`/${path}`);
};
