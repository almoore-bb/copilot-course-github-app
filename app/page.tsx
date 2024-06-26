import React from "react";

import User from './components/User';

const Home: React.FC = () => {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <User login={'almoore-bb'} />
      </div>
    </main>
  );
};

export default Home;
