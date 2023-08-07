declare global {
  namespace NodeJS {
    interface ProcessEnv {
      POSTGRES_PORT: number;
      POSTGRES_PASSWORD: string;
      KAFKA_CLIENT_ID: string;
      KAFKA_HOST: string;
      KAFKA_PORT: number;
      KAFKA_PASS: string;
      KAFKA_USER: string;
      CONSUMER_GROUP: string;
      NODE_ENV: string;
      UNIFIED_SERVICE_URL: string;
    }
  }
}
export {};
