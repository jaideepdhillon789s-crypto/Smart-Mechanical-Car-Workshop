function show(id) {
    document.querySelectorAll("section").forEach(section => {
        section.classList.remove("active");
    });
    document.getElementById(id).classList.add("active");
}

let services = [
    { name: "Engine Repair", price: 6000 },
    { name: "Brake Service", price: 4000 },
    { name: "Oil Change", price: 1500 },
    { name: "Wheel Alignment", price: 3000 },
    { name: "AC Repair", price: 3500 },
    { name: "Battery Replacement", price: 4000 }
];

let serviceList = document.getElementById("serviceList");
let total = document.getElementById("total");
let sum = 0;

services.forEach((service, index) => {
    let div = document.createElement("div");
    div.innerHTML = `
        <input type="checkbox" id="s${index}">
        <b>${service.name}</b><br>
        ₹${service.price}
    `;
    serviceList.appendChild(div);

    document.getElementById(`s${index}`).addEventListener("change", function () {
        if (this.checked) {
            sum += service.price;
        } else {
            sum -= service.price;
        }
        total.innerText = sum;
    });
});

let mechanics = [
    {
        name: "ravjit Kumar",
        exp: 8,
        spec: "Engine",
        cert: "Engine Specialist Certified",
        img: "https://static.vecteezy.com/system/resources/previews/006/948/116/non_2x/portrait-of-smiling-male-mechanic-technician-holding-wrench-in-arms-crossed-at-auto-garage-repair-and-maintenance-career-after-service-checking-car-damage-broken-part-free-photo.jpg"
    },
    {
        name: "Amrit Singh",
        exp: 5,
        spec: "Brake",
        cert: "Brake System Certified",
        img: "https://preppy.org/wp-content/uploads/2023/04/how-to-become-a-diesel-mechanic-scaled.jpg"
    },
    {
        name: "Sorav Pandey",
        exp: 9,
        spec: "AC",
        cert: "AC Repair Certified",
        img: "https://img.freepik.com/free-photo/smiling-mechanic-with-arms-crossed-spanner_1170-1699.jpg"
    },
    {
        name: "Grorav Thakur",
        exp: 8,
        spec: "Oil Change",
        cert: "Oil change system Certified",
        img: "https://img.freepik.com/premium-photo/indian-happy-auto-mechanic-blue-suit-cap_466689-24405.jpg"
    },
    {
        name: "Sunil Sharma",
        exp: 8,
        spec: "Wheel Alignment",
        cert: "Wheel Alignment system Certified",
        img: "https://static.vecteezy.com/system/resources/thumbnails/047/384/862/original/portrait-of-positive-indian-mechanic-standing-with-tablet-near-broken-car-with-open-hood-in-a-car-repair-shop-video.jpg"
    },
    {
        name: "Kashar Kumar",
        exp: 10,
        spec: "Battery Replacement",
        cert: "Battery Replacement Specialist Certified",
        img: "https://img.freepik.com/premium-photo/indian-motor-mechanic-workshop-looking-camera-with-smile_466689-96432.jpg?w=740"
    }
];

let mech = document.getElementById("mech");

function render(data) {
    mech.innerHTML = "";
    data.forEach(m => {
        mech.innerHTML += `
            <div class="mechanic-card">
                <img src="${m.img}">
                <h3>${m.name}</h3>
                <p><b>Experience:</b> ${m.exp} Years</p>
                <p><b>Specialization:</b> ${m.spec}</p>
                <span class="badge">${m.cert}</span>
            </div>
        `;
    });
}

function filter(type) {
    if (type === "All") {
        render(mechanics);
    } else {
        render(mechanics.filter(m => m.spec === type));
    }
}

render(mechanics);

document.getElementById("bookform").addEventListener("submit", function (e) {
    e.preventDefault();
    let serviceType = document.getElementById("stype").value;
    let finalAmount = serviceType === "Express" ? sum + 1000 : sum;
    document.getElementById("summary").innerText =
        "Total Amount: ₹" + finalAmount;
});

let contactForm = document.getElementById("contactForm");
let sendBtn = document.getElementById("send");

contactForm.addEventListener("input", function () {
    sendBtn.disabled = !contactForm.checkValidity();
});
