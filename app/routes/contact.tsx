import {
  ActionFunction,
  Form,
  json,
  MetaFunction,
  redirect,
  useActionData,
} from "remix";
import Container from "../components/Container";
import Button from "../components/Button";
import ContactForm from "~/components/ContactForm";

import OopsImg from "../../public/img/oops.svg";

export const meta: MetaFunction = () => {
  return { title: "Contact Me" };
};

export const action: ActionFunction = async ({ request }) => {
  if (request.method !== "POST") {
    return redirect("../", 405);
  }

  const form = await request.formData();
  const name = form.get("name")?.toString();
  const email = form.get("email")?.toString();
  const message = form.get("message")?.toString();

  if (
    !name ||
    !email ||
    !message ||
    name.length < 1 ||
    email.length < 1 ||
    message.length < 1
  ) {
  }

  const query = `
    mutation createOne($name: String!, $email: String!, $message: String) {
      createContactForm(data: {
        name: $name,
        email: $email,
        message: $message
      }) {
        _id
      }
    }
  `;
  try {
    const res = await fetch("https://graphql.fauna.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.FAUNA_SECRET}`,
      },
      body: JSON.stringify({
        query,
        operationName: "createOne",
        variables: {
          name,
          email,
          message,
        },
      }),
    });

    const data = await res.json();

    if (data.errors && data.errors.length > 0) {
      throw new Error(data.errors);
    }
  } catch (error) {
    return json(
      {
        success: false,
      },
      500
    );
  }

  return json({ success: true }, 200);
};

/**@type{React.FC} */
export default function Contact() {
  const res = useActionData<{ success: boolean }>();

  if (!res)
    return (
      <Container as="section">
        <ContactForm />
      </Container>
    );

  const { success } = res;

  return (
    <>
      {success ? (
        <Container as="section" className="py-28">
          <h1 className="text-3xl font-bold">
            Your Message was sent Successfully
          </h1>
          <p className="text-xl font-medium mt-3">
            I'll hopefully reply to you soon Thanks :)
          </p>
          <Button
            as="link"
            to="/"
            variant="outlined"
            className="block max-w-max mt-4"
          >
            you can Go Home I guess
          </Button>
        </Container>
      ) : (
        <Container
          as="section"
          className="py-28 flex justify-between items-center"
        >
          <div>
            <h2 className="text-3xl font-bold">Oh oh Something went wrong</h2>
            <p className="block mt-3 mb-6 max-w-[40ch] text-xl font-medium tracking-wide leading-8">
              Sorry for the inconvenience if the problem persists please try
              after some time or better yet DM on twitter or Linked in the links
              are at the bottom of the page sorry :(
            </p>
            <Button as="link" to="/contact">
              Try Re submitting the data ?
            </Button>
          </div>
          <img
            className="block w-full max-w-[500px]"
            src={OopsImg}
            alt="Something went Horribly Wrong on our side"
          />
        </Container>
      )}
    </>
  );
}
