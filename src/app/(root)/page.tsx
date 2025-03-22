import React from "react";
import SearchForm from "../components/search-form";

const HomePage = () => {
  return (
    <>
      <section className="pink-container ">
        {" "}
        <h1 className="heading">
          Pitch Your Startup, <br /> Connect With Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
        <SearchForm />
      </section>
    </>
  );
};

export default HomePage;
