console.log('JS OK');

/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
*/

// ! OPERAZIONI PRELIMINARI
// Prendo gli elementi dal DOM
const rowTeam = document.querySelector('.row');

// ! SVOLGIMENTO
// Crea un array di oggetti per rappresentare i membri del team
const teamMembers = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'img/wayne-barnett-founder-ceo.jpg'
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'img/angela-caroll-chief-editor.jpg'
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'img/walter-gordon-office-manager.jpg'
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'img/angela-lopez-social-media-manager.jpg'
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'img/scott-estrada-developer.jpg'
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'img/barbara-ramos-graphic-designer.jpg'
    }
  ];

// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
let content = '';
for (let i = 0; i < teamMembers.length; i++){
  const currentMember = teamMembers[i];
  // Ciclo for in per stampare in console
  for (let key in currentMember){
    ////console.log(currentMember[key]);
  }
  // Inserisco contenuti nel DOM
  content += `
  <div class="col-xl-4 col-lg-6 col-sm-12 my-4">
    <div class="card h-100 border-0 text-center">
        <img src="${currentMember.image}" alt="${currentMember.name} class="card-img-top rounded-0">
        <h5 class="card-title pt-3">${currentMember.name}</h5>
        <span class="card-text pb-3">${currentMember.role}</span>
    </div>
  </div>
  `;
}
// Stampo in pagina
rowTeam.innerHTML = content;



