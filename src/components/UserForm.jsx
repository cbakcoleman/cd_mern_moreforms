import React, {useState} from 'react';

const UserForm = (props) => {
    // FOR FORM INPUT
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    // FOR VALIDATIONS
    const [firstnameErr, setfirstnameErr] = useState("");
    const [lastnameErr, setlastnameErr] = useState("");
    const [emailErr, setemailErr] = useState("");
    const [passwordErr, setpasswordErr] = useState("");

    // FORM ONSUBMIT FUNCTION?
    const createUser = (e) => {
        e.preventDefault();
        // FIRST NAME VALIDATION
        if (firstname.length < 2) {
            setfirstnameErr("First name must be at least two characters in length.")
        } else {
            setfirstnameErr("");
        }
        // LAST NAME VALIDATION
        if (lastname.length < 2) {
            setlastnameErr("Last name must be at least two characters in length.")
        } else {
            setlastnameErr("");
        }
        // EMAIL VALIDATION
        if (email.length < 5) {
            setemailErr("Email must be at least five characters in length.")
        } else {
            setemailErr("");
        }
        // PASSWORD VALIDATION
        if (password !== confirmpassword) {
            setpasswordErr("Passwords do not match.")
        } else {
            setpasswordErr("");
        }
        // CREATE NEWUSER
        const newUser = {firstname, lastname, email, password, confirmpassword};
        // CONSOLE LOG TO SEE WHAT'S GOING ON
        console.log(newUser);
        // CONSOLE LOG WELCOME
        console.log("Welcome" + " " + firstname + " " + lastname)
        // RESET INPUT FIELDS?
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
        setConfirmpassword("");
    };

    // VALIDATIONS AS SEPERATE FUNCTIONS

    // const firstnameValidation = () => {
    //     if (firstname.length < 2 && firstname.length > 0) {
    //         return "First name must be at least two characters in length."
    //     } 
    // };

    // const lastnameValidation = () => {
    //     if (lastname.length < 2 && lastname.length > 0) {
    //         return "Last name must be at least two characters in length."
    //     } 
    // };

    // const emailValidation = () => {
    //     if (email.length < 5 && email.length > 0) {
    //         return "Email must be at least five characters in length."
    //     } 
    // };

    // THIS VALIDATION IS NOT YET CORRECT
    // const passwordValidation = () => {
    //     if (password != confirmpassword && password > 0 && confirmpassword > 0) {
    //         return "Passwords do not match."
    //     }
    // };

    return(
        <div>
            <form onSubmit={createUser}>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={ (e) => setFirstname(e.target.value)} value={firstname}/> <br/>
                    {
                        firstnameErr ? <span style={{color: "red"}}>{firstnameErr}</span> : <span>&nbsp;</span>
                    }
                </div>
                
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={ (e) => setLastname(e.target.value)} value={lastname}/> <br/>
                    { lastnameErr ? <span style={{color: "red"}}>{lastnameErr}</span> : <span>&nbsp;</span>}
                </div>
                
                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={ (e) => setEmail(e.target.value)} value={email} /> <br/>
                    { emailErr ? <span style={{color: "red"}}>{emailErr}</span> : <span>&nbsp;</span>}
                </div>
                
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={ (e) => setPassword(e.target.value)} value={password} /> <br/>
                    { passwordErr ? <span style={{color: "red"}}>{passwordErr}</span> : <span>&nbsp;</span>}
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={ (e) => setConfirmpassword(e.target.value)} value={confirmpassword}/>
                </div>

                <div>
                    <input type="Submit" value="Create User" />
                </div>

            </form>
                <h3>Your Form Data: </h3>
                <p>First Name: {firstname}</p>
                <p>Last Name: {lastname}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmpassword}</p>
        </div>
    )
}

export default UserForm;