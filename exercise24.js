const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

const [id, name, surname, old] = Object.values(person);
console.log(id, name, surname, old);
