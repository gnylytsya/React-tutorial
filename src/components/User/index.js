const User = (props) =>  {
    return (
      <div>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>It's time: {props.date}</p>
      </div>
    )
  }

  export default User;