

// 1



const btnOne = document.querySelector("[data-btnOne]");
const formOne = document.querySelector("[data-formOne]");
formOne.addEventListener("input", (e) => {
    e.currentTarget
    const awakeEl = form.elements.aweke.value.trim();
    const cleaneEl = form.elements.clean.value.trim();
    const exerciseEl = form.elements.exercise.value.trim();

    const menu = {
        task1: awakeEl,
        task2: cleaneEl,
        task3: exerciseEl,
    };

    localStorage.setItem("menu", JSON.stringify(menu));



});


// 2

const form = document.querySelector("[data-form]");
const btn = document.querySelector("[data-btn]");

const localStorageKey = "userInfo";


form.addEventListener("input", (e) => {
    const userName = form.elements.userName.value.trim();
    const userSurname = form.elements.userSurname.value.trim();
    const userEmail = form.elements.userEmail.value.trim();
    const userTel = form.elements.userTel.value.trim();
    const comment = form.elements.comment.value.trim();

    const info = {
        name: userName,
        surname: userSurname,
        email: userEmail,
        tel: userTel,
        comment
    };

    const zipInfo = JSON.stringify(info);
    localStorage.setItem(localStorageKey, zipInfo);
    
});

function getFromLocalStorage() {
    const dataLocalStorage = localStorage.getItem(localStorageKey);
    const parseData = JSON.parse(dataLocalStorage);

    form.elements.userName.value = parseData?.name || "";
    form.elements.userSurname.value = parseData?.surname || "";
    form.elements.userEmail.value = parseData?.email || "";
    form.elements.userTel.value = parseData?.tel || "";
    form.elements.comment.value = parseData?.comment || "";
};

getFromLocalStorage();


// 3

const page = document.querySelector("[data-page]");
const page1 = document.querySelector("[data-page1]");
const page2 = document.querySelector("[data-page2]");
const page3 = document.querySelector("[data-page3]");

const closeEl = document.querySelector("[data-close]");
const close1 = document.querySelector("[data-close1]");
const close2 = document.querySelector("[data-close2]");
const close3 = document.querySelector("[data-close3]");

closeEl.addEventListener("click", () => {
    const pageSave = page.style.display = "none";
    localStorage.setItem("pageSave", JSON.stringify(pageSave));
});

close1.addEventListener("click", () => {
    const pageSave1 = page1.style.display = "none";
    localStorage.setItem("pageSave1", JSON.stringify(pageSave1));
});

close2.addEventListener("click", () => {
    const pageSave2 = page2.style.display = "none";
    localStorage.setItem("pageSave2", JSON.stringify(pageSave2));
});

close3.addEventListener("click", () => {
    const pageSave3 = page3.style.display = "none";
    localStorage.setItem("pageSave3", JSON.stringify(pageSave3));
});

// 4
const btnFin = document.querySelector("[data-btnFin]");

const formFin = document.querySelector("[data-fin]");

formFin.addEventListener("input", () => {
    const nameUs = form.elements.nameUs.value.trim();
    const surNameUs = form.elements.surnNameUs.value.trim();
    const telUs = form.elements.telUs.value.trim();
    const emailUs = form.elements.emailUs.value.trim();
    const adresUs = form.elements.adresUs.value.trim();

    const user = {
        nameUs: nameUs,
        surNameUs: surNameUs,
        telUs: telUs,
        emailUs: emailUs,
        adresUs: adresUs,
    };
    localStorage.setItem("user", JSON.stringify(user));
    
});
