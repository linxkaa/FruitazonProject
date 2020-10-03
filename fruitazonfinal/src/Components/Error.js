import React from "react";
import styled from "styled-components";
export default function ErrorPage({ error }) {
  console.log(error);
  return (
    <ErrorPageWrapper>
      <div className="text-center my-5">
        <img
          src={require("../assets/img/server_down.png")}
          width="720"
          height="500"
          alt=""
        />
        <div className="text_empty">Can't open page because : {error}</div>
      </div>
    </ErrorPageWrapper>
  );
}

const ErrorPageWrapper = styled.div`
  .text_empty {
    font-size: 1rem;
  }
`;
