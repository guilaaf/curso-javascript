class DateConverter {
    
    constructor() {
        throw new Error('DateHelper can not be instatiated');
    }
    
    static date2Text(date) {
        return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
    }
    
    static text2Date(text) {
        if (!/\d{4}-\d{2}-\d{2}/.test(text)) {
            throw new Error('Required format: yyyy-mm-dd');
        }
        return new Date(... text.split('-').map((item, indice) => item - indice % 2));
    }
}

