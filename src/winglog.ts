import { WingLog } from '@seawingai/winglog';

export function main(): void {
  // Create a logger instance
  const logger = new WingLog('my-app');

  // Basic logging
  logger.info('Application started');
  logger.success('User login successful');
  logger.warn('High memory usage detected');
  logger.failed('Database connection failed');

  // Performance tracking
  const startTime = Date.now();
  // ... do some work ...
  logger.finished('Task completed', startTime);
}

main();
