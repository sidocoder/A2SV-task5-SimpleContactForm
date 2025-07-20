import { useForm } from "react-hook-form";
import "../App.css";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Submitted Data:", data);
    alert("Message sent successfully!");
    reset();
  };

  return (
    <div className="form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-group">
          <label htmlFor="name" className="topic">Name</label>
          <input
            id="name"
            {...register("name", { required: "Name is required" })}
            placeholder="Your name"
          />
          {errors.name && <p className="error">{errors.name.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email" className="topic">Email</label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
            placeholder="you@example.com"
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="message" className="topic">Message</label>
          <textarea
            id="message"
            rows={5}
            {...register("message", { required: "Message is required" })}
            placeholder="Your message"
            
          />
          {errors.message && <p className="error">{errors.message.message}</p>}
        </div>

        <button type="submit">Send Message</button>

        {isSubmitSuccessful && (
          <p className="success">Thank you for your message!</p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
