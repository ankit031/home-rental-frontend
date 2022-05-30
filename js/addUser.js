let jwt = localStorage.getItem("jwt");

console.log("jwt ", jwt);

function AddUser() {
    console.log("Inside AddUser function");
    let firstName = document.getElementById("firstName").value;
    let middleName = document.getElementById("middleName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let dateOfBirth = document.getElementById("dateOfBirth").value;
    let gender = document.getElementById("gender").value;
    let city = document.getElementById("city").value;
    let district = document.getElementById("district").value;
    let state = document.getElementById("state").value;
    let countryCode = document.getElementById("countryCode").value;
    let phone = document.getElementById("phone").value;
    let alternatePhone = document.getElementById("alternatePhone").value;

    let obj = {
        "firstName": firstName,
        "middleName": middleName,
        "lastName": lastName,
        "dateOfBirth": dateOfBirth,
        "gender": gender,
        "countryCode": countryCode,
        "state": state,
        "district": district,
        "city": city,
        "phone": phone,
        "alternatePhone": alternatePhone,
        "email": email,
        "role": "renter"
    }

    console.log("obj ", obj);
    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:4001/v1/users");
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify(obj));
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            const objects = JSON.parse(this.responseText);
            console.log("objects ", objects);
            if (objects) {
                console.log("inside objects['status'] ", objects);
                document.getElementById("userForm").reset();

                window.location.href = './Users.html';

                // Swal.fire({
                //   text: objects['message'],
                //   icon: 'success',
                //   confirmButtonText: 'OK'
                // }).then((result) => {
                //   if (result.isConfirmed) {
                //     window.location.href = './index.html';
                //   }
                // });
            } else {
                // Swal.fire({
                //   text: objects['message'],
                //   icon: 'error',
                //   confirmButtonText: 'OK'
                // });
            }
        }
    };
    return false;
}

function cancel() {
    document.getElementById("userForm").reset();
    window.location.href = './Users.html';
}