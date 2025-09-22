import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { JwtPayloadInterface, FlavorInterface } from 'src/common/interfaces';

declare module 'fastify' {
  export interface FastifyRequest {
    user: JwtPayloadInterface;
    k8sProjectId: number;
    rancher_url: string;
    rancher_token: string;
    k8sproject_id: string;
    memberToken: {
      token: string,
      expires_at: string
    }
    k8sDBProjectId: number,
    openstackToken: string,
    adminProjectId: string,
    adminUsername: string,
    adminPassword: string,
    harbor_project_id: string,
    harbor_registry_name: string
  }

  export interface Session {
    cluster_status: string;
    memberToken: {
      token: string;
      expires_at: string;
    };
    flavors: FlavorInterface;
    project_id: string;
    leadSession: {
      leadId: string,
      mobile: string
    }
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3009);
}
bootstrap();
