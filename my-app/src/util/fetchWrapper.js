export function fetchWrapper(
    url,
    method,
    payload
) {
    return fetch(url)
        .then(result => {
            if (result.status === 200) {
                return Promise.resolve(result.json());
            }
            else {
                return Promise.reject(result);
            }
        })
        .catch(error => {
            //handle global error, create global error component
            console.log(error);
        });
}