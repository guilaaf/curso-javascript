export class ProxyFactory {
    
    constructor() {
        throw new Error('ProxyFactory can not be instatiated');
    }
    
    static create(obj, props, action) {
        return new Proxy(obj, {
            
            get(target, prop, receiver) {
                if (props.includes(prop) && typeof(target[prop]) === typeof(Function)) {
                    return function() {
                        let retorno = Reflect.apply(target[prop], target, arguments);
                        action(target);
                        return retorno;
                    }
                }
                return Reflect.get(target, prop, receiver);
            },
            
            set(target, prop, value, receiver) {
                let retorno = Reflect.set(target, prop, value, receiver);
                if (props.includes(prop)) {
                    action(target);
                }
                return retorno;
            }
            
        });
    }
    
}

