// Logger type Error
export enum TransporterType {
  CONSOLE = 'console',
  LOGSTASH = 'logstash',
  FILE = 'file',
  HTTP = 'http',
  KAFKA = 'kafka',
}

export enum LoggerLevel {
  ERROR = 'error',
  WARN = 'warn',
  INFO = 'info',
  VERBOSE = 'verbose',
}

export enum KafkaTopics {
  TOPIC_0 = 'topic_0',
  TOPIC_1 = 'topic_1',
}
