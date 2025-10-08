#!/bin/bash
cd "$(dirname "$0")/python-server" || exit
source venv/bin/activate
python server.py