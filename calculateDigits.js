// JavaScript source code
let colapseDigits = function (num){
   while (num >= 10) {
          var value = num;
          var sum = 0;
          while (value) {
              sum += value % 10;
              value = Math.floor(value / 10);
          }
          num = sum;
  }
 return num;
}

let calculateDigits = function (domain) {
    let map = new Map([
        ['A', '14'], ['B', '01'], ['C', '00'], ['D', '16'], ['E', '05'], ['F', '20'], ['G', '19'], ['H', '09'],
        ['I', '24'], ['J', '07'], ['K', '21'], ['L', '08'], ['M', '04'], ['N', '13'], ['O', '25'], ['P', '22'],
        ['Q', '18'], ['R', '10'], ['S', '02'], ['T', '06'], ['U', '12'], ['V', '23'], ['W', '11'], ['X', '03'],
        ['Y', '15'], ['Z', '17'], ['0', '0'], ['1', '1'], ['2', '2'], ['3', '3'], ['4', '4'], ['5', '5'],
        ['6', '6'], ['7', '7'], ['8', '8'], ['9', '9']
    ]);
    let first = 0;
    let second = 0;
    auxDomain = "";
    domain = domain.toUpperCase();
    for (let i = 0; i < domain.length; i++) {
        auxDomain = auxDomain + map.get(domain[i])
    }
    for (let i = auxDomain.length-1 ; i >= 0; i--) {
        if ((i % 2) == 0) {
            first = first + parseInt(map.get(auxDomain[i]));
        } else {
            second = second + parseInt(map.get(auxDomain[i]));
        }
    }
    first = colapseDigits(first);
    second = colapseDigits(second);
    console.log("Digito Verificador: " + first + second);
};

