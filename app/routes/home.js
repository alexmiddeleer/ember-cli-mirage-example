import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.find('blog-post', 1);
  }
});
