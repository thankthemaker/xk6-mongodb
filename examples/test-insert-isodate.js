import xk6_mongo from 'k6/x/mongo';

const client = xk6_mongo.newClient('mongodb://localhost:27017');
export default ()=> {

  const created = xk6_mongo.generateIsoDate()
  const modified = xk6_mongo.convertStringToIsoDate('2024-05-11T11:11:11Z')

  let doc = {
      correlationId: `test--mongodb`,
      title: 'Perf test experiment',
      url: 'example.com',
      locale: 'en',
      created: created,
      lastModified: modified,
    };

    let error = client.insert("testdb", "testcollection", doc);
    if (error) 
        console.log(error.message);
}
