import React from "react";
import HornedBeast from "./HornedBeast";

class Main extends React.Component {
  render() {
    return <div>
    <HornedBeast />
    <h2>This is my title</h2>
    <img 
    src="https://www.princeton.edu/sites/default/files/styles/half_2x/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=iQEwihUn"
    alt="happy puppy"
    />
    <p> This is my description: A page for puppies</p>
    
    </div>
  }
}



export default Main;
