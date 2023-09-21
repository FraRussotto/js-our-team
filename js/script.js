//1. Creaiamo l'array con tutti gli oggetti.

const team = [
  {
    firstname: 'Wayne',
    lastname: 'Barnett',
    role: 'Founder & CEO',
    image: '<img src="img/wayne-barnett-founder-ceo.jpg" alt="1">'
  },
  {
    firstname: 'Angela',
    lastname: 'Caroll',
    role: 'Chief Editor',
    image: '<img src="img/angela-caroll-chief-editor.jpg" alt="1">'
  },
  {
    firstname: 'Walter',
    lastname: 'Gordon',
    role: 'Office Manager',
    image: '<img src="img/walter-gordon-office-manager.jpg" alt="1">'
  },
  {
    firstname: 'Angela',
    lastname: 'Lopez',
    role: 'Social Media Manager',
    image: '<img src="img/angela-lopez-social-media-manager.jpg" alt="1">'
  },
  {
    firstname: 'Scott',
    lastname: 'Estrada',
    role: 'Developer',
    image: '<img src="img/scott-estrada-developer.jpg" alt="1">'
  },
  {
    firstname: 'Barbara',
    lastname: 'Ramos',
    role: 'Graphic Ramos',
    image: '<img src="img/barbara-ramos-graphic-designer.jpg" alt="1">'
  },
]

console.log(team)

for(let person of team){
  console.log(person.firstname)
  console.log(person.lastname)
  console.log(person.role)
  console.log(person.image)
}