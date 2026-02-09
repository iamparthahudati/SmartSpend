export type HttpMethod = 'get' | 'post' | 'put' | 'patch' | 'delete';

export interface MockHandler {
  url: string | RegExp;
  method: HttpMethod;
  handler: () => [number, any];
}
