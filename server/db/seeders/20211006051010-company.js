module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Companies', [
      {
        id: '2qVZQ5g23R',
        title: 'Почта России',

      },
      {
        id: 'ebDFCJ45OF',
        title: 'Apple inc.',

      },
      {
        id: 'k8WMC-45Gc',
        title: 'Google',

      },
      {
        id: 'Ma45Yp9o',
        title: 'Amazon',

      },
      {
        id: 'Ma45YpK9',
        title: 'Yahoo',

      },
      {
        id: 'Ma45sd-oK',
        title: 'X5',

      },
      {
        id: 'Ma4123d-oK',
        title: 'Ростех',

      },
      {
        id: '898нгрsd',
        title: 'Ланит',

      },
      {
        id: 'sda-asd98h',
        title: 'OCS Distribution',

      },
      {
        id: 'eRtg-pso0',
        title: 'Dell',

      },
      {
        id: 'eRtgso0',
        title: 'IBM',

      },
      {
        id: 'eRtgsds0sdk',
        title: 'Cisco Systems',

      },
      {
        id: 'esfa-sd50',
        title: 'Accenture',

      },
      {
        id: 'eR-dkk9k',
        title: 'Oracle',

      },
      {
        id: 'eR-dkk9',
        title: 'Elbrus',

      },
    ], {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Companies', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
