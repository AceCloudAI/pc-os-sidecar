import { registerAs } from '@nestjs/config';

export default registerAs('logging', () => ({
  sentryEnabled: process.env.SENTRY_ENABLED === 'true' || false,
}));
