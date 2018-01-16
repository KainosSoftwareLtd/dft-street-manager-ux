#!/usr/bin/env bash

export REPO=$1
export NAME=$2
export TAG=$(git rev-parse HEAD)

$(aws ecr get-login --no-include-email --region eu-west-2)
docker build -t ${REPO}/${NAME}:${TAG} .
docker tag ${REPO}/${NAME}:${TAG} ${REPO}/${NAME}:latest
docker push ${REPO}/${NAME}:${TAG}
docker push ${REPO}/${NAME}:latest

echo "*** Container was build and published with tags:"
echo "*** latest"
echo "*** ${TAG}"
echo "*** Do the REAL deployment with kubectl!"
