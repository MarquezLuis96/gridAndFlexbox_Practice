let beasts = [
    {
        name: "Thunderbird",
        img: "../../images/beasts/Tunderbird.jpg",
        desc: "Cuando se siente en peligro vuela muy alto y es capaz crear tormentas eléctricas."
    },
    {
        name: "Occamy",
        img: "../../images/beasts/occamy.jpg",
        desc: "Puede volar y cambiar de tamaño. Es muy agresivo, en especial si percibe que son una amenaza para sus huevos."
    },
    {
        name: "Escarbato",
        img: "../../images/beasts/Niffler.jpg",
        desc: "Amigable, de un sedoso pelaje negro y un hocico largo. Si te descuidas te puede dejar tus bolsillos vacíos."
    }
];


document.getElementById('Thunderbird').addEventListener('click', function() {
    document.getElementById('nombre').innerHTML = "Thunderbird";
    document.getElementById('imagen').innerHTML = '<img src="./Source/Images/beasts/Tunderbird.jpg" alt="Thunderbird"/>';
    document.getElementById('info').innerHTML = "<p>Cuando se siente en peligro vuela muy alto y es capaz crear tormentas eléctricas.</p>";
});

document.getElementById('Occamy').addEventListener('click', function() {
    document.getElementById('nombre').innerHTML = "Occamy";
    document.getElementById('imagen').innerHTML = '<img src="./Source/Images/beasts/occamy.jpg" alt="Occamy"/>';
    document.getElementById('info').innerHTML = "<p>Puede volar y cambiar de tamaño. Es muy agresivo, en especial si percibe que son una amenaza para sus huevos.</p>";
});

document.getElementById('Escarbato').addEventListener('click', function() {
    document.getElementById('nombre').innerHTML = "Escarbato";
    document.getElementById('imagen').innerHTML = '<img src="./Source/Images/beasts/Niffler.jpg" alt="Niffler"/>';
    document.getElementById('info').innerHTML = "<p>Amigable, de un sedoso pelaje negro y un hocico largo. Si te descuidas te puede dejar tus bolsillos vacíos.</p>";
});