// Shows a page with a list of snacks that you can get from the vending machine
// By clicking on an item in the VendingMachine you can view one of things inside of the machine. 
// Clicking should update the URL and show the snack that you’ve clicked on.
// From each snack component, you should be able to go back to the main VendingMachine component.

import React from "react";
import { Link } from "react-router-dom";

function VendingMachine() {
    return (
        <div>
            <h1>Vending Machine</h1>
            <Link to="/hotcheetos">Hot Cheetos</Link><br />
            <Link to="/sprite">Sprite</Link><br />
            <Link to="/coke">Coke</Link>
        </div>
    );
}

export default VendingMachine;
