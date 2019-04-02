const getAllLegos = () => {
    return fetch("http://localhost:8088/legos").then(legoResponse => legoResponse.json());
}