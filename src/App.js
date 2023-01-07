import './App.css';
// import Easy from './components/easy';
import BasicInfo from './components/BasicInfo';
// import Hard from './components/hard';
// this.state = [
//   person = "John Doe",
//   number = "000-000-000",
//   dob = "09-12-22"
// ]
      

function App() {
  return (

    <div className="App">
      <h3> Basic Info</h3>
<p> ------------------- </p>
        {/* 
        
        VERY EASY 
        -----------
         <p>
    Name: John Doe
      <br></br>
      <br></br>
    Number: 999-999-9999
      <br></br>
      <br></br>
    DOB: 01-11-01
        </p> */}


{/* <Easy Person = "John Doe"  Number = "999-999-9999" DOB = "01-11-01"></Easy> */}


    <BasicInfo person = "Evan DeGraff"  number = "999-999-9999" dob = "05-17-97"/>

    <BasicInfo person = "Jane Doe"  number = "111-333-3333" dob = "12-12-12"/>

    <BasicInfo person = "zion william"  number = "336-339-3136" dob = "05-13-53"/>


    <BasicInfo person = "jordan clark"  number = "770-851-7488" dob = "04-14-99"/>

    <BasicInfo person = "michael jack"  number = "680-976-3507" dob = "04-25-97"/>

    {/* <Hard></Hard> */}
    </div>
  );
}

export default App;

