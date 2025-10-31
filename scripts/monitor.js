/**
 * System Monitoring Script
 * Supports production and development environments
 */

const ENV = process.env.NODE_ENV || 'production';

const monitorProfiles = {
  production: {
    interval: 60000,
    alertThreshold: 80,
    metricsEndpoint: 'http://localhost:8080/metrics',
    debugMode: false,
    verboseLogging: false
  },
  development: {
    interval: 5000,
    alertThreshold: 90,
    metricsEndpoint: 'http://localhost:3000/metrics',
    debugMode: true,
    verboseLogging: true
  }
};

const monitorConfig = monitorProfiles[ENV] || monitorProfiles.production;

console.log('=================================');
console.log('DevOps Simulator - Monitor');
console.log(`Environment: ${ENV}`);
console.log(`Debug: ${monitorConfig.debugMode ? 'ENABLED' : 'DISABLED'}`);
console.log('=================================');

function checkSystemHealth() {
  const timestamp = new Date().toISOString();
  if (monitorConfig.debugMode) {
    console.log(`\n[${timestamp}] === DETAILED HEALTH CHECK ===`);
  } else {
    console.log(`[${timestamp}] Checking system health...`);
  }

  const cpuUsage = Math.random() * 100;
  const memUsage = Math.random() * 100;
  const diskUsage = Math.random() * 100;

  console.log(`✓ CPU usage: ${monitorConfig.debugMode ? cpuUsage.toFixed(2) + '%' : 'Normal'}`);
  console.log(`✓ Memory usage: ${monitorConfig.debugMode ? memUsage.toFixed(2) + '%' : 'Normal'}`);
  console.log(`✓ Disk space: ${monitorConfig.debugMode ? diskUsage.toFixed(2) + '% used' : 'Adequate'}`);

  if (monitorConfig.debugMode) {
    console.log('✓ Hot reload: Active');
    console.log('✓ Debug port: 9229');
    console.log('✓ Source maps: Enabled');
  }

  const maxUsage = Math.max(cpuUsage, memUsage, diskUsage);
  if (maxUsage > monitorConfig.alertThreshold) {
    console.log('⚠️  System Status: WARNING - High resource usage');
  } else {
    console.log('✅ System Status: HEALTHY');
  }

  if (monitorConfig.verboseLogging) {
    console.log(`Next check in ${monitorConfig.interval}ms`);
  }
}

console.log(`Monitoring every ${monitorConfig.interval}ms`);
if (monitorConfig.debugMode) {
    console.log('Debug features enabled');
}

setInterval(checkSystemHealth, monitorConfig.interval);
checkSystemHealth();

if (monitorConfig.debugMode) {
  setInterval(() => {
    const memUsage = process.memoryUsage();
    console.log('\n--- Memory Usage ---');
    console.log(`RSS: ${(memUsage.rss / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Heap Used: ${(memUsage.heapUsed / 1024 / 1024).toFixed(2)} MB`);
  }, 30000);
}
