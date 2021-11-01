

const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }
  
  const name = prompt('Please enter the name for your reservation');
  if(reservations[name]) {
    let check = reservations[name]["claimed"]

    if(check) {
        alert("Hmm, someone already claimed this reservation")

    }
    else{
        alert("Welcome, Bob")
    }
    }
  else{
    alert("You have no reservation")

  }