import React from "react";
import { Grid, Cell, Card, CardTitle, CardText } from "react-mdl";
import { useForm } from "react-hook-form";

export default function HotelSpecific() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <div>
      <Grid>
        <Cell col={12} offsetDesktop={1}>
          <h3 style={{ color: "white" }}>Sunset beach</h3>
        </Cell>
        <Cell col={5} offsetDesktop={1}>
          <Card style={{ width: "500px" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "300px",
                background: "url(/images/hotel1.jpg) center / cover"
              }}
            ></CardTitle>
            <CardText
              className="secondaryColor-backgroundColor"
              style={{
                width: "500px",
                paddingRight: "20px",
                color: "#fff"
              }}
            >
              Establishment email: info@sunsetbeach.com
              <br />
              Price: 85$ <br />
              Max guests: 18 <br />
              Self-catering: yes
            </CardText>
          </Card>
          <p style={{ color: "white", marginTop: "10px" }}>
            Get ready for some amazing sunsets as you sip a cocktail and watch
            dolphins play in the harbour below.
          </p>
        </Cell>
        <Cell col={3} tablet={8} offsetDesktop={1}>
          <h3 style={{ color: "white" }}>Make enquiry</h3>
          <div className="specificForm">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="hotelSpecificInput"
                type="text"
                placeholder="Client name"
                name="Client name"
                ref={register({ required: true, maxLength: 80 })}
              />
              <input
                className="hotelSpecificInput"
                type="text"
                placeholder="Your email"
                name="Client email"
                ref={register({ required: true, pattern: /^\S+@\S+$/i })}
              />
              <input
                className="hotelSpecificInput"
                type="datetime"
                placeholder="Check-in"
                name="Check-in"
                ref={register({ required: true, maxLength: 9 })}
              />

              <input
                className="hotelSpecificInput"
                type="datetime"
                placeholder="Check-out"
                name="Check-out"
                ref={register({ required: true, maxLength: 9 })}
              />

              <input className="borderColor" type="submit" />
            </form>
          </div>
        </Cell>
      </Grid>
    </div>
  );
}
