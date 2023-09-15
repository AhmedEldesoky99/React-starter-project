export const formDataHandler = (obj) => {
  const formData = new FormData();
  for (let key in obj) {
    if (obj[key.trim()]) {
      if (Array.isArray(obj[key])) {
        obj[key].map((item) => formData.append(key, item));
      } else {
        formData.append(key, obj[key]);
      }
    }
  }
  return formData;
};

export const formURLSearchParams = (obj) => {
  const urlencoded = new URLSearchParams();

  for (let key in obj) {
    if (obj[key]) urlencoded.append(key, obj[key]);
  }
  return urlencoded;
};

export const prepareOptions = (arr = []) => {
  return arr.map((item) => ({ label: item.name, value: item.id }));
};
