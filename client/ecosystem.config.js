module.exports = {
  apps: [{
    script: 'npm start',

  }],
  deploy: {
    production: {
      key: "ecom-nextjs.pem",
      user: 'ubuntu',
      host: '13.233.99.152',
      ref: 'origin/development',
      repo: 'git@github.com:jaysingtalekar268/ecom.git',
      path: '/home/ubuntu/source/client',
      'pre-deploy-local': '',
      'post-deploy': 'source ~/.nvm/nvm.sh && npm install-f && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options': "ForwardAgent=yes"
    }
  }
};
