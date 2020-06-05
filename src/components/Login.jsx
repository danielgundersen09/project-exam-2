import React from "react";
import { useForm } from "react-hook-form";
import { Grid, Cell } from "react-mdl";
import { Link } from "react-router-dom";
export default function Login() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <div>
      <Grid>
        <Cell col={12}>
          <h3
            style={{ color: "white", textAlign: "center", marginTop: "100px" }}
          >
            Login with username and password
          </h3>
        </Cell>

        <Cell
          col={12}
          offsetDesktop={4}
          offsetTablet={1}
          style={{ marginBottom: "200px" }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="loginInput"
              type="text"
              placeholder="Username"
              name="Username"
              ref={register({ required: true, maxLength: 80 })}
            />

            <input
              className="loginInput"
              type="password"
              placeholder="Password"
              name="Password"
              ref={register({ required: true })}
            />
            <Link to="/Messages">
              <input
                className="borderColor"
                style={{
                  marginLeft: "155px",
                  borderRadius: "3px",
                  width: "70px"
                }}
                type="submit"
                value="Log in"
              />
            </Link>
          </form>
        </Cell>
      </Grid>
    </div>
  );
}
