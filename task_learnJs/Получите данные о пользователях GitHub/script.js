async function getUsers(names) {
    let usersAPI = []
   for(let login of names) {
    let response = await fetch(`https://api.github.com/users/${login}`) 
    .then(res => res.status != 200 ? null : res.json())
    .then(res => usersAPI.push(res))
   }
    return usersAPI
  }

  




  
  let users = await getUsers(['iliakan', 'remy', 'no.such.users']);
  console.log(users)

  console.log(users[2])