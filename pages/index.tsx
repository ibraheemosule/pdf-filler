import type { NextPage } from "next";
import { IIndexPageProps } from "../ts-types/componentTypes";
import Navbar from "../components/Navbar";
const Home: NextPage<IIndexPageProps> = () => {
  return (
    <>
      <Navbar />
    </>
  );
};

export default Home;
