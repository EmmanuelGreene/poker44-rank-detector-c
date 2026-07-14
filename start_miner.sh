#!/bin/bash
cd /opt/poker44-model-miner-3
export POKER44_BATCH_CALIBRATION=clip_below
export POKER44_MODEL_NAME=${POKER44_MODEL_NAME:-poker44-rank-detector-c}
export POKER44_MODEL_VERSION=${POKER44_MODEL_VERSION:-3.0-c}
export POKER44_LOG_SCORE_ARRAYS=1
export POKER44_LOG_SCORE_COMPONENTS=1
exec /opt/poker44-model-miner-3/.venv/bin/python neurons/miner.py \
  --netuid 126 \
  --wallet.name mywallet \
  --wallet.hotkey sn126_3 \
  --subtensor.network finney \
  --neuron.name poker44-miner-3 \
  --axon.port 8194 \
  --blacklist.force_validator_permit
