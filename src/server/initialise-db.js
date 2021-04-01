import { defaultState } from './defaultState';
import { connectDB } from './connect-db';

async function initialiseDB() {
    let db = await connectDB();
    let user = await db.collection(`users`).findOne({id:"U1"});

    console.log("User? ", user);

    if (!user) {
        for (let collectionName in defaultState) {
            console.log("initialising collection", collectionName)
            let collection = db.collection(collectionName);
            await collection.insertMany(defaultState[collectionName]);
        }
    }
}

initialiseDB();
