import React, { useState } from "react";
import Container from "~/components/Container";
import LatestBlogSection from "~/components/home/LatestBlogSection";
import { Input } from "~/components/Input";

const Index = () => {
  const [query, setQuery] = useState("");

  return (
    <Container as="section" className="py-10">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">My Blogs</h1>
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full max-w-md peer"
          type="search"
          placeholder="Search Articles"
        />
      </div>
      {/* Blogs list goes here */}
    </Container>
  );
};

export default Index;
