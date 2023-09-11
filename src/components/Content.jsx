function Content({ data }) {
  console.log(data);
  return (
    <div className="card-container">
      {data.map((item) => (
        <div key={item.id} className="card">
          <img src={item.image_url} alt={item.name} className="card-image" />
          <div className="card-content">
            <h1>{item.name}</h1>
            <p>{item.description.slice(0, 200)}</p>
            <p>ABV: {item.abv}%</p>
            <p>IBU: {item.ibu}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Content;
