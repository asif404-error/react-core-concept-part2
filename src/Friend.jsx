export default function Friend({ friend }) {
  console.log(friend);
  const {name, username, email, phone, website} = friend;
  
  return (
    <div className="card">
        {/* Using Normally */}
      {/* {<h4>Name: {friend.name}</h4>
      <p>username: {friend.username}</p>
      <p>email: {friend.email}</p> */}

      {/* Using destructuring method */}
      <h4>Name: {name}</h4>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Website: {website}</p>
    </div>
  );
}
