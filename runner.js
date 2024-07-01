const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN= 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjU0Mzg0MmM5LTQ5NTQtNDlmYi05N2YxLWJjMjhhZTc2Nzg2OC0xNzE5NzkyNzY0MTQ5IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiODI2ODI1MTAtYzlmMy00NDU1LThkYjMtMjI3ODk5MTQyYjEzIiwidHlwZSI6InQifQ.ZTCEsFFnhxLbRGnoBObLKB3ZpwDbdHE0TDw1OXI998E'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
