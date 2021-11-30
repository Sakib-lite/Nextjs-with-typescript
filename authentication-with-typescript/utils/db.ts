const { MongoClient } = require('mongodb');
// import { MongoClient} from 'mongodb'


export async function connectToDatabase() {
  const uri =
    'mongodb+srv://sakib:rwgw3Fr02m7YNIbl@authentication.hdnne.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

  const client = await MongoClient.connect(uri,{ useUnifiedTopology: true } );

  return client;
}
