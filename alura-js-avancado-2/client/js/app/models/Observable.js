class Observable {
    
    constructor() {
        this._listeners = [];
    }
    
    adicionarListener(listener) {
        this._listeners.push(listener);
    }
    
    notificarListeners() {
        this._listeners.forEach(listener => listener(this));
    }
}

