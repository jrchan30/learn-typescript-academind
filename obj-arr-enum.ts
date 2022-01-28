// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Russell',
//   age: 21,
//   hobbies: ['Swimming', 'Learning'],
//   role: [2, 'frontend'],
// };

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}
const person = {
  name: 'Russell',
  age: 21,
  hobbies: ['Swimming', 'Learning'],
  role: Role.ADMIN,
};

person.role === Role.ADMIN ? console.log(person.role) : '';
