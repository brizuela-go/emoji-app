import * as React from "react";
import type { NextPage } from "next";

import Layout from "../components/Layout";
import List from "../components/List";
import emojisData from "../data/emojis";
import CategoryCard from "../components/CategoryCard";
import "animate.css";

const Home: NextPage = () => {
  const [currentSearch, setCurrentSearch] = React.useState("");
  const [filteredEmojis, setFilteredEmojis] = React.useState(
    emojisData.slice(0, 100)
  );

  function handleFilterByCategory(category: string) {
    setFilteredEmojis(
      emojisData.filter((emoji) =>
        emoji.group.toUpperCase().includes(category.toUpperCase())
      )
    );
  }

  function handleFilterBySearch(search: string) {
    setCurrentSearch(search.trim());
    if (search.trim().length > 0) {
      setFilteredEmojis(
        emojisData.filter((emoji) =>
          emoji.name.toUpperCase().includes(search.toUpperCase().trim())
        )
      );
    } else {
      setFilteredEmojis(emojisData.slice(0, 100));
    }
  }

  return (
    <React.Fragment>
      <Layout pageTitle="Infoemoji" metaDescription="A list of emojis">
        <h1 className=" text-2xl md:text-5xl font-bold text-text-primary text-center tracking-wide animate__animated animate__fadeInUp ">
          Welcome to Infoemoji 💡
        </h1>
        <div className="flex justify-center animate__animated animate__fadeInUp ">
          <input
            className="w-full max-w-xl border border-gray-300 p-3 rounded-md my-8 bg-white shadow-md focus:outline-none focus:border-cyan-500 focus:ring-1 focus:scale-105 transition ease-in-out focus:shadow-lg"
            id="name"
            type="text"
            placeholder="Search for an emoji"
            onChange={(e) => handleFilterBySearch(e.target.value)}
          />
        </div>
        {currentSearch.length === 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8 animate__animated animate__fadeInUp ">
            <CategoryCard
              handleFilter={handleFilterByCategory}
              emoji="😀"
              group={"Smileys & Emotion"}
            />
            <CategoryCard
              handleFilter={handleFilterByCategory}
              emoji="👨🏻"
              group={"People & Body"}
            />
            <CategoryCard
              handleFilter={handleFilterByCategory}
              emoji="🐶"
              group={"Animals & Nature"}
            />
            <CategoryCard
              handleFilter={handleFilterByCategory}
              emoji="🍔"
              group={"Food & Drink"}
            />
            <CategoryCard
              handleFilter={handleFilterByCategory}
              emoji="⚽️"
              group="Activities"
            />
            <CategoryCard
              handleFilter={handleFilterByCategory}
              emoji="🏨"
              group={"Travel & Places"}
            />
            <CategoryCard
              handleFilter={handleFilterByCategory}
              emoji="💡"
              group="Objects"
            />
            <CategoryCard
              handleFilter={handleFilterByCategory}
              emoji="⚛️"
              group="Symbols"
            />
            <CategoryCard
              handleFilter={handleFilterByCategory}
              emoji="🚩"
              group="Flags"
            />
          </div>
        )}
        {!filteredEmojis.length && (
          <p className="text-center text-xl text-gray-500">{`Sorry, we could not find an emoji of the name: "${currentSearch}"`}</p>
        )}
        <div className="animate__animated animate__fadeInUp">
          <List emojis={filteredEmojis} />
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default Home;
