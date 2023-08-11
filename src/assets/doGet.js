import {sheetUrl, zipObj} from "assets/constants";

const CT = String(new Date('Mon, 14 Aug 2023 23:59:59 GMT+530').getTime())
const IT1 = "ji", IT2 = "ha";

function StringFromCode(CD64){
  let CD = atob(CD64), CDwoCT = CD.replace(CT,""),
    S64LL = parseInt(CD.slice(0,CD.indexOf(CT))), CDwoCTwoLL = CDwoCT.replace(""+S64LL,""), S64I = CDwoCTwoLL.slice(S64LL,-9);
  let S64 = '';
  if(S64I.length%2) { S64 = S64I.slice(0,5) + S64I.slice(5) } else { S64 = S64I.slice(0,4) + S64I.slice(6) }
  let binary = atob(S64), U8A = Uint8Array.from(binary, (m) => m.codePointAt(0));
  return new TextDecoder().decode(U8A);
}
export default function doGet(action,params){
  if(!action) return Promise.reject('No action specified'); if(!params) params = ({})
  const URL = sheetUrl + '?' + (new URLSearchParams({ action,...params }).toString())
  return new Promise((resolve, reject) => {
    fetch(URL).then(resp => resp.text()).then(CD64 => {
      let string = String(StringFromCode(CD64));
      return JSON.parse(string)
    }).then(json => {
      if(json.error) return reject(json.message);
      if(json.merge && json.head){
        if(json.level === 2){
          const data = [];
          json.data.forEach(row => data.push(zipObj(json.head,row)))
          resolve(data)
        } else {
          resolve(zipObj(json.head,json.data))
        }
      } else {
        let avoid = ['error','message','merge','level'], data = {}
        for (const key in json) {
          if(avoid.includes(key)) continue;
          data[key] = json[key];
        }
        resolve(data)
      }
    })
  })
}
