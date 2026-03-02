const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("abrir");
});

menu.addEventListener("click", (e) => {
    e.stopPropagation();
});

document.addEventListener("click", () => {
    menu.classList.remove("abrir");
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        menu.classList.remove("abrir");
    }
});

const diasSemana = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
];

const meses = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro"
];

const hoje = new Date();
const diaSemana = diasSemana[hoje.getDay()];
const dia = hoje.getDate();
const mes = meses[hoje.getMonth()];
const ano = hoje.getFullYear();

const dataFormatada = `${diaSemana}, ${dia} de ${mes} de ${ano}`;

document.getElementById("dataAtual").textContent = dataFormatada;