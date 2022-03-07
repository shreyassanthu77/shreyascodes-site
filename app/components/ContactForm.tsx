import { Form } from "remix";
import Container from "./Container";

import ContactGraphic from "../../public/img/contact_graphic.svg";
import Button from "./Button";
import { Input, TextArea } from "./Input";

const ContactForm = () => {
  return (
    <Container
      as="section"
      id="contact"
      className="flex justify-between items-center gap-x-10 py-12"
    >
      <Form className="flex-1 max-w-[750px]" action="/contact" method="post">
        <h3 className="text-3xl font-medium">Contact</h3>
        <div className="mt-4 flex flex-col gap-y-2">
          <label htmlFor="name">Name</label>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="Joh Doe"
            required
          />
        </div>
        <div className="flex flex-col gap-y-2 mt-4">
          <label htmlFor="email">E-Mail</label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="johndoe@email.com"
            required
          />
        </div>
        <div className="flex flex-col gap-y-2 mt-4">
          <label htmlFor="message">Message</label>
          <TextArea
            className="outline-none px-4 py-2 bg-primary-dark rounded-t border-b-2 border-gray-300 focus:border-teal-500 transition-colors duration-150 resize-none"
            placeholder="Your Message Here"
            name="message"
            id="message"
            rows={10}
            required
          />
        </div>
        <Button
          className="mt-6 w-full bg-teal-600 border-teal-600 hover:bg-teal-700 focus:bg-teal-700 hover:border-teal-700 focus:border-teal-700"
          type="submit"
        >
          Save
        </Button>
      </Form>
      <img src={ContactGraphic} alt="Contact us" className="max-w-[550px]" />
    </Container>
  );
};

export default ContactForm;
