function setActive(name) {
    Array.from(document.querySelectorAll("#sidebar>button")).forEach(button => {
        if (button.id === name) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });

    document.querySelector("#content").innerHTML = CONTENT[name];
}

function init() {
    Object.keys(CONTENT).forEach(category => {
        let button = document.createElement("button");

        button.id = category;
        button.innerText = category.charAt(0).toUpperCase() + category.slice(1);
        button.addEventListener("click", () => setActive(category));

        document.querySelector("#sidebar").appendChild(button);
    });

    setActive(DEFAULT);
}

window.addEventListener("DOMContentLoaded", init);