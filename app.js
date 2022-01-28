var person = {
    name: 'Russell',
    age: 21,
    hobbies: ['Swimming', 'Learning'],
    role: [2, 'frontend']
};
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
