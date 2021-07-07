
    require('dotenv').config();

    module.exports = {
      apps: [
        {
          name: process.env.NUXT_APP_NAME || 'nuxt-web-app',
          exec_mode: 'cluster',
          instances: 'max', // Or a number of instances
          script: 'npm',
          args: 'run start'
        }
      ]
    }
  
