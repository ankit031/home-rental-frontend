let jwt = localStorage.getItem("jwt");

console.log("jwt ", jwt);

if (jwt) {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:4001/v1/homes");
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.setRequestHeader("Authorization", `Bearer ${jwt}`);
    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            const objects = JSON.parse(this.responseText);
            console.log("objects ", objects);
            if (objects['results'] && objects['results'].length) {
                console.log("inside objects['results'] ", objects['results'])
                // window.location.href = './index.html';

                var temp = "";
                objects.results.forEach((itemData) => {
                    temp += "<tr>";
                    temp += `  <td>
                        <span class="custom-checkbox">
                            <input type="checkbox" id="checkbox1" name="options[]" value="1">
                            <label for="checkbox1"></label>
                        </span>
                    </td>`;
                    temp += "<td>" + itemData.title + "</td>";
                    temp += "<td>" + itemData.locality + "</td>";
                    temp += "<td>" + itemData.type + "</td>";
                    temp += "<td>" + itemData.sqft + "</td>";
                    temp += "<td>" + itemData.isCctv + "</td>";
                    temp += "<td>" + itemData.isSecurityGuard + "</td>";
                    temp += "<td>" + itemData.isFireExtinguisher + "</td>";
                    temp += "<td>" + itemData.isBathroomToiletCombined + "</td>";
                    temp += "<td>" + itemData.bathroomQty + "</td>";
                    temp += "<td>" + itemData.isVacant + "</td>";
                    temp += "<td>" + itemData.vacantDate + "</td></tr>";
                });
                document.getElementById('homeTableData').innerHTML = temp;
            } else {
                console.log("Inside home else part");
                localStorage.removeItem("jwt");
                window.location.href = './index.html';

                // Swal.fire({
                //   text: objects['message'],
                //   icon: 'error',
                //   confirmButtonText: 'OK'
                // });
            }
        }
    };
} else {
    window.location.href = './index.html';

}

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
    console.log("isBalcony ", vacaisBalconyntDate);
    let isVacant = (document.getElementById("isVacant").value === "true");
    console.log("isVacant ", isVacant);
    
    let bathroomQty = document.getElementById("bathroomQty").value;
    console.log("bathroomQty ", bathroomQty);
    let balconyQty = document.getElementById("balconyQty").value;
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
        "isBathroomToiletCombined": trisBathroomToiletCombinedue,
        "bathroomQty": bathroomQty,
        "isBalcony": isBalcony,
        "balconyQty": balconyQty,
        "isVacant": isVacant,
        "vacantDate": vacantDate
    }
    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:4001/v1/homes");
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.setRequestHeader("Authorization", `Bearer ${jwt}`);
    xhttp.send(JSON.stringify(obj));
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            const objects = JSON.parse(this.responseText);
            console.log("objects ", objects);
            if (objects['results']) {
                console.log("inside objects['results'] ", objects)
                // localStorage.setItem("jwt", objects['tokens']['access']['token']);
                // console.log("objects['tokens']['access']['token'] ", objects['tokens']['access']['token']);
                // window.location.href = './view.html';

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
                // window.location.href = './view.html';

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
    // return false;
}
