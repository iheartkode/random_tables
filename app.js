// Store the names in an object for easy access and management
const names = {
    male: [
        "Colstua Gresbut", "Gottu Bworg", "Nbi Feom", "Lagna Brakrect", "Ladel Kron", 
        "Fum Kild", "Dal Nunnkend", "Erakneze Weebeh"
    ],
    female: [
        "Tifa Hunt", "Lana Daggoth", "Trin Secura", "Odala Lowland", "Tahl Tillman", 
        "Araneya Lysscol", "Palaras Spince", "Vorta Dom", "Selan Zeorg", "Selonna Oomomo", 
        "Dia Lipost", "Latia Fett"
    ],
    twilek_male: [
        "Fek Gih", "Olmosh Beileit", "E'zan Ceshudek", "Ponat Gidro", "Irtras Ondan", 
        "Ceohos Gworres", "Iznik Sul", "Chimen Gedrul", "Gepa Sibbees", "Vafro Dar"
    ],
    twilek_female: [
        "Gussum Sartin", "Ze Rasil", "Lu Bumrurat", "Shesdru Faatruck", "Rotvi Timbilaah", 
        "Hothvi Tus", "She Rebbil", "Ruzre Zann", "Dizi Sonn", "Nethra Rat"
    ]
};

// Function to generate a random name from a specific category
function getRandomName(category) {
    const nameList = names[category];
    return nameList[Math.floor(Math.random() * nameList.length)];
}

// Function to copy text to clipboard
function copyToClipboard(text) {
    const tempInput = document.createElement("input");
    tempInput.style.position = "absolute";
    tempInput.style.left = "-9999px";
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert(`Copied: ${text}`);
}

// Event delegation for button clicks and name copying
document.addEventListener("click", function(event) {
    const target = event.target;

    // Check if a name button was clicked
    if (target.matches("[data-category]")) {
        const category = target.dataset.category;
        const element = document.getElementById(`${category}_name`);
        element.textContent = getRandomName(category);
    }

    // Check if a name display element was clicked
    if (target.matches("[data-copy]") && target.textContent) {
        copyToClipboard(target.textContent);
    }

    // Clear button logic
    if (target.id === "clear_button") {
        document.querySelectorAll(".name-display").forEach(el => el.textContent = "");
    }
});
