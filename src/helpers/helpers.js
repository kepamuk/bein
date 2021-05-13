export function formatCurency(curency){
    let formated = new Intl.NumberFormat('en-IN').format(curency);
    return formated;
}