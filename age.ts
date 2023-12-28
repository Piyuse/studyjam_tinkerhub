
function checkAge(birthyear:number):boolean{
    const c_year= new Date().getFullYear()
    let age =c_year-birthyear
    return age>=18
}
function registerUser(name:string ,birthyear:number){
      let value = checkAge(birthyear)
      if(value === true)
            console.log('user registration success')
      else
            console.log('user registration failed')
}

registerUser('jamalu',2002)
registerUser('mahira',2012)

export{ }