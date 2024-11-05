function format(value: unknown){
    switch(typeof(value)){
        case 'string': 
            console.log('String:', value.toUpperCase());
            break;
        case 'number':
            console.log('Number:', value.toFixed(2));
            break;
        default:
            console.log('Default:', value);
    }
}

format('Ryan')
format(123.333)
format([1, 2, 3])