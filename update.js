// **************************************
//        UPDATING HASKELL LANGUAGE
// **************************************

// The information for Haskell is missing some data, it should actually be:
//
// Language: Haskell Inventor(s): Lennart Augustsson, Dave Barton, Brian Boutel, Warren Burton, Joseph Fasel, Kevin Hammond, Ralf Hinze, Paul Hudak, John Hughes, Thomas Johnsson, Mark Jones, Simon Peyton Jones, John Launchbury, Erik Meijer, John Peterson, Alastair Reid, Colin Runciman, Philip Wadler First appeared: 1990 Paradigm(s): functional, imperative, lazy/non-strict, modular Typing discipline: static, strong, inferred

var language = {
  name: 'Haskell',
  inventors: [
    'Lennart Augustsson',
    'Dave Barton',
    'Brian Boutel',
    'Warren Burton',
    'Joseph Fasel',
    'Kevin Hammond',
    'Ralf Hinze',
    'Paul Hudak',
    'John Hughes',
    'Thomas Johnsson',
    'Mark Jones',
    'Simon Peyton Jones',
    'John Launchbury',
    'Erik Meijer',
    'John Peterson',
    'Alastair Reid',
    'Colin Runciman',
    'Philip Wadler'
  ],
  firstAppeared: 1990,
  paradigms: [
    'functional',
    'imperative',
    'lazy/non-strict',
    'modular'
  ],
  typingDiscipline: [
    'static',
    'strong',
    'inferred'
  ]
};

db.languages.update({
  _id: ObjectId("584ed6822eb66e8b9e10d132")
}, language);

// The above data actually had a couple of factual mistakes. Write an update statement with the $set statement to fix them:

// Brandon Eich is actually spelled "Brendan Eich".

var modifyInventors = {
  inventors: [
    'Brendan Eich'
  ]
};

db.languages.update({
  _id: ObjectId("584ecc692eb66e8b9e10d12e")
}, {
  $set: modifyInventors
});

// The Closure programming language is actually spelled "Clojure".''

var modifyName = {
  name: 'Clojure'
};

db.languages.update({
  _id: ObjectId("584ecca32eb66e8b9e10d131")
}, {
  $set: modifyName
});
