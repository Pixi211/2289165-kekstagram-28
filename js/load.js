const createLoader = (onSuccess, onError) => fetch(
  'https://28.javascript.pages.academy/kekstagram/data')
  .then((response) => {
    if (response.ok) {
      return response.json();
    }

    throw new Error(`${response.status} ${response.statusText}`);
  })
  .then((data) => {
    onSuccess(data);
  })
  .catch((err) => {
    onError(err);
  });

const sendData = (onSuccess, onError, body) =>
  fetch(
    'https://28.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body,
    }
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
        return;
      }
      onError();
    })
    .catch(() => {
      onError();
    });

export { sendData, createLoader };
