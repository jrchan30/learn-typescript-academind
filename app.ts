const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'Russell',
  age: 21,
  hobbies: ['Swimming', 'Learning'],
  role: [2, 'frontend'],
};
for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
