console.log('JS OK');

/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
*/

// ! OPERAZIONI PRELIMINARI
// Prendo gli elementi dal DOM
const form = document.getElementById('member-form');
const nameField = document.getElementById('name');
const roleField = document.getElementById('role');
const srcField = document.getElementById('src');

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

// ! FUNCTIONS

const renderTeam = () => {
  const rowTeam = document.querySelector('.row');
  rowTeam.innerHTML = '';
  
  const createMemberCard = (currentMember) => {
    const card = `
    <div class="col-xl-4 col-lg-6 col-sm-12 my-4">
      <div class="card h-100 border-0 text-center">
          <img src="${currentMember.image}" alt="${currentMember.name} class="card-img-top rounded-0">
          <h5 class="card-title pt-3">${currentMember.name}</h5>
          <span class="card-text pb-3">${currentMember.role}</span>
      </div>
    </div>
    `;
    return card;
  }
  
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
let content = '';
for (let currentMember of teamMembers){
  // Inserisco contenuti nel DOM
  content += createMemberCard(currentMember);
}

// Stampo in pagina
rowTeam.innerHTML = content;
};

renderTeam();



// ! EVENTI DINAMICI

// Creo un nuovo membri dal form e ri-renderizzo
form.addEventListener('submit', event => {
  // blocco l'invio del form
  event.preventDefault();

  // Recupero i valori dal form
  const name = nameField.value;
  const role = roleField.value;
  const src = srcField.value;

  // Validazione
  if (!name || !role || !src) {
    alert('I campi sono tutti obbligatori');
    return;
  }

  const newMember = { name, role, src };

  teamMembers.push(newMember);
  console.log(teamMembers);

  renderTeam();

});

