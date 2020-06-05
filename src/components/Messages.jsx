import React from "react";
import { Grid, Cell, Card } from "react-mdl";

const Messages = () => {
  return (
    <div>
      <Grid>
        <Cell col={12}>
          <h3 className="headerStyling">Client messages</h3>
        </Cell>
        <Card className="messageCard" style={{ backgroundColor: "#f13d12" }}>
          <p className="messageText">Client name: Susan Lispinsky</p>
          <p className="messageText">Email address: susanl@gmail.com</p>
          <p className="messageText">
            Message: I'd like to add my establishment to the website please.
          </p>
        </Card>

        <Card className="messageCard" style={{ backgroundColor: "#f13d12" }}>
          <p className="messageText">Client name: Marie Debussey</p>
          <p className="messageText">Email address: mariedub@outlook.com</p>
          <p className="messageText">
            Message: Hello. I'd like to cancel a booking. Can you assist me?
          </p>
        </Card>
        <Card className="messageCard" style={{ backgroundColor: "#f13d12" }}>
          <p className="messageText">Client name: Vegard Andersen</p>
          <p className="messageText">Email address: vegard@gmail.com</p>
          <p className="messageText">
            Message: Hello. I didn't enjoy the last place I stayed at and would
            like to make a complaint.
          </p>
        </Card>
      </Grid>
    </div>
  );
};

export default Messages;
