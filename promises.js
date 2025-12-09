const fetData = new Promise((res, rej) => {
  setTimeout(() => {
    let success = true && true;
    if (success) {
      res("Data fetched successfull");
    } else {
      rej("Error: Failed to fetch data");
    }
  }, 500);
});

fetData
  .then((res) => {
    console.log("response", res);
  })
  .catch((e) => {
    console.error("error231 : ", e);
  })
  .finally(() => {
    console.log("finally");
  });
