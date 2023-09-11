import styled from "styled-components";
import Input from "@/components/Input";
import Button from "./Button";
import axios from "axios";
import { useState } from "react";

const FormContainer = styled.div`
  background-color: red;
`;

const CenterTextArea= styled.div`
  display: flex;
  justify-content: center;   /* For horizontal centering */
  align-items: center;       /* For vertical centering */
  /* height: 100vh;             Taking full viewport height */
`;

const TextArea = styled.textarea`
  display: block;
  box-sizing: border-box;

  padding: 15px;
`;
export default function EnquiryForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [enquiry, setEnquiry] = useState("");

  const handleEnquirySubmit = async function (e) {
    e.preventDefault();
    const enquiryData = {
      name,
      phone,
      email,
      enquiry,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/api/enquries",
        enquiryData
      );
      if (response.status === 200 && response.data && response.data.url) {
        console.log("Data Sent");
      } else {
        console.log(
          "Order placed successfully, but failed to redirect to Stripe checkout."
        );
      }
    } catch (error) {
      console.log("Enquiry not submitted");
    }
  };
  return (
    <>
      <h2>Send an Enquiry</h2>
      <form onSubmit={handleEnquirySubmit}>
        <label htmlFor="name">Name</label>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="John Doe"
          name="name"
          required
        />
        <label htmlFor="phone">Contact number</label>
        <Input
          type="number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+61 123 456 789"
          name="phone"
          required
        />
        <label htmlFor="email">Email</label>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="eg: xyz@gmail.com"
          name="email"
          required
        />
        <label htmlFor="enquiry">Enquiry Details</label>
        <CenterTextArea>
          <TextArea
            value={enquiry}
            onChange={(e) => setEnquiry(e.target.value)}
            placeholder="I want to know about xyz product...."
            name="enquiry"
            rows="10"
            cols="50"
            required
          />
        </CenterTextArea>
        <div>
          <Button type="submit" $primary>
            Send
          </Button>
        </div>
      </form>
    </>
  );
}
