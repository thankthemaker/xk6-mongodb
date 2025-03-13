//import xk6_mongo from 'k6/x/mongo';
import mongo from 'k6/x/mongo';

const client = mongo.newClient('mongodb://localhost:27017');
export default ()=> {

  const uuid = mongo.generateUuid();

  let doc = {
      correlationId: uuid,
      title: 'Perf test experiment',
      url: 'example.com',
      locale: 'en',
      time: `${new Date(Date.now()).toISOString()}`
    };

    let error = client.insert("testdb", "testcollection", doc);
    if (error) 
        console.log(error.message);
}
