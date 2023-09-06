const formulario = document.getElementById("miForm");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(formulario);

    fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: formData,
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Error en la solicitud");
        }
        return response.json(); 
    })
    .then(data => {
        console.log("Respuesta del servidor:", data);
    })
    .catch(error => {
        console.error("Error en la solicitud:", error);
    });
});

console.log(event);