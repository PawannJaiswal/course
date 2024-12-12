// List of resources
const resources = [
    { title: "Mathematics", url: "Maharashtra-board-class-1-Maths-Textbook.pdf", description: "1 Standard" }
];

// Get the resource list container
const resourceList = document.getElementById("resource-list");

// Check if the resources array is empty
if (resources.length === 0) {
    const noResourcesMessage = document.createElement("p");
    noResourcesMessage.textContent = "No resources are available at the moment. Please check back later.";
    noResourcesMessage.style.color = "#555";
    noResourcesMessage.style.fontStyle = "italic";
    noResourcesMessage.style.textAlign = "center";
    resourceList.appendChild(noResourcesMessage);
} else {
    // Populate the resource list dynamically
    resources.forEach(resource => {
        const card = document.createElement("div");
        card.classList.add("resource-card");

        card.innerHTML = `
            <h3>${resource.title}</h3>
            <p>${resource.description}</p>
            <a href="${resource.url}" target="_blank">Download</a>
        `;

        resourceList.appendChild(card);
    });
}
