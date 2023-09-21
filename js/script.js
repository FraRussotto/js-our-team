//1. Creaiamo l'array con tutti gli oggetti.

const team = [
  {
    firstname: 'Wayne',
    lastname: 'Barnett',
    role: 'Founder & CEO',
    image: 'img/wayne-barnett-founder-ceo.jpg'
  },
  {
    firstname: 'Angela',
    lastname: 'Caroll',
    role: 'Chief Editor',
    image: 'img/angela-caroll-chief-editor.jpg'
  },
  {
    firstname: 'Walter',
    lastname: 'Gordon',
    role: 'Office Manager',
    image: 'img/walter-gordon-office-manager.jpg'
  },
  {
    firstname: 'Angela',
    lastname: 'Lopez',
    role: 'Social Media Manager',
    image: 'img/angela-lopez-social-media-manager.jpg'
  },
  {
    firstname: 'Scott',
    lastname: 'Estrada',
    role: 'Developer',
    image: 'img/scott-estrada-developer.jpg'
  },
  {
    firstname: 'Barbara',
    lastname: 'Ramos',
    role: 'Graphic Designer',
    image: 'img/barbara-ramos-graphic-designer.jpg'
  },
]

console.log(team)

//2. Print dell'array in console.

// for(let person of team){
//   console.log(person.firstname)
//   console.log(person.lastname)
//   console.log(person.role)
//   console.log(person.image)
//   console.log('------------------')
// }

//3. Inserire gli oggetti all'interno di una card bootstrap creando una funziona.


  for(let person of team){
    newCard(person)

  }

//4. Creare un funziona che man mano ricrei la card.

function newCard(object){
  const col = document.createElement('div');
  col.className = 'col';

  const cardContent = document.createElement('div');
  cardContent.className = 'card-body card card_Content my-3';
  col.append(cardContent)

  const img = document.createElement('img');
  img.src = object.image;
  cardContent.append(img)

  const textBox = document.createElement('div');
  textBox.className = 'card-text';
  cardContent.append(textBox)

  const name = document.createElement('h3')
  name.innerHTML = `${object.firstname} ${object.lastname}`;
  textBox.append(name);

  const role = document.createElement('p')
  role.innerHTML = `${object.role}`;
  textBox.append(role);

  const mainContainer = document.querySelector('.row')
  mainContainer.append(col)

  
}

