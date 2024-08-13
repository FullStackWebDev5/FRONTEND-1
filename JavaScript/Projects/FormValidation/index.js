function validate() {
  const firstName = document.getElementById('firstname').value
  const lastName = document.getElementById('lastname').value
  const email = document.getElementById('email').value
  const mobile = document.getElementById('mobile').value
  const password = document.getElementById('password').value
  const confirmPassword = document.getElementById('confirm-password').value

  if(!firstName) {
    console.log('Please enter a valid first name')
  }

  if(!lastName) {
    console.log('Please enter a valid last name')
  }

  if(!email) {
    console.log('Please enter a valid email')
  }

  /*
    Validation Rules:
    - Email
      - Contain @ and .

    - Mobile
      - Needs to be 10 characters
      - All numbers
  */  

  // const user = {
  //   firstName,
  //   lastName,
  //   email,
  //   mobile,
  //   password,
  //   confirmPassword,
  // }
  // console.log(user)
}