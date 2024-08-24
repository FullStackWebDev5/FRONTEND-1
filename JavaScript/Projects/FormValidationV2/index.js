function validate() {
  const firstName = document.getElementById('firstname').value
  const lastName = document.getElementById('lastname').value
  const email = document.getElementById('email').value
  const mobile = document.getElementById('mobile').value
  const password = document.getElementById('password').value
  const confirmPassword = document.getElementById('confirm-password').value

  // Radio button
  let gender = ''
  const gender1 = document.getElementById('gender-1')
  const gender2 = document.getElementById('gender-2')
  const gender3 = document.getElementById('gender-3')

  if(gender1.checked) {
    gender = gender1.value
  } else if(gender2.checked) {
    gender = gender2.value
  } else if(gender3.checked) {
    gender = gender3.value
  }
  console.log(gender)

  // Checkbox
  let hobbies = []
  const hobby1 = document.getElementById('hobby-1')
  const hobby2 = document.getElementById('hobby-2')
  const hobby3 = document.getElementById('hobby-3')

  if(hobby1.checked) {
    hobbies.push(hobby1.value)
  }
  if(hobby2.checked) {
    hobbies.push(hobby2.value)
  }
  if(hobby3.checked) {
    hobbies.push(hobby3.value)
  }
  console.log(hobbies)

  let error = {
    firstname: false,
    lastname: false,
    email: false,
    mobile: false,
    password: false,
    'confirm-password': false,
  }

  if(!firstName || firstName.length < 2) {
    setError('firstname')
  } else {
    unsetError('firstname')
  }

  if(!lastName) {
    setError('lastname')
  } else {
    unsetError('lastname')
  }

  if(!email || !email.includes('@') || !email.includes('.')) {
    setError('email')
  } else {
    unsetError('email')
  }

  if(!mobile || mobile.length != 10 || !Number(mobile)) {
    setError('mobile')
  } else {
    unsetError('mobile')
  }

  const atLeastOneSpclChar = password.includes('#') || password.includes('@') || password.includes('$')
  if(!password || password.length < 8 || !atLeastOneSpclChar) {
    setError('password')
  } else {
    unsetError('password')
  }

  if(!confirmPassword || confirmPassword != password) {
    setError('confirm-password')
  } else {
    unsetError('confirm-password')
  }

  function setError(inputId) {
    document.getElementById(inputId).style.border = '2px solid red'
    error[inputId] = true
  }

  function unsetError(inputId) {
    document.getElementById(inputId).style.border = '2px solid black'
    error[inputId] = false
  }

  /*
    Validation Rules:
    - First Name
      - Cannot be empty
      - Atleast 2 characters
    - Last Name
      - Cannot be empty
    - Email
      - Cannot be empty
      - Contain @
      - Contain .
    - Mobile
      - Cannot be empty
      - Needs to be 10 characters
      - All characters need to be numbers
    - Password
      - Cannot be empty
      - Atleast 8 characters
      - Atleast one special character (#, @, $)
    - Confirm Password
      - Cannot be empty
      - Should match with Password
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

  const isError = Object.values(error).some(e => e == true)

  if(!isError) {
    const form = document.getElementById('sign-up-form')
    form.reset()
    alert('You have successfully submitted the form!')
  }
}