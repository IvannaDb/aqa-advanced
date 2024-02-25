const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 17,
};
person.email = 'john.doe17@test.com';
delete person.age;
console.log(person);
