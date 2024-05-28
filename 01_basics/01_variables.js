const accNumber = 8008
let email = 'deepak@gmail.com'
var pass = '1234556'
city = 'Bengaluru'

console.table([accNumber,email,pass,city])

console.log(accNumber);

// accNumber = 9009 Not allowed as accNumber is defined as const

email = 'hc@hc.com'
pass = 'abcde'

// It is not recommended to use var because of functionality scope issue

console.log(accNumber);

console.table([accNumber,email,pass,city])
