const users = [
  { name: 'Alice', age: 17, email: 'alice@example.com' },
  { name: 'Mary', age: 19, email: 'mary@example.com' },
  { name: 'Lisa', age: 21, email: 'lisa@example.com' },
];
for (const { name, age, email } of users) {
  console.log(`Name: ${name}; age: ${age}; email: ${email}`);
}
