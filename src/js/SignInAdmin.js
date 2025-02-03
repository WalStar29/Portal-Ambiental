const predefinedUsers = [
    {
        username: "usuario1",
        password: "contrasenia1",
        redirectUrl: "https://walstar29.github.io/Portal-Ambiental/main/"
    },
    {
        username: "usuario2",
        password: "contrasenia2",
        redirectUrl: "https://walstar29.github.io/Portal-Ambiental/researchProjects/"
    },
    {
        username: "usuario3",
        password: "contrasenia3",
        redirectUrl: "https://walstar29.github.io/Portal-Ambiental/counsellorForum/"
    },
    {
        username: "usuario4",
        password: "contrasenia4",
        redirectUrl: "https://walstar29.github.io/Portal-Ambiental/adminHome/"
    }
];

document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores ingresados por el usuario
    const username = document.getElementById('user').value;
    const password = document.getElementById('contrasenia').value;

    // Validar los datos ingresados
    const user = predefinedUsers.find(user => user.username === username && user.password === password);

    if (user) {
        document.getElementById('message').textContent = "Inicio de sesión exitoso.";
        // Redirigir a otra página
        window.location.href = user.redirectUrl;
    } else {
        document.getElementById('message').textContent = "Usuario o contraseña incorrectos.";
    }
});
