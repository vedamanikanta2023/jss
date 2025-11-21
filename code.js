const userDetails = {
  name: "vedamanikanta",
  age: 26,
  bike: {
    bikeName: "bik2340",
    cc: 140,
  },
};

const copyUserDetails = JSON.parse(JSON.stringify(userDetails));
copyUserDetails.bike.bikeName = "pulsar";
console.log({ userDetails, copyUserDetails });

