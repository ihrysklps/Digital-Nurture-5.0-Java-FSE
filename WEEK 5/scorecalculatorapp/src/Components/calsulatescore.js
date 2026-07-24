import "../Stylesheets/mystyle.css";

function CalculateScore(props) {
  const average = props.Total / props.Goal;

  return (
    <div className="container">
      <h1>Student Score Calculator</h1>

      <p><strong>Name :</strong> {props.Name}</p>

      <p><strong>School :</strong> {props.School}</p>

      <p><strong>Total Marks :</strong> {props.Total}</p>

      <p><strong>Subjects :</strong> {props.Goal}</p>

      <h2>Average Score : {average}</h2>
    </div>
  );
}

export default CalculateScore;