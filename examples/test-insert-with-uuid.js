//import xk6_mongo from 'k6/x/mongo';
import xk6_mongo from 'k6/x/mongo';

const client = xk6_mongo.newClient('mongodb://localhost:27017');
export default ()=> {

  const correlationId = xk6_mongo.generateUuid();
  const foreignId = xk6_mongo.convertStringToUuid('dee906b2-a562-4846-89a9-6843a8e3d5a2')

  let doc = {
      correlationId: correlationId,
      foreignId: foreignId,
      title: 'Perf test experiment',
      url: 'example.com',
      locale: 'en',
      time: `${new Date(Date.now()).toISOString()}`
    };

    let error = client.insert("testdb", "testcollection", doc);
    if (error) 
        console.log(error.message);
}
