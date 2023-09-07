import styled from "styled-components";
import Input from "@/components/Input";
import Button from "./Button";

const FormContainer = styled.div`
  background-color: red;
`;

const TextArea = styled.textarea`
    box-sizing: border-box;
    padding: 10px;
`
export default function EnquiryForm() {
    
  return (
    <>
      <h2>Send an Enquiry</h2>
      <form>
        <label for="name">Name</label>
        <Input type="text" placeholder="John Doe" name="name" required />
        <label for="phone">Contact number</label>
        <Input type="number" placeholder="+61 123 456 789" name="email" required/>
        <label for="email">Email</label>
        <Input type="email" placeholder="eg: xyz@gmail.com" name="email" required/>
        <label for="enquiry">Enquiry Details</label>
        <TextArea
          type="text"
          placeholder="I want to know about xyz product...."
          name="enquiry"
          rows="10" cols="50" required
        />
        <div>
          <Button $primary>Send</Button>
        </div>
        
      </form>
    </>
  );
}
