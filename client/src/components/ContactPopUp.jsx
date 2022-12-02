import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import "../styles/Filter.css"
import { useSelector } from "react-redux";
const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000000a7;
  display: flex;
  z-index:999;
  align-items: center;
  justify-content: center;
`;
const General=styled.div``
const Wrapper = styled.form`
  width: 600px;
  max-height: 560px;
  background-color: #fff;
  color: ${({ theme }) => theme.text};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
`;
const Close = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;
const Title = styled.h1`
  text-align: left;
`;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  z-index: 999;
`;
const Desc = styled.textarea`
  border: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
`;
const Label = styled.label`
  font-size: 14px;
`;
const Hr=styled.div
`
height:3px;
width:100%;
background-color:grey;
box-shadow:rgb(0 0 0 / 10%) 0px 4px 9px;
`
const Radio=styled.div
`
display:flex;
align-items:center;
justify-content:space-between;
gap:20px;
`
const ContactPopUp = ({setOpenContact}) => {

  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [phone,setPhone]=useState(0)
  const handleSubmit=(e)=>
  {
console.log(e)
    e.preventDefault()
    
  }
    const {currentUser}=useSelector(state=>state.user)
  return (
    <General className="changeOP">

    <Container>
      <Wrapper>
        <Close onClick={()=>{setOpenContact(false)}}>X</Close>
        <Title>Contact Information</Title>
        <Hr/>
<div className="container">
<div className="row">
<div className="col"></div>
<form onSubmit={(e)=>{handleSubmit(e)}} className="col-lg-10">
<label>Name</label>
<input onChange={(e)=>{setName(e.target.value)}} style={{width:"100%",borderRadius:4,outline:"none",padding:5}} type="text"  defaultValue={currentUser.name}/>
<br/>
<label>Email</label>
<input onChange={(e)=>{setEmail(e.target.value)}} style={{width:"100%",borderRadius:4,outline:"none",padding:5}} type="email" defaultValue={currentUser.email}/>
<br/>
<label>Phone</label>
<input onChange={(e)=>{setPhone(e.target.value)}} style={{width:"100%",borderRadius:4,outline:"none",padding:5}} type="number" defaultValue={currentUser.phone}/>
<input style={{color:"#fff",backgroundColor:"purple",borderRadius:5,padding:5,display:"block",margin:"10px auto",cursor:"pointer",border:"none"}} type="submit" value="Submit"/>
</form>
<div className="col"></div>
</div>
</div>
      </Wrapper>
    </Container>
    </General>
  );
};

export default ContactPopUp;
