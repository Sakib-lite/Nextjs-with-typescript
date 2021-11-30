const { MongoClient } = require('mongodb');
// import { MongoClient} from 'mongodb'


export async function connectToDatabase() {
  const uri =''

  const client = await MongoClient.connect(uri,{ useUnifiedTopology: true } );

  return client;
}
