import { KafkaModule } from '@rob3000/nestjs-kafka';
import { DynamicModule } from '@nestjs/common';

const initKafka = async (): Promise<DynamicModule> => {
  return KafkaModule.register([
    {
      name: 'REPORT_SERVICE_KAFKA',
      options: {
        client: {
          clientId: process.env.KAFKA_CLIENT_ID,
          requestTimeout: 45000,
          authenticationTimeout: 40000,
          reauthenticationThreshold: 40000,
          brokers: [`${process.env.KAFKA_HOST}:${process.env.KAFKA_PORT}`],
          ssl: true,
          sasl: {
            mechanism: 'plain', // scram-sha-256 or scram-sha-512
            username: process.env.KAFKA_USER,
            password: process.env.KAFKA_PASS,
          },
        },
        consumer: {
          groupId: process.env.CONSUMER_GROUP,
        },
      },
    },
  ]);
};

export default initKafka;
