
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('riders').del()
    .then(function () {
      // Inserts seed entries
      return knex('riders').insert([
        {id: 1, userName: 'Jack', destination: 'Vail', departing: '2018-05-10'},
        {id: 2, userName: 'Nate', destination: 'Copper Mountain', departing: '2018-05-08'},
        {id: 3, userName: 'Aspen', destination: 'Echo Park', departing: '2018-05-06'},
        {id: 4, userName: 'Nick', destination: 'Arapahoe Basin', departing: '2018-05-06'},
        {id: 5, userName: 'Waldo', destination: 'Keystone', departing: '2018-05-12'}
      ])
      .then(() => {
        knex.raw('ALTER SEQUENCE riders_id_seq RESTART WITH 6;')
      })
    });
};
