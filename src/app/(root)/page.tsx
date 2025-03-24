import React from "react";
import SearchForm from "../../components/search-form";
import StartupCard, {
  StartupCardType,
  StartupTypeCard,
} from "@/components/startup-card";
import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";

const HomePage = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const { query } = await searchParams;

  const posts = await client.fetch(STARTUPS_QUERY);

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
        <SearchForm query={query} />
      </section>
      <section className="section-container">
        <p className="text-30 font-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>
        <ul className="mt-7 card-grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard post={post} key={post?._id} />
            ))
          ) : (
            <p className="no-result">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
};

export default HomePage;
