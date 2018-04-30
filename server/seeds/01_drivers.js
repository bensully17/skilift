
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('drivers').del()
    .then(function () {
      // Inserts seed entries
      return knex('drivers').insert([
        {id: 1, userName: 'Ben', lat: 39.766917, long: -105.008038, destination: 'Vail', departing: '2018-05-10', time: 600},
        {id: 2, userName: 'Jacob', lat: 39.763184, long: -104.962195, destination: 'Copper Mountain', departing: '2018-05-08', time:530},
        {id: 3, userName: 'Will', lat: 39.727210, long: -104.969466, destination: 'Echo Park', departing: '2018-05-06', time:600},
        {id: 4, userName: 'Adam', lat: 39.678475, long: -104.955023, destination: 'Arapahoe Basin', departing: '2018-05-06', time:1000},
        {id: 5, userName: 'Austen', lat: 39.776621, long: -105.048601, destination: 'Keystone', departing: '2018-05-12', time:800}
      ]);
    }).then(() => {
      knex.raw('ALTER SEQUENCE leaving_id_seq RESTART WITH 6;')
    })
};
