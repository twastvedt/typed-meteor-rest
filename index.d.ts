declare module "meteor/meteor" {
  import { Mongo } from "meteor/mongo";

  interface Options {
    url?: string,
    httpMethod?: 'get' | 'head' | 'post' | 'put' | 'delete' | 'trace' | 'options' | 'connect' | 'patch',
    getArgsFromRequest?: (request: any) => any[]
  }

  export module Meteor {
    function publish(name: string, func: Function, options?: Options): void;
    function method(name: string, func: Function, options?: Options): void;
  }
}
