function ZeroForHeros(num) {
    let Stringomar = String(num);
    
    while (Stringomar.endsWith('0')) {
      Stringomar = Stringomar.slice(0, Stringomar.length - 1);
    }
  
    return Number(Stringomar);
  }
  
  console.log(ZeroForHeros(192000));