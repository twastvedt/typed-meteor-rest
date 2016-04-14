declare module "meteor/meteor" {  
  import { Mongo } from "meteor/mongo";

  export module Meteor {
    function publish(name: string, func: Function, options: {
		url: string,
		httpMethod: 'get' | 'head' | 'post' | 'put' | 'delete' | 'trace' | 'options' | 'connect' | 'patch'
	}): void;
  }
}
