import { registerAs } from '@nestjs/config';
import { openstackConfigInterface } from 'src/domains/openstack/interfaces/openstack.interface';

export default registerAs(
  'openstack',
  (): openstackConfigInterface => ({
    baseUrl: process.env.OPENSTACK_BASE_URL || 'openstack.acecloudhosting.com',
    timeout: parseInt(process.env.OPENSTACK_TIMEOUT ?? '30000') || 30000,
    tokenTimeoutInMinutes: parseInt(process.env.OPENSTACK_TOKEN_TIMEOUT_IN_MINUTES ?? '50') || 50,
    service: {
      compute: process.env.OPENSTACK_COMPUTE_SERVICE || '8774/v2.1',
      identity: process.env.OPENSTACK_IDENTITY_SERVICE || '5000/v3',
      glance: process.env.OPENSTACK_GLANCE_SERVICE || '9292/v2',
      cinder: process.env.OPENSTACK_CINDER_SERVICE || '8776/v3',
      neutron: process.env.OPENSTACK_NEUTRON_SERVICE || '9696/v2.0',
      clustering: process.env.OPENSTACK_CLUSTERING_SERVICE || '8778/v1',
      octavia: process.env.OPENSTACK_OCTAVIA_SERVICE || '9876/v2',
      orchestration: process.env.OPENSTACK_ORCHESTRATION_SERVICE || '8004/v1',
    },
    database: {
      noida: {
        host: process.env.OPENSTACK_DB_NOIDA_HOST || 'localhost',
        port: parseInt(process.env.OPENSTACK_DB_NOIDA_PORT ?? '3306') || 3306,
        username: process.env.OPENSTACK_DB_NOIDA_USER || 'root',
        password: process.env.OPENSTACK_DB_NOIDA_PASSWORD || 'password',
        database: {
          nova: process.env.OPENSTACK_DB_NOIDA_NOVA_DATABASE || 'nova',
          nova_api: process.env.OPENSTACK_DB_NOIDA_NOVA_API_DATABASE || 'nova_api',
        },
      },
      atlanta: {
        host: process.env.OPENSTACK_DB_ATLANTA_HOST || 'localhost',
        port: parseInt(process.env.OPENSTACK_DB_ATLANTA_PORT ?? '3306') || 3306,
        username: process.env.OPENSTACK_DB_ATLANTA_USER || 'root',
        password: process.env.OPENSTACK_DB_ATLANTA_PASSWORD || 'password',
        database: {
          nova: process.env.OPENSTACK_DB_ATLANTA_NOVA_DATABASE || 'nova',
          nova_api: process.env.OPENSTACK_DB_ATLANTA_NOVA_API_DATABASE || 'nova_api',
        },
      },
      mumbai: {
        host: process.env.OPENSTACK_DB_MUMBAI_HOST || 'localhost',
        port: parseInt(process.env.OPENSTACK_DB_MUMBAI_PORT ?? '3306') || 3306,
        username: process.env.OPENSTACK_DB_MUMBAI_USER || 'root',
        password: process.env.OPENSTACK_DB_MUMBAI_PASSWORD || 'password',
        database: {
          nova: process.env.OPENSTACK_DB_MUMBAI_NOVA_DATABASE || 'nova',
          nova_api: process.env.OPENSTACK_DB_MUMBAI_NOVA_API_DATABASE || 'nova_api',
        },
      },
    },
  }),
);
