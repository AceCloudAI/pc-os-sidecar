import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi';
import configuration from './configuration';
import { OpenstackConfigService } from './config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: Joi.object({
        OPENSTACK_BASE_URL: Joi.string().required(),
        OPENSTACK_TIMEOUT: Joi.number().required(),
        OPENSTACK_TOKEN_TIMEOUT_IN_MINUTES: Joi.number().required(),
        OPENSTACK_COMPUTE_SERVICE: Joi.string().required(),
        OPENSTACK_IDENTITY_SERVICE: Joi.string().required(),
        OPENSTACK_GLANCE_SERVICE: Joi.string().required(),
        OPENSTACK_CINDER_SERVICE: Joi.string().required(),
        OPENSTACK_NEUTRON_SERVICE: Joi.string().required(),
        OPENSTACK_CLUSTERING_SERVICE: Joi.string().required(),
        OPENSTACK_OCTAVIA_SERVICE: Joi.string().required(),
        OPENSTACK_ORCHESTRATION_SERVICE: Joi.string().required(),

        // Noida Database Configuration
        OPENSTACK_MARIADB_NOIDA_HOST: Joi.string().optional(),
        OPENSTACK_MARIADB_NOIDA_PORT: Joi.number().optional(),
        OPENSTACK_MARIADB_NOIDA_USERNAME: Joi.string().optional(),
        OPENSTACK_MARIADB_NOIDA_PASSWORD: Joi.string().optional(),
        OPENSTACK_MARIADB_NOIDA_NOVA_DATABASE: Joi.string().optional(),

        // Atlanta Database Configuration
        OPENSTACK_MARIADB_ATLANTA_HOST: Joi.string().optional(),
        OPENSTACK_MARIADB_ATLANTA_PORT: Joi.number().optional(),
        OPENSTACK_MARIADB_ATLANTA_USERNAME: Joi.string().optional(),
        OPENSTACK_MARIADB_ATLANTA_PASSWORD: Joi.string().optional(),
        OPENSTACK_MARIADB_ATLANTA_NOVA_DATABASE: Joi.string().optional(),

        // Mumbai Database Configuration
        OPENSTACK_MARIADB_MUMBAI_HOST: Joi.string().optional(),
        OPENSTACK_MARIADB_MUMBAI_PORT: Joi.number().optional(),
        OPENSTACK_MARIADB_MUMBAI_USERNAME: Joi.string().optional(),
        OPENSTACK_MARIADB_MUMBAI_PASSWORD: Joi.string().optional(),
        OPENSTACK_MARIADB_MUMBAI_NOVA_DATABASE: Joi.string().optional(),
      })
        .unknown()
        .required(),
    }),
  ],
  providers: [ConfigService, OpenstackConfigService],
  exports: [ConfigService, OpenstackConfigService],
})
export class OpenstackConfigModule {}
