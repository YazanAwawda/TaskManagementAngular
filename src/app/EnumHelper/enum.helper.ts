export function enumValues (e : object) : any [] {
  const  mas = Object.values(e) ;
  return  mas.splice(mas.length / 2 , mas.length);

}

