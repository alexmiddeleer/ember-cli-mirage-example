export default function(server) {

  let author = server.create('user');
  server.create('blog-post', { author });
  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.

    Make sure to define a factory for each model you want to create.
  */

  // server.createList('post', 10);
}
