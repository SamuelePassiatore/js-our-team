console.log('JS OK');

/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
*/

// Prendo gli elementi dal DOM
const test = document.getElementById('test');

// Crea un array di oggetti per rappresentare i membri del team
const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      'url': 'img/wayne-barnett-founder-ceo.jpg'
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      'url': 'img/angela-caroll-chief-editor.jpg'
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      'url': 'img/walter-gordon-office-manager.jpg'
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      'url': 'img/angela-lopez-social-media-manager.jpg'
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      'url': 'img/scott-estrada-developer.jpg'
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      'url': 'img/barbara-ramos-graphic-designer.jpg'
    }
  ];

// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
for (let i = 0; i < team.length; i++){
    const currentMember = team[i];
    console.log(currentMember);

  let member = '<div>';
  test.innerText += `
  <h3>${team[i].name}</h3>
  <p>${team[i].role}</p>
  <img src="${team[i].url}" alt="Foto di ${team[i].name}">
  `
  member = '</div>';
}

