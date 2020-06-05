import React from "react";
import { useForm } from "react-hook-form";
import { Grid, Cell } from "react-mdl";
export default function CreateEstablishment() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <div>
      <Grid>
        <Cell col={12}>
          <h3 className="headerStyling">Create establishment</h3>
        </Cell>
        <Cell col={3} offsetDesktop={4} offsetTablet={1}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="createEstablishmentInput"
              type="text"
              placeholder="Establishment name"
              name="Establishment name"
              ref={register({ required: true, maxLength: 80 })}
            />
            <input
              className="createEstablishmentInput"
              type="text"
              placeholder="Establishment email"
              name="Establishment email"
              ref={register({ required: true, maxLength: 100 })}
            />
            <input
              className="createEstablishmentInput"
              type="text"
              placeholder="Image URL"
              name="Image URL"
              ref={register({ required: true })}
            />
            <input
              className="createEstablishmentInput"
              type="number"
              placeholder="Price per person - per night"
              name="Price per person - per night"
              ref={register({ required: true, maxLength: 12 })}
            />
            <input
              className="createEstablishmentInput"
              type="number"
              placeholder="Max guests"
              name="Max guests"
              ref={register({ required: true, maxLength: 2 })}
            />
            <input
              className="createEstablishmentInput"
              type="text"
              placeholder="Google coordinates latitude"
              name="Google coordinates latitude"
              ref={register({ required: true })}
            />
            <input
              className="createEstablishmentInput"
              type="text"
              placeholder="Google coordinates longitude"
              name="Google coordinates longitude"
              ref={register({ required: true })}
            />
            <input
              className="createEstablishmentInput"
              type="text"
              placeholder="Description"
              name="Description"
              ref={register({ required: true })}
            />

            <p style={{ color: "white" }}>Self-catering:</p>
            <input
              name="Self-catering"
              type="radio"
              value="Yes"
              ref={register({ required: true })}
            />
            <label style={{ color: "white" }} for="Yes">
              Yes
            </label>
            <input
              name="Self-catering"
              type="radio"
              value="No"
              ref={register({ required: true })}
            />
            <label style={{ color: "white" }} for="No">
              No
            </label>

            <input
              className="borderColor"
              style={{ marginLeft: "20px" }}
              type="submit"
            />
          </form>
        </Cell>
      </Grid>
    </div>
  );
}
