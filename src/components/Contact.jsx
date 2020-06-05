import React from "react";
import { useForm } from "react-hook-form";
import { Grid, Cell, Card } from "react-mdl";

export default function Contact() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <div>
      <Grid>
        <Cell col={12}>
          <h2 className="headerStyling">Contact us</h2>
        </Cell>

        <Cell col={12}>
          <Card
            style={{
              width: "500px",
              margin: "auto",
              marginBottom: "100px",
              backgroundColor: "transparent"
            }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                style={{ marginBottom: "10px", height: "50px" }}
                className="contactInputStyling"
                type="text"
                placeholder="Full name..."
                name="Full name"
                ref={register({ required: true, maxLength: 80 })}
              />

              <input
                style={{ marginBottom: "10px", height: "50px" }}
                className="contactInputStyling"
                type="text"
                placeholder="Email adress..."
                name="Email adress"
                ref={register({ required: true, pattern: /^\S+@\S+$/i })}
              />

              <textarea
                style={{ height: "150px" }}
                className="contactInputStyling"
                placeholder="Your message..."
                name="Your message"
                ref={register({ required: true })}
              />

              <Cell>
                <input
                  className="borderColor"
                  style={{
                    height: "30px",
                    width: "75px",
                    marginLeft: "45px"
                  }}
                  type="submit"
                />
              </Cell>
            </form>
          </Card>
        </Cell>
      </Grid>
    </div>
  );
}
