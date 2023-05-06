class ApiRef {
  async login(url = "", values) {
    // const data = {};
    // data.level = level;
    // data.type = type;
    // console.log('test');
    let formData = new FormData();
    formData.append("pseudo", values.pseudo);
    formData.append("password", values.password);
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        // 'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      // body: JSON.stringify(data) // body data type must match "Content-Type" header
      body: formData,
    });
    //   return response.json(); // parses JSON response into native JavaScript objects
    // console.log(await response.json());
    const json = await response.json();
    // await console.log(json);

    return json.data;
  }
}

export const apiRef = new ApiRef();
