var language = {
  name: 'Python',
  inventors: [
    'Guido van Rossum'
  ],
  firstAppeared: 1991,
  paradigms: [
    'object-oriented',
    'imperative',
    'functional',
    'procedural',
    'reflective'
  ],
  typingDiscipline: [
    'duck',
    'dynamic',
    'strong',
    'gradual'
  ]
};

db.languages.insert(language);

var language = {
  name: 'JavaScript',
  inventors: [
    'Brandon Eich'
  ],
  firstAppeared: 1995,
  paradigms: [
    'scripting',
    'object-oriented (prototype-based)',
    'imperative',
    'functional',
    'event-driven'
  ],
  typingDiscipline: [
    'duck',
    'dynamic'
  ]
};

db.languages.insert(language);

var language = {
  name: 'Java',
  inventors: [
    'James Gosling'
  ],
  firstAppeared: 1995,
  paradigms: [
    'object-oriented (class-based)',
    'structured',
    'imperative',
    'generic',
    'reflective',
    'concurrent'
  ],
  typingDiscipline: [
    'static',
    'strong',
    'safe',
    'nominative',
    'manifest'
  ]
};

db.languages.insert(language);

var language = {
  name: 'Haskell',
  inventors: [
    'Simon Peyton Jones'
  ]
};

db.languages.insert(language);

var language = {
  name: 'Closure',
  inventors: [
    'Rich Hickey'
  ],
  paradigms: [
    'functional'
  ],
  typingDiscipline: [
    'dynamic',
    'strong'
  ]
};

db.languages.insert(language);

// **************************************
// Pretty-fied
// **************************************

> db.languages.find().pretty();
{
	"_id" : ObjectId("584ecc552eb66e8b9e10d12d"),
	"name" : "Python",
	"inventors" : [
		"Guido van Rossum"
	],
	"firstAppeared" : 1991,
	"paradigms" : [
		"object-oriented",
		"imperative",
		"functional",
		"procedural",
		"reflective"
	],
	"typingDiscipline" : [
		"duck",
		"dynamic",
		"strong",
		"gradual"
	]
}
{
	"_id" : ObjectId("584ecc692eb66e8b9e10d12e"),
	"name" : "JavaScript",
	"inventors" : [
		"Brandon Eich"
	],
	"firstAppeared" : 1995,
	"paradigms" : [
		"scripting",
		"object-oriented (prototype-based)",
		"imperative",
		"functional",
		"event-driven"
	],
	"typingDiscipline" : [
		"duck",
		"dynamic"
	]
}
{
	"_id" : ObjectId("584ecc802eb66e8b9e10d12f"),
	"name" : "Java",
	"inventors" : [
		"James Gosling"
	],
	"firstAppeared" : 1995,
	"paradigms" : [
		"object-oriented (class-based)",
		"structured",
		"imperative",
		"generic",
		"reflective",
		"concurrent"
	],
	"typingDiscipline" : [
		"static",
		"strong",
		"safe",
		"nominative",
		"manifest"
	]
}
{
	"_id" : ObjectId("584ecc952eb66e8b9e10d130"),
	"name" : "Haskell",
	"inventors" : [
		"Simon Peyton Jones"
	]
}
{
	"_id" : ObjectId("584ecca32eb66e8b9e10d131"),
	"name" : "Closure",
	"inventors" : [
		"Rich Hickey"
	],
	"paradigms" : [
		"functional"
	],
	"typingDiscipline" : [
		"dynamic",
		"strong"
	]
}
