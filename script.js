
const recettes = [
  { nom: 'Poulet au curry', ingredients: 'Poulet, curry, oignon, ail' },
  { nom: 'Salade de betterave', ingredients: 'Betterave, oignon, ail, vinaigre' },
  { nom: 'Tarte aux fruits', ingredients: 'Fruits, pâte à tarte, sucre' }
];

const searchInput = document.getElementById('search');
const recettesList = document.getElementById('recettes');

function afficherRecettes(recettes) {
  recettesList.innerHTML = '';
  recettes.forEach(recette => {
    const li = document.createElement('li');
    li.innerHTML = `
      <h2>${recette.nom}</h2>
      <p>${recette.ingredients}</p>
    `;
    recettesList.appendChild(li);
  });
}

afficherRecettes(recettes);

searchInput.addEventListener('input', () => {
  const search = searchInput.value.toLowerCase();
  const filteredRecettes = recettes.filter(recette => {
    return recette.nom.toLowerCase().includes(search) || recette.ingredients.toLowerCase().includes(search);
  });
  afficherRecettes(filteredRecettes);
});