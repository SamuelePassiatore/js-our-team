console.log('JS OK');

/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
*/

// Prendo gli elementi dal DOM
const row = document.querySelector('.row');

// Crea un array di oggetti per rappresentare i membri del team
const team = [
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
for (let i = 0; i < team.length; i++){
    const currentMember = team[i];
    console.log(currentMember);
  content += `
  <div class="col-4 my-4">
    <div class="card h-100 border-0 text-center">
        <img src="${team[i].image}" alt="Foto di ${team[i].name} class="card-img-top rounded-0">
        <h5 class="card-title pt-2">${team[i].name}</h5>
        <span class="card-text">${team[i].role}</span>
    </div>
  </div>
  `
}
  row.innerHTML = content;



