import React from "react";
import styled from "styled-components";

import Title from "@/components/atoms/Title";

const Contact = () => {
  return (
    <Container id="contact">
      <Grid>
        <Title>Lorem Ipsum is not simply random text.</Title>
        <div style={{ width: "50%", marginRight: "auto" }}>
          Lorem Ipsum has been the industrys standard dummy text ever since the
          1500s.
        </div>
      </Grid>
      <form>
        <Grid>
          <div>
            <h2> Lorem Ipsum</h2>
            <Grid>
              <div>
                <label>
                  <input type="checkbox" />
                  Lorem Ipsum has been
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" />
                  Lorem Ipsum has been
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" />
                  Lorem Ipsum has been
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" />
                  Lorem Ipsum has been
                </label>
              </div>
            </Grid>
          </div>
          <div>
            <h2> Lorem Ipsum</h2>
            <div>
              <input type="text" required />
            </div>
            <div>
              <input type="email" required />
            </div>
            <div>
              <textarea rows={10} required />
            </div>
            <div>
              <label>
                <input type="checkbox" />
                Lorem Ipsum has been
              </label>
              <button>submit</button>
            </div>
          </div>
        </Grid>
      </form>
    </Container>
  );
};

export default Contact;

const Container = styled.div``;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
