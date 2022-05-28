
import './App.css';

function App() {
var greeting = '';

const style1 ={};
  
// debugger;
 let dt =  new Date();

 var hr = dt.getHours()
console.log(dt);
if (hr>0&&hr<13) {
  greeting="Good Morning";
  style1.color="yellow";
  style1.underline="true";
} else if (hr>12&&hr<17){
  greeting="Good Afternoon";
  style1.color="orange";
  style1.textDecorationLine= 'underline';
  
}else{
  greeting="Good Evening";
  style1.color="blue";
style1.underline="true";

}



  return (
   <>

<center><h1>Hello Sir <span  style = {style1}>{greeting}</span></h1>
</center>


   </>


  );
}

export default App;
