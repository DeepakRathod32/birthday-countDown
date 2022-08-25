function Welcome({ name }) {
  return (
    <div className="welcome">
      <div className="wrapper">
        <h1 className="title">Happy Birthday</h1>
        <h1 className="title">{name}!!</h1>
        <button>
          <img src="https://cdn-icons.flaticon.com/png/128/1549/premium/1549454.png?token=exp=1660833407~hmac=2d4775c8001918cafbe9e0fc051c4ba9" alt="background-img"/>
        </button>
      </div>
    </div>
  );
}

export default Welcome;
