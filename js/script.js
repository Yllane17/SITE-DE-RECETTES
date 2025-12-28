
const recettes = [
  {
    nom: 'Poulet au curry',
    ingredients: ['Poulet', 'Curry', 'Oignon', 'Ail'],
    preparation: [
      'Coupez le poulet en morceaux.',
      'Faites revenir l\'oignon et l\'ail dans une poêle.',
      'Ajoutez le poulet et le curry, laissez cuire 20 minutes.'
    ]
  },
  {
    nom: 'Salade de betterave',
    ingredients: ['Betterave', 'Oignon', 'Ail', 'Vinaigre'],
    preparation: [
      'Faites cuire la betterave à l\'eau.',
      'Épincelez l\'oignon et l\'ail.',
      'Mélangez avec le vinaigre et servez.'
    ]
  },
  {
    nom: 'Tarte aux fruits',
    ingredients: ['Fruits', 'Pâte à tarte', 'Sucre'],
    preparation: [
      'Étalez la pâte à tarte.',
      'Ajoutez les fruits et le sucre.',
      'Faites cuire au four à 180°C pendant 30 minutes.'
    ]
  },
  {
    nom: 'Soupe de légumes',
    ingredients: ['Légumes', 'Eau', 'Sel', 'Poivre'],
    preparation: [
      'Faites cuire les légumes dans l\'eau.',
      'Ajoutez le sel et le poivre.',
      'Mixez et servez chaud.'
    ]
  }
];

const searchInput = document.getElementById('search');
const recettesList = document.getElementById('recettes');

function afficherRecettes(recettes) {
  recettesList.innerHTML = '';
  recettes.forEach(recette => {
    const li = document.createElement('li');
    li.innerHTML = `
      <h2>${recette.nom}</h2>
      <p><strong>Ingrédients :</strong> ${recette.ingredients.join(', ')}</p>
      <p><strong>Préparation :</strong></p>
      <ul>
        ${recette.preparation.map(etape => `<li>${etape}</li>`).join('')}
      </ul>
    `;
    recettesList.appendChild(li);
  });
}

afficherRecettes(recettes);

searchInput.addEventListener('input', () => {
  const search = searchInput.value.toLowerCase();
  const filteredRecettes = recettes.filter(recette => {
    return recette.nom.toLowerCase().includes(search) || recette.ingredients.join(' ').toLowerCase().includes(search);
  });
  afficherRecettes(filteredRecettes);
});