
function Monitoring (props) {
  var {data} = props;
  var classe ="";
  if(!data){
    return <div>no data</div>
  }
    if (data.heartrate<50){
      classe = "lowRate";
    }
    else if (data.heartrate>120) {
      classe ="hightRate";
    }
    else {
      classe="good";
    }
  return (<div id={classe}> {data.heartrate} bpm </div>)
}
export default Monitoring
