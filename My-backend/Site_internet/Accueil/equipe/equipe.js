console.log("Le fichier dons.js est chargé !");

// Vérifier si les liens de navigation existent
const navLinks = document.querySelectorAll("a");
if (navLinks.length > 0) {
    navLinks.forEach((link) => {
        link.addEventListener("mouseover", () => {
            link.style.color = "red";
        });
        link.addEventListener("mouseout", () => {
            link.style.color = ""; // Revenir à la couleur d'origine
        });
    });
} else {
    console.log("Aucun lien de navigation trouvé.");
}


document.addEventListener("DOMContentLoaded", () => {
    // Sélectionner tous les paragraphes translatables
    const paragraphs = document.querySelectorAll(".translatable");

    paragraphs.forEach((paragraph) => {
        // Créer un bouton translate pour chaque paragraphe
        const translateButton = document.createElement("button");
        translateButton.textContent = "Translate";
        translateButton.style.marginRight = "10px";

        // Ajouter le bouton avant chaque paragraphe
        paragraph.parentNode.insertBefore(translateButton, paragraph);

        // Variable pour alterner entre l'original et la traduction
        let isTranslated = false;

        // Fonction de traduction au clic
        translateButton.addEventListener("click", () => {
            if (!isTranslated) {
                // Changer vers la traduction
                paragraph.dataset.originalText = paragraph.textContent;
                paragraph.textContent = paragraph.dataset.translation;
                translateButton.textContent = "Original";
            } else {
                // Revenir au texte original
                paragraph.textContent = paragraph.dataset.originalText;
                translateButton.textContent = "Translate";
            }
            isTranslated = !isTranslated;
        });
    });
});




// Création et ajout du bouton email en bas de page
const emailButton = document.createElement("button");
emailButton.textContent = "Contactez-nous : samoyal92200@gmail.com";
emailButton.style.marginTop = "20px";
emailButton.style.display = "block";
emailButton.style.padding = "10px";
emailButton.style.backgroundColor = "#4CAF50";
emailButton.style.color = "white";
emailButton.style.border = "none";
emailButton.style.cursor = "pointer";

emailButton.addEventListener("click", () => {
    window.location.href = "mailto:perunidad.centralesupelec@gmail.com";
});

// Ajout du bouton dans le body
document.body.appendChild(emailButton);


// Création et ajout des boutons réseaux sociaux en bas de page
const socialMediaContainer = document.createElement("div");
socialMediaContainer.style.display = "flex";
socialMediaContainer.style.gap = "10px";
socialMediaContainer.style.marginTop = "10px";

const socialMediaLinks = [
    { name: "Instagram", url: "https://www.instagram.com/perunidad.cs/", icon: "Instagram "+"📷" },
    { name: "Facebook", url: "https://www.facebook.com/Perunidad/", icon: "Facebook "+"📘" },
    { name: "LinkedIn", url: "https://www.linkedin.com/company/perunidad/posts/?feedView=all", icon: "Linkedin "+ "💼" },
];

socialMediaLinks.forEach((media) => {
    const button = document.createElement("button");
    button.textContent = media.icon;
    button.title = media.name;
    button.style.padding = "10px";
    button.style.backgroundColor = "#555";
    button.style.color = "white";
    button.style.border = "none";
    button.style.cursor = "pointer";
    button.style.fontSize = "20px";

    button.addEventListener("click", () => {
        window.open(media.url, "_blank");
    });

    socialMediaContainer.appendChild(button);
});

document.body.appendChild(socialMediaContainer);
