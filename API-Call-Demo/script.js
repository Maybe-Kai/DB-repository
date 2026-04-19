const btn = document.getElementById("fetchBtn");
const output = document.getElementById("output");
const loading = document.getElementById("loading");

// Click event
btn.addEventListener("click", () => {
    output.innerHTML = "";
    loading.textContent = "Loading...";

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json()) // convert to JSON
        .then(data => {
            loading.textContent = "";

            // Display data
            data.forEach(user => {
                const div = document.createElement("div");
                div.classList.add("user");

                div.innerHTML = `
                    <strong>${user.name}</strong><br>
                    ${user.email}
                `;

                output.appendChild(div);
            });
        })
        .catch(error => {
            loading.textContent = "";
            output.textContent = "Error fetching data!";
            console.error(error);
        });
});