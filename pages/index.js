import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Flex } from "@chakra-ui/react";
import Folder from "./icons/Folder";
import Bell from "./icons/Bell";
import Pill from "./components/Pill";
import User from "./icons/User";
import { useState } from "react";

export default function Home() {
  const [selection, setSelection] = useState(0);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex
        bg="#fff"
        boxShadow="0px 6px 24px 2px rgba(0,0,0,0.14)"
        w="auto"
        h="52px"
        justify="center"
        align="center"
        borderRadius="full"
      >
        <Pill
          isOpen={selection === 0}
          label={"Files"}
          index={0}
          setSelection={setSelection}
          w="40px"
        >
          <Folder isOpen={selection === 0} />
        </Pill>

        <Pill
          isOpen={selection === 1}
          label="Notifications"
          index={1}
          setSelection={setSelection}
          w="108px"
        >
          <Bell isOpen={selection === 1} />
        </Pill>

        <Pill
          isOpen={selection === 2}
          label="Profile"
          index={2}
          setSelection={setSelection}
          w="56px"
        >
          <User isOpen={selection === 2} />
        </Pill>
      </Flex>
    </div>
  );
}
