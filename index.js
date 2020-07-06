var admin = require('firebase-admin');

const serviceAccount = require('./service-account.json');

// Uncomment to use local firestore emulator
// process.env.FIRESTORE_EMULATOR_HOST = 'localhost:8080';

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://viernes-baken-claud.firebaseio.com'
});

const db = admin.firestore();

const reportId = '0nuUoxnNF9XTyqKJTgr8';

const expenses = [
    {amount: 1000, reportId},
    {amount: 500, reportId},
];

expenses.forEach((expense) => {
    db.collection('expenses').doc().create(expense);
});