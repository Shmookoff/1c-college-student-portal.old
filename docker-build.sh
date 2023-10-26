#!/bin/sh
pnpm dotenv -- sh -c 'DOCKER_BUILDKIT=1 S1C_HOST=$S1C_HOST S1C_USERNAME=$S1C_USERNAME S1C_PASSWORD=$S1C_PASSWORD docker build -t "$TAG" --secret id=S1C_HOST --secret id=S1C_USERNAME --secret id=S1C_PASSWORD .'