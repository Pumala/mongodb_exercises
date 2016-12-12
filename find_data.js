// 1. Find a programming language by its object ID.
// below I am finding the language Haskell

db.languages.find({
  _id: ObjectId("584ecc952eb66e8b9e10d130")
});

// 2. Find all object-oriented programming languages.
// querying - substring matching

db.languages.find({
  paradigms: /object-oriented.*/
});

// 3. Find all functional programming languages.
db.languages.find({
  paradigms: "functional"
});

// 4. Find all programming languages that have "duck-typing".
db.languages.find({
  typingDiscipline: "duck"
});

// 5. Find all programming languages that have static-typing.
db.languages.find({
  typingDiscipline: "static"
});

// 6. Find all programming languages with strong-typing.
db.languages.find({
  typingDiscipline: "strong"
});

// 7. Find programming languages that are more that are more than 10 years old.
// here we use less than instead of greater than because less than gives us past years
db.languages.find({
  firstAppeared: { $lt: 1996 }
});

// 8. Find a programming language by name.
// below we find the JavaScript language
db.languages.find({
  name: "JavaScript"
});

// 9. Find all programming languages invented by Simon Peyton Jones.
db.languages.find({
  inventors: "Simon Peyton Jones"
});

// 10. Find all object-oriented programming languages created in the 90s.
db.languages.find({
  $and: [
    {
      paradigms: /object-oriented.*/
    },
    {
      firstAppeared: {
        $gt: 1990
      }
    },
    {
      firstAppeared: {
        $lt: 2000
      }
    }
  ]
});

// 11. Find all object-oriented programming languages that use duck-typing.
db.languages.find({
  $and: [
    {
      paradigms: /object-oriented.*/
    },
    {
      typingDiscipline: "duck"
    }
  ]
});

// Find all functional programming languages that are also object-oriented.
db.languages.find({
  $and: [
    {
      paradigms: "functional"
    },
    {
      paradigms: /object-oriented.*/
    }
  ]
});
