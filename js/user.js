let jwt = localStorage.getItem("jwt");

console.log("jwt ", jwt);

if (jwt) {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:4001/v1/users");
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
                    temp += "<td>" + itemData.firstName +" "+ itemData.middleName +" "+ itemData.lastName +"</td>";
                    temp += "<td>" + itemData.email + "</td>";
                    temp += "<td>" + itemData.dateOfBirth + "</td>";
                    temp += "<td>" + itemData.gender + "</td>";
                    temp += "<td>" + itemData.city+", "+itemData.state + "</td>";
                    temp += "<td>" + itemData.phone + "</td>";
                    temp += "<td>" + itemData.alternatePhone + "</td></tr>";
                });
                document.getElementById('userTableData').innerHTML = temp;
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