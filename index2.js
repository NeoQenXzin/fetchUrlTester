document
  .getElementById("user-id-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    const input = document.querySelector("#userId");
    const userURL = input.value;
    await displayData(userURL);
  });

const displayData = async (userURL) => {
  const dataUser = document.getElementById("data");
  dataUser.innerText = "... LOADING ...";
  try {
    if (userURL) {
      // const response = await fetch(
      //   `https://jsonplaceholder.typicode.com/users/${userURL}`
      // );
      const response = await fetch(`${userURL}`);
      if (!response.ok) {
        throw new Error("Réponse du serveur non valide");
      }
      const data = await response.json();
      dataUser.innerHTML = `
        <h2> Données de l'utilisateur </h2>
        <pre>${JSON.stringify(data, null, 2)}</pre>
      `;
    } else {
      throw new Error("Vous devez entrer un ID");
    }
  } catch (err) {
    console.log("Oups, il y a une erreur :", err.message);
    dataUser.innerHTML = `
      <h2> Erreur </h2>
      <p>${err.message}</p>
    `;
  }
};
