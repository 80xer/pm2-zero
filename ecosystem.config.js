module.exports = {
  apps: [
    {
      name: "app",
      script: "./server.js",
      instances: 2,
      exec_mode: "cluster",
      wait_ready: true,
      listen_timeout: 5000,
      kill_timeout: 5000
    }
  ]
};
