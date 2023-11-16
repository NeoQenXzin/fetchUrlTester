const form = document.getElementById("user-id-form");

const onSubmit = (e) => {
  // Empêcher le refresh de la page
  e.preventDefault();

  // Récupérer le userId de l'input
  const userId = e.target.userId.value;

  const dataDiv = document.getElementById("data");
  // Effacer les contenus précédents de dataDiv
  while (dataDiv.firstChild) {
    dataDiv.removeChild(dataDiv.firstChild);
  }

  // Si aucun userId, afficher un message d'erreur.
  if (!userId) {
    const errorMsg = document.createElement("p");
    errorMsg.textContent = "Erreur : Veuillez fournir un ID valide.";
    dataDiv.appendChild(errorMsg);
    return;
  }

  // Afficher "Loading..." pendant que la requête est en cours
  const loadingMsg = document.createElement("p");
  loadingMsg.textContent = "Loading...";
  dataDiv.appendChild(loadingMsg);

  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Resource not found");
      }
      return response.json();
    })
    .then((data) => {
      // Afficher le résultat dans le wrapper
      const nameDiv = document.createElement("div");
      nameDiv.className = "item";
      nameDiv.textContent = `Name: ${data.name}`;
      dataDiv.appendChild(nameDiv);

      const emailDiv = document.createElement("div");
      emailDiv.className = "item";
      emailDiv.textContent = `Email: ${data.email}`;
      dataDiv.appendChild(emailDiv);

      const phoneDiv = document.createElement("div");
      phoneDiv.className = "item";
      phoneDiv.textContent = `Phone: ${data.phone}`;
      dataDiv.appendChild(phoneDiv);
    })
    .catch((error) => {
      // Si la ressource n'existe pas ou s'il y a une autre erreur, afficher un message d'erreur dans le wrapper
      const errorMsg = document.createElement("p");
      errorMsg.textContent = `Error: ${error.message}`;
      dataDiv.appendChild(errorMsg);
    })
    .finally(() => {
      // Effacer le message "Loading..."
      dataDiv.removeChild(loadingMsg);
    });
};

form.addEventListener("submit", onSubmit);
