import { Button } from "@fluentui/react-components";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>My app</title>
      </Head>

      <div>
        <Button>A button</Button>
      </div>
    </>
  );
};

export default Home;
