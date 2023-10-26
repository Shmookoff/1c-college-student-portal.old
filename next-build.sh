#!/bin/sh
S1C_HOST=$(cat /run/secrets/S1C_HOST) \
    S1C_USERNAME=$(cat /run/secrets/S1C_USERNAME) \
    S1C_PASSWORD=$(cat /run/secrets/S1C_PASSWORD) \
    yarn build