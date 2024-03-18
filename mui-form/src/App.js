import "./App.css";
import { useState } from "react";
import { Button, Container, Stack, TextField } from "@mui/material";
function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [address, setAddress] = useState("");
  const [lastNameErr, setLastNameErr] = useState(false);
  const [firstNameErr, setFirstNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [phoneNoErr, setPhoneNoErr] = useState(false);
  const [addressErr, setAddressErr] = useState(false);
  // const [btnDisable, setBtnDisable] = useState(true);
  
  const submitForm = (e) => {
    e.preventDefault();

    console.log("form submitted");
  };
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    if (e.target.value.length === 0) {
      setFirstNameErr("First Name is required");
    } else if (e.target.value.length < 3) {
      setFirstNameErr("First Name must be at least 3 characters long");
    } else if (e.target.value.length > 20) {
      setFirstNameErr("First Name must be less than 20 characters long");
    } else if (!/^[a-zA-Z]+$/.test(e.target.value)) {
      setFirstNameErr("First Name must contain only letters");
    } else {
      setFirstNameErr(false);
    }
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    if (e.target.value.length === 0) {
      setLastNameErr("Last Name is required");
    } else if (e.target.value.length < 3) {
      setLastNameErr("Last Name must be at least 3 characters long");
    } else if (e.target.value.length > 20) {
      setLastNameErr("Last Name must be less than 20 characters long");
    } else if (!/^[a-zA-Z]+$/.test(e.target.value)) {
      setLastNameErr("Last Name must contain only letters");
    } else {
      setLastNameErr(false);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length === 0) {
      setEmailErr("Email is required");
    } else if (
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(e.target.value)
    ) {
      setEmailErr("Enter valid Email");
    } else {
      setEmailErr(false);
    }
  };
  const handlePhoneNoChange = (e) => {
    setPhoneNo(e.target.value);
    if(e.target.value.length===0){
      setPhoneNoErr("Phone Number is required");
    }
    else if (e.target.value.length > 10 || e.target.value.length < 10) {
      setPhoneNoErr("Phone Number should be of 10 digits");
    } else {
      setPhoneNoErr(false);
    }
  };
const handleDateChange = (e)=>{
  setDateOfBirth(e.target.value)
 
}
const handleAddressChange = (e)=>{
  setAddress(e.target.value)
  if(e.target.value.length === 0 ){
    setAddressErr("Address is required")
  }
  else{
    setAddressErr(false)
  }
}
  return (
    <div>
      <Container maxWidth="lg">
        <h1 style={{ textAlign: "center" }}>Personal Details</h1>
        <form onSubmit={submitForm}>
          <Stack direction="row" sx={{ mb:5}} spacing={2}>
            <TextField
              type="text"
              placeholder="First Name"
              variant="outlined"
              color="secondary"
              label="First Name"
              required
              fullWidth
              sx={{ mb: 5 }}
              value={firstName}
              onChange={handleFirstNameChange}
              error={firstNameErr}
              helperText={firstNameErr}
            />

            <TextField
              type="text"
              placeholder="Last Name"
              variant="outlined"
              color="secondary"
              label="Last Name"
              required
              fullWidth
              sx={{ mb: 5 }}
              value={lastName}
              onChange={handleLastNameChange}
              error={lastNameErr}
              helperText={lastNameErr}
            />
          </Stack>

          <TextField
            type="text"
            placeholder="Email"
            variant="outlined"
            color="secondary"
            label="Email"
            fullWidth
            sx={{ mb: 5 }}
            required
            value={email}
            onChange={handleEmailChange}
            error={emailErr}
            helperText={emailErr}
          />

          <TextField
            type="number"
            placeholder="Phone Number"
            variant="outlined"
            color="secondary"
            label="Phone Number"
            fullWidth
            sx={{ mb: 5 }}
            required
            value={phoneNo}
            onChange={handlePhoneNoChange}
            error={phoneNoErr}
            helperText={phoneNoErr}
          />

          <TextField
            type="date"
            variant="outlined"
            color="secondary"
            label="Date Of Birth"
            fullWidth
            sx={{ mb: 5 }}
            required
            InputLabelProps={{ shrink: true }}
            value={dateOfBirth}
            onChange={handleDateChange }
          />
          <TextField
            type="text"
            placeholder="Address"
            variant="outlined"
            color="secondary"
            label="Address"
            fullWidth
            multiline
            rows={2}
            sx={{ mb: 5 }}
            required
            value={address}
            onChange={handleAddressChange}
            error={addressErr}
            helperText={addressErr}
          />
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Submit
          </Button>
        </form>
      </Container>
    </div>
  );
}

export default App;
