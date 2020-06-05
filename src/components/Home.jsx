import React from "react";
import { Grid, Cell, Card, CardTitle, CardText } from "react-mdl";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Grid>
        <Cell col={12}>
          <h3 className="headerStyling">Hotels, B&B´s and guesthouses:</h3>
        </Cell>

        <Card className="cards grow">
          <Link
            to="/HotelSpecific"
            style={{ textDecoration: "underline #f13d12" }}
          >
            <CardTitle
              style={{
                color: "#fff",
                height: "225px",
                background: "url(/images/hotel1.jpg) center / cover"
              }}
            >
              Sunset Beach
            </CardTitle>
            <CardText
              className="secondaryColor-backgroundColor"
              style={{
                textAlign: "left",
                color: "#fff",

                width: "375px",
                lineHeight: "25px",
                padding: "10px",
                borderTop: "2px solid white"
              }}
            >
              Price per night: 85$ <br />
              Max guests: 18
            </CardText>
          </Link>
        </Card>

        <Card className="cards grow">
          <Link
            to="/HotelSpecific"
            style={{ textDecoration: "underline #f13d12" }}
          >
            <CardTitle
              style={{
                color: "#fff",
                height: "225px",
                background: "url(/images/hotel2.jpg) center / cover"
              }}
            >
              Rest Easy
            </CardTitle>
            <CardText
              className="secondaryColor-backgroundColor"
              style={{
                textAlign: "left",
                color: "#fff",
                width: "375px",
                lineHeight: "25px",
                padding: "10px",
                borderTop: "2px solid white"
              }}
            >
              Price per night: 120$ <br />
              Max guests: 14
            </CardText>
          </Link>
        </Card>

        <Card className="cards grow">
          <Link
            to="/HotelSpecific"
            style={{ textDecoration: "underline #f13d12" }}
          >
            <CardTitle
              style={{
                color: "#fff",
                height: "225px",
                background: "url(/images/cabin1.jpg) center / cover"
              }}
            >
              Farm Cottage
            </CardTitle>
            <CardText
              className="secondaryColor-backgroundColor"
              style={{
                textAlign: "left",
                color: "#fff",
                width: "375px",
                lineHeight: "25px",
                padding: "10px",
                borderTop: "2px solid white"
              }}
            >
              Price per night: 100$ <br />
              Max guests: 8
            </CardText>
          </Link>
        </Card>
      </Grid>
    </div>
  );
};

export default Home;
