import React from "react";
import { useAppSelector, useAppDispatch } from './hooks'

export default function PrintUserState() {
    const firstname = useAppSelector((state) => state.user.FirstName)
    const lastname = useAppSelector((state) => state.user.LastName)
    const inputemail = useAppSelector((state) => state.user.Email)
    const inputpassword = useAppSelector((state) => state.user.Password)
    
  
  
  
    console.log(firstname)
    console.log(lastname)
    console.log(inputemail)
    console.log(inputpassword)

  return (
    <div>Test</div>
  )
}
