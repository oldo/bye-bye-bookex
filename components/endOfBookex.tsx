import Head from "next/head";
import React from "react";
import "tailwindcss/tailwind.css";

interface EndOfBookexProps {}

const EndOfBookex: React.FC<EndOfBookexProps> = ({}) => {
  return (
    <>
      <Head>
        <title>Bye Bye Bookex</title>
      </Head>
      <div className="h-screen w-screen flex flex-col items-center md:justify-center px-4">
        <img src="/logo.png" className="h-16 mb-6 mt-24 md:mt-0" />
        <div className="md:text-lg max-w-4xl text-center">
          It is with regret that we have had to shut down Bookex. We thank
          everyone who joined us for the ride - both as clients and behind the
          scenes developing the product. We are proud of what we built but it is
          now time to move on to new adventures.
        </div>
      </div>
    </>
  );
};

export default EndOfBookex;
