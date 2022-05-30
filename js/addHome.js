let jwt = localStorage.getItem("jwt");

console.log("jwt ", jwt);

function addHome() {
    console.log("Inside addHome function");
    let title = document.getElementById("title").value;
    let locality = document.getElementById("locality").value;
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    let district = document.getElementById("district").value;
    let countryCode = document.getElementById("countryCode").value;
    let sqft = document.getElementById("sqft").value;
    let type = document.getElementById("type").value;
    let isCctv = (document.getElementById("isCctv").value === "true");
    console.log("isCctv ", isCctv);
    let isSecurityGuard = (document.getElementById("isSecurityGuard").value === "true");
    console.log("isSecurityGuard ", isSecurityGuard);
    let isFireExtinguisher = (document.getElementById("isFireExtinguisher").value === "true");
    console.log("isFireExtinguisher ", isFireExtinguisher);
    let isBathroomToiletCombined = (document.getElementById("isBathroomToiletCombined").value === "true");
    console.log("isBathroomToiletCombined ", isBathroomToiletCombined);
    let isBalcony = (document.getElementById("isBalcony").value === "true");
    console.log("isBalcony ", isBalcony);
    let isVacant = (document.getElementById("isVacant").value === "true");
    console.log("isVacant ", isVacant);
    
    let bathroomQty = parseInt(document.getElementById("bathroomQty").value);
    console.log("bathroomQty ", bathroomQty);
    let balconyQty = parseInt(document.getElementById("balconyQty").value);
    console.log("balconyQty ", balconyQty);
    let vacantDate = new Date(document.getElementById("vacantDate").value);
    console.log("vacantDate ", vacantDate);

    let obj = {
        "title": title,
        "locality": locality,
        "city": city,
        "state": state,
        "district": district,
        "countryCode": countryCode,
        "sqft": sqft,
        "type": type,
        "isCctv": isCctv,
        "isSecurityGuard": isSecurityGuard,
        "isFireExtinguisher": isFireExtinguisher,
        "isBathroomToiletCombined": isBathroomToiletCombined,
        "bathroomQty": bathroomQty,
        "isBalcony": isBalcony,
        "balconyQty": balconyQty,
        "isVacant": isVacant,
        "vacantDate": vacantDate
    }
    console.log("obj ",obj);
    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:4001/v1/homes");
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.setRequestHeader("Authorization", `Bearer ${jwt}`);
    xhttp.send(JSON.stringify(obj));
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            const objects = JSON.parse(this.responseText);
            console.log("objects ", objects);
            if (objects) {
                console.log("inside objects ", objects)
                // localStorage.setItem("jwt", objects['tokens']['access']['token']);
                // console.log("objects['tokens']['access']['token'] ", objects['tokens']['access']['token']);
                document.getElementById("homeform").reset();
                window.location.href = './view.html';

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
                window.location.href = './view.html';

                console.log("inside home else");
                // window.location.href = './index.html';

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
    document.getElementById("homeform").reset();
    window.location.href = './view.html';
}