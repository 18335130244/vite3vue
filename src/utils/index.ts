import color from 'css-color-function'

interface keysFor {
    "shade-1"?:string
    "light-1"?:string
    "light-2"?:string
    "light-3"?:string
    "light-4"?:string
    "light-5"?:string
    "light-6"?:string
    "light-7"?:string
    "light-8"?:string
    "light-9"?:string
}
let formula  = {
    "shade-1": "color(primary shade(10%))",
    "light-1": "color(primary tint(10%))",
    "light-2": "color(primary tint(20%))",
    "light-3": "color(primary tint(30%))",
    "light-4": "color(primary tint(40%))",
    "light-5": "color(primary tint(50%))",
    "light-6": "color(primary tint(60%))",
    "light-7": "color(primary tint(70%))",
    "light-8": "color(primary tint(80%))",
    "light-9": "color(primary tint(90%))"
}

export const generateColors = (primary:string): object => {
    let colors:keysFor = {};
    let key:keyof keysFor;
    for(key in formula){
        let value = formula[key].replace(/primary/g, primary);
        colors[key] = color.convert(value)
    }
    return colors
}
