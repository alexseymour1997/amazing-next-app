import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [data, setData] = useState(null);

  const getData = async () => {
    axios
      .get(
        `https://amazing-next-app-backend-amazing-next-app.ibmcloud-roks-wgiztgdm-6ccd7f378ae819553d37d5f2ee142bd6-0000.us-east.containers.appdomain.cloud`
      )
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <button onClick={getData}>Get Data</button>

      <div>{data}</div>
    </div>
  );
}
