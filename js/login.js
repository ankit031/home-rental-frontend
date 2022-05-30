let jwt = localStorage.getItem("jwt");
if (jwt != null) {
  window.location.href = './view.html'
}

function login() {
    console.log("Inside login function");
  const username = document.getElementById("email").value;
  console.log("username ",username);

  const password = document.getElementById("password").value;
  console.log("password ",password);

  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://localhost:4001/v1/auth/login");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(JSON.stringify({
    "email": username,
    "password": password
  }));
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
      const objects = JSON.parse(this.responseText);
      console.log("objects ",objects);
      if (objects['user']) {
          console.log("inside objects['status'] ",objects['status'])
        localStorage.setItem("jwt", objects['tokens']['access']['token']);
        console.log("objects['tokens']['access']['token'] ",objects['tokens']['access']['token']);
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