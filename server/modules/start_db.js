const pool = require('./modules/pool.js');

let checkTableExistanceQuery = `Select * from INFORMATION_SCHEMA.TABLES
    WHERE TABLE_NAME = 'people';`;

pool.query(checkTableExistanceQuery).then((result) => {
    console.log('Table already exists, moving on.');
}).catch((err) => {
    console.log('Error checking table existance.', err);
})

// let createTableQuery = `CREATE TABLE people (
// 	id SERIAL PRIMARY KEY,
// 	name varchar(255),
// 	role varchar(255)
// );`;

// pool.query(createTableQuery).then((result) => {
//     console.log('createTableQuery result', result);
// createTableQuery result Result {
//     command: 'CREATE',
//     rowCount: null,
//     oid: null,
//     rows: [],
//     fields: [],
//     _parsers: undefined,
//     _types: TypeOverrides {
//       _types: {
//         getTypeParser: [Function: getTypeParser],
//         setTypeParser: [Function: setTypeParser],
//         arrayParser: [Object],
//         builtins: [Object]
//       },
//       text: {},
//       binary: {}
//     },
//     RowCtor: null,
//     rowAsArray: false
//   } 
// }).catch((err) => {
//     console.log('createTableQuery err', err);
// createTableQuery err error: relation "people" already exists
// })


let insertQuery = `INSERT INTO "people" ("name", "role") 
VALUES ('Catherine O''Hara', 'Moira Rose'), ('Eugene Levy', 'Johnny Rose'), ('Dan Levy', 'David Rose'), ('Annie Murphy', 'Alexis Rose');`;

// pool.query(insertQuery).then((result) => {
//     console.log('result', result);
// }).catch((err) => {
//     console.log('err', err);
// })
