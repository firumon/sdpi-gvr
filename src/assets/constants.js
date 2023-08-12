export const execUrl = 'https://script.google.com/macros/s/AKfycbxUKkIX3HIXLKKq_2sJkt7p-bsC9uxQGg5keMHpzGTi2dgR32NPp7s9uy12-0Wrt1bN/exec';

export function zipObj(k,v){
  let zipped = {}
  k.forEach((key,idx) => zipped[key] = v[idx])
  return zipped;
}
