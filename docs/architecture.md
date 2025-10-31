# System Architecture

DevOps Simulator follows a microservices architecture designed for high availability in production while retaining flexibility for development experimentation.

## Components

### 1. Application Server
- **Technology**: Node.js + Express
- **Production Port**: 8080 with horizontal auto-scaling
- **Development Port**: 3000 with hot reload and debugger on 9229
- **Feature Flags**: Experimental features gated behind configuration toggles

### 2. Database Layer
- **Database**: PostgreSQL 14
- **Production**: Master-slave replication with automated backups
- **Development**: Single local instance with optional seed data
- **Access**: Managed credentials with stricter policies in production

### 3. Monitoring System
- **Production**: Prometheus + Grafana with email alerts
- **Development**: Console logging with verbose diagnostics
- **Metrics**: CPU, Memory, Disk, Network, Build time

### 4. Container Orchestration
- **Production**: Kubernetes (rolling updates)
- **Development**: Docker Compose stack (app, database, redis)
- **Mounts**: Source mounted for instant feedback in development

### 5. Authentication (Beta)
- **Production**: OAuth2 + JWT (planned rollout)
- **Development**: Google and GitHub providers for integration testing
- **Session Store**: Redis-backed sessions evaluated in development

## Deployment Strategy

### Production
- Method: Rolling updates with automated rollback
- Zero-downtime: Guaranteed via health checks
- Region: us-east-1 primary with failover support

### Development
- Method: Docker Compose with hot reload
- Workflow: Edit → auto-rebuild → run unit tests → commit
- Rollback: Git checkout of previous snapshot

## Security
- **Production**: Enforced SSL/TLS, encrypted database connections, scheduled audits
- **Development**: Relaxed settings (CORS enabled, plain-text credentials) for rapid iteration; never promote to production without hardening

## Experimental Features
⚠️ The following capabilities are behind feature flags and require additional validation before production enablement:
- Multi-cloud deployment strategy with Kubernetes custom resources
- AI-assisted log analysis and anomaly detection powered by TensorFlow.js
- Automatic rollback on anomaly detection with canary rollout automation
- Distributed PostgreSQL clusters with ML-based query optimization
- Chaos engineering harness for resilience testing

When the `experimental` profile is enabled, the platform activates:

- **AI/ML Pipeline**: Real-time inference using pre-trained models with background retraining windows under 50ms latency targets.
- **Multi-Cloud Orchestration**: Concurrent deployment to AWS, Azure, GCP, and DigitalOcean with global anycast balancing.
- **Enhanced Observability**: Prometheus + Thanos metrics retention, ELK stack log aggregation, and AI-powered anomaly alerts.
- **Safety Nets**: Canary strategy with incremental traffic shifting (10% → 50% → 100%) and AI-driven rollback triggers.

> Experimental mode is intended for isolated staging environments. Do not enable in production without comprehensive validation.
