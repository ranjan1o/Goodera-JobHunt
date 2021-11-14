import { useState } from "react"
import styled from "styled-components"
import axios from "axios";
const jobCardWrapaper = styled.div`

.section{
    width: 400px;
    border: 1px solid black;
   
}
`

const JobCard = () => {
    const [data, SetData] = useState({});
     const handleChange = (e) => {
        const { name, value } = e.target;
        SetData({
            ...data,
            [name]: value,
        });

    };
    console.log(data)
    const handleSave = () => {
        axios.post("http://localhost:8000/jobpost/post",data)
    }

    return <jobCardWrapaper>
        <div className="section">
        
          <div> description <input  onchange={handleChange} name="description" type="text"></input> </div>
         <div>   title<input  onchange={handleChange} name="title" type="text"></input> </div>
         <div> image link  <input  onchange={handleChange} name="image" type="text" /> </div>
          <div>  type<input  onchange={handleChange} name="type" type="text" /> </div>
        <div>  publication_date  <input  onchange={handleChange} name="publication_date" type="text" /> </div>
         <div>  id <input  onchange={handleChange} name="id" type="text" /> </div>
         <div>  location <input  onchange={handleChange} name="location" type="text" /> </div>
         <div>   level<input  onchange={handleChange} name="level" type="text" /> </div>
          <div> tags <input  onchange={handleChange} name="tags" type="text" /> </div>
         <div>  comapny <input  onchange={handleChange} name="comapny" type="text" /> </div>
           
            
        </div>
        <button onClick={handleSave}></button>
        </jobCardWrapaper>
}
export {JobCard}