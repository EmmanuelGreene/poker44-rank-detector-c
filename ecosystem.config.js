module.exports = {
  apps: [{
    name: 'poker44-model-3',
    script: '/opt/poker44-model-miner-3/start_miner.sh',
    cwd: '/opt/poker44-model-miner-3',
    env: {
      PATH: '/opt/poker44-model-miner-3/.venv/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin',
      VIRTUAL_ENV: '/opt/poker44-model-miner-3/.venv',
      PYTHONPATH: '/opt/poker44-model-miner-3:/opt/poker44-model-miner-3/src',
      POKER44_MODEL_REPO_URL: 'https://github.com/EmmanuelGreene/poker44-rank-detector-c',
      LOGGING_DEBUG: 'false'
    },
    autorestart: true,
    max_restarts: 3,
    restart_delay: 30000,
    max_memory_restart: '1G',
    kill_timeout: 10000,
    log_date_format: 'YYYY-MM-DDTHH:mm:ss'
  }],
};
