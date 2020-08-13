import React from "react";
// import styled from "styled-components";

export default function Loading() {
  return (
    <div className="text-center my-3">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
