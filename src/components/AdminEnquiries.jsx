import React from "react";
import { Grid, Cell, Card } from "react-mdl";

const AdminEnquiries = () => {
  return (
    <div>
      <Grid>
        <Cell col={12}>
          <h3 className="headerStyling">Recieved enquiries:</h3>
        </Cell>
        <Card className="enquiriesCard" style={{ backgroundColor: "#f13d12" }}>
          <p className="enquiriesText">Establishment: Sunset Beach</p>
          <p className="enquiriesText">Client name: Mike Tindall</p>
          <p className="enquiriesText">Email: miket@gmail.com</p>
          <p className="enquiriesText">Check-in: 2019.05.03</p>
          <p className="enquiriesText">Check-out: 2019.05.05</p>
        </Card>
        <Card className="enquiriesCard" style={{ backgroundColor: "#f13d12" }}>
          <p className="enquiriesText">Establishment: Farm cottage</p>
          <p className="enquiriesText">Client name: Maria Debussey</p>
          <p className="enquiriesText">Email: mariedub@outlook.com</p>
          <p className="enquiriesText">Check-in: 2020.01.01</p>
          <p className="enquiriesText">Check-out: 2020.05.01</p>
        </Card>
      </Grid>
    </div>
  );
};

export default AdminEnquiries;
