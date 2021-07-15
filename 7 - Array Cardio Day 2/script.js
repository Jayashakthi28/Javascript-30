const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  // Some and Every Checks
  // Array.prototype.some() // is at least one person 19 or older?
  const atleast_19=people.some(data => {
      return (new Date().getFullYear()-data.year)>=19;
    });
  console.table(atleast_19);
  // Array.prototype.every() // is everyone 19 or older?
const every_19=people.every(data => {
    return (new Date().getFullYear()-data.year)>=19;
})
console.table(every_19);
  // Array.prototype.find()
  // Find is like filter, but instead returns just the one you are looking for
  // find the comment with the ID of 823423
const finder=comments.find(data => {
    return (data.id===823423);
});
console.table(finder);
  // Array.prototype.findIndex()
  // Find the comment with this ID
  const find_index=comments.findIndex(data => {
      return (data.id===823423);
  });
  console.log(find_index);
  // delete the comment with the ID of 823423
console.table(comments);
comments.splice(find_index,1);
console.table(comments);