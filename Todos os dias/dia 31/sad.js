const sum = []

for(i = 0; i < cpfParcial.length; i++) {
  sum.push(cpfParcial[i].parseInt() * key)
  key = key - 1
}
console.log(sum)