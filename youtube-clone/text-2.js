
function heavenlyRace(isPeople, people, status) {

  if (isPeople) {

    if(people > 0) {
      if(status === 'born again') {
        console.log('Heaven')

    } else if(status === 'jaye'){
      console.log('Hell fire')

    } else{
      console.log('Hell fire')
    }
      
    } else {
        console.log('No people')
    }
  
  } else {
    console.log('animals')
  }

}
heavenlyRace(true, 20, 'born again')
console.log(heavenlyRace(true, 20, 'born again'));

// write a function to print out a value of 

function salvation (name, date){
  if (name === 'Ifeanyi') {
    console.log(name + 'was saved' + date)
  } else {
    console.log('not saved')
  }
}

console.log(salvation('Ifeanyi', 'April 2025'));
