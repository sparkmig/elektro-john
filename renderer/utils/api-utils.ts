export const convertObjectToUrlParams = (obj: any) => {
  const params = Object.keys(obj).reduce((a, b) => {
    let value = obj[b];

    if (obj[b].toJSON) {
      value = obj[b].toJSON();
    }

    a[b] = value;

    return a;
  }, {});

  return new URLSearchParams(params).toString();
};
