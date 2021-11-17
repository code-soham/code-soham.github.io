import React from "react";
import { TextField, Button } from "@mui/material";
import { useForm, ValidationError } from "@formspree/react";
export default function Footer() {
  const [state, handleSubmit] = useForm("xayarlwj");
  return (
    <React.Fragment>
      <div className="footer">
        <div className="foot-l-div">
          <form className="form-div" onSubmit={handleSubmit}>
            <div>
              <TextField
                id="email"
                type="email"
                name="email"
                variant="outlined"
                label="Email"
                required={true}
                fullWidth
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            <div>
              <TextField
                id="message"
                name="message"
                multiline
                aria-label="message"
                variant="outlined"
                label="Message"
                required={true}
                fullWidth
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <div>
              <Button
                type="submit"
                size="large"
                variant="contained"
                className="Button"
                disabled={state.submitting}
                fullWidth
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
      {/* </div> */}
    </React.Fragment>
  );
}
