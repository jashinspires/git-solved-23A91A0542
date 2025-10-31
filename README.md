# DevOps Simulator

A comprehensive CI/CD configuration management tool for enterprise deployments.

## Project Status
- **Version**: 1.0.0 (Production)
- **Version**: 2.0.0-beta (Development)
- **Environments**: Production & Development
- **Student**: jashinspires
- **Student ID**: 23A91A0542

## Features
- Automated deployment scripts
- Real-time monitoring
- Configuration management
- Backup and recovery system
- Slack/Discord notifications
- Multi-cloud support (AWS, Azure, GCP)

## Quick Start

### Production
1. Configure environment variables (@see `config/app-config.yaml`).
2. Export deployment context: `export DEPLOY_ENV=production`.
3. Run deployment script: `./scripts/deploy.sh`.
4. Monitor via Prometheus/Grafana dashboard.

### Development
1. Install dependencies: `npm install`.
2. Export development context: `export NODE_ENV=development`.
3. Start development server: `npm run dev`.
4. Visit `http://localhost:3000` for the dashboard.

## Development Setup
```bash
# Install dependencies
npm install

# Run tests
npm test

# Start development server
npm run dev
```

## Documentation
See `/docs` folder for detailed documentation.

## Contributing
Please read CONTRIBUTING.md before submitting pull requests.

## License
MIT License
