import React from 'react'

const UserList = () => {

    const users = [
        { id: 1, name:"Bob", age:19},
        { id: 2, name:"Alice", age:20},
        { id: 3, name:"Mary", age:18}
    ]
  return (
    <div>
      { users.map(details=>(
        <ul key={details.id}>
            <li>Name: {details.name}</li>
            <li>Age: {details.age}</li>
        </ul>
      ))}
    </div>
  )
}

export default UserList
