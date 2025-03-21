module.exports = {
  apps: [{
    name: 'my-blog',
    script: './server.js', // 你的入口文件
    instances: 'max',      // 使用集群模式
    autorestart: true,
    watch: false,          // 生产环境建议关闭监听
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000          // 你的应用端口
    },
    env_development: {
      NODE_ENV: 'development',
      watch: true         // 开发环境开启文件监听
    },
    log_date_format: 'YYYY-MM-DD HH:mm Z',
    error_file: './logs/pm2-error.log',
    out_file: './logs/pm2-out.log'
  }]
};