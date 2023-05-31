import CardComponent from "./components/card";
import Head from "next/head";
import HeaderComponent from "./components/header";
import NonSSRWrapper from "./utils/no-ssr-wrapper";
import SearchComponent from "./components/search";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <NonSSRWrapper>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <HeaderComponent />
        <SearchComponent />
        <CardComponent
          type="store"
          imageSrc={""}
          title={""}
          description={""}
          link={""}
          statues={""}
          createdAt={""}
        />
      </NonSSRWrapper>
    </>
  );
}
