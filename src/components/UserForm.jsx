import React, {useState} from 'react';

const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");

    const createUser = (e) => {
        console.log("clicked Form Submit")
        e.preventDefault();
        const newUser = {firstname, lastname, email, password, confirmpassword};
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
        setConfirmpassword("");
    };

    const firstnameValidation = () => {
        if (firstname.length < 2) {
            return "First name must be at least two characters in length."
        } 
    };

    const lastnameValidation = () => {
        if (lastname.length < 2) {
            return "Last name must be at least two characters in length."
        } 
    };

    const emailValidation = () => {
        if (email.length < 5) {
            return "Email must be at least five characters in length."
        } 
    };

    const passwordValidation = () => {
        if (password != confirmpassword) {
            return "Passwords do not match."
        }
    };

    return(
        <div>

            <form onSubmit={createUser}>
                <div>
                    <p>{firstnameValidation()}</p>
                </div>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={ (e) => setFirstname(e.target.value)} value={firstname}/>
                </div>
                <div>
                    <p>{lastnameValidation()}</p>
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={ (e) => setLastname(e.target.value)} value={lastname}/>
                </div>
                <div>
                    <p>{emailValidation()}</p>
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={ (e) => setEmail(e.target.value)} value={email} />
                </div>
                <div>
                    <p>{passwordValidation}</p>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={ (e) => setPassword(e.target.value)} value={password} />
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={ (e) => setConfirmpassword(e.target.value)} />
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