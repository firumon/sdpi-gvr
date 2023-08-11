export const sheetUrl = 'https://script.google.com/macros/s/AKfycbwcanR1v5lTH0weu1Tk66Lj3-YrltH4T2FVheJOtUED_n2lTNadVI9z--0Ks2vZEMjO/exec';

export function zipObj(k,v){
  let zipped = {}
  k.forEach((key,idx) => zipped[key] = v[idx])
  return zipped;
}
