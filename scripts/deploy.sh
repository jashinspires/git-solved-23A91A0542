#!/bin/bash

set -e

echo "====================================="
echo "DevOps Simulator - Deployment"
echo "====================================="

# Default to production deployment unless overridden
DEPLOY_ENV=${DEPLOY_ENV:-production}

if [ "$DEPLOY_ENV" = "production" ]; then
    DEPLOY_REGION="us-east-1"
    APP_PORT=${APP_PORT:-8080}
    echo "Mode: Production"
    echo "Region: $DEPLOY_REGION"
    echo "Port: $APP_PORT"
else
    DEPLOY_MODE="docker-compose"
    APP_PORT=${APP_PORT:-3000}
    ENABLE_DEBUG=${ENABLE_DEBUG:-true}
    echo "Mode: Development"
    echo "Deploy method: $DEPLOY_MODE"
    echo "Port: $APP_PORT"
    echo "Debug: $ENABLE_DEBUG"
fi

# Pre-deployment checks
echo "Running pre-deployment checks..."
if [ ! -f "config/app-config.yaml" ]; then
    echo "Error: Configuration file not found!"
    exit 1
fi

if [ "$DEPLOY_ENV" = "development" ]; then
    echo "Installing dependencies..."
    npm install

    echo "Running tests..."
    npm test
fi

echo "Starting deployment..."

if [ "$DEPLOY_ENV" = "production" ]; then
    echo "Pulling latest Docker images..."
    # docker pull devops-simulator:latest

    echo "Rolling update strategy initiated..."
    # kubectl rolling-update devops-simulator

    echo "Deployment completed successfully!"
    echo "Application available at: https://app.example.com"
else
    echo "Using Docker Compose..."
    docker-compose up -d

    echo "Waiting for application to be ready..."
    sleep 5

    echo "Performing health check..."
    curl -f http://localhost:$APP_PORT/health || exit 1

    echo "Deployment completed successfully!"
    echo "Application available at: http://localhost:$APP_PORT"
    [ "$ENABLE_DEBUG" = "true" ] && echo "Hot reload enabled - code changes will auto-refresh"
fi
