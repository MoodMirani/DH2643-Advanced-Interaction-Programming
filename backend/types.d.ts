declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MY_ADDRESS: string;
      MY_PORT: number;
    }
  }
}