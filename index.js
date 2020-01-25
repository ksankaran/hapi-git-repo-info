// NPM module to get repository info
const getRepoInfo = require('git-repo-info');

module.exports = {
  pkg: require('./package.json'),
  register: async (server) => {
    // Create a route for example
    server.route({
      method: 'GET',
      path: '/branch-info',
      handler: () => (getRepoInfo())
    });
  },
  name: 'Hapi Git Repo Information Plugin'
};
