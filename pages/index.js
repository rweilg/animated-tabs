import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Flex, Box } from "@chakra-ui/react";
import Folder from "./icons/Folder";
import Bell from "./icons/Bell";
import ResizableTab from "./components/Tab";
import User from "./icons/User";
import { useState } from "react";

export default function Home() {
  const [selection, setSelection] = useState(0);
  return (
    <div className={styles.container}>
      <Head>
        <title>Resizable Tabs by Rodrigo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box display={["block", "none"]} h="91vh" />
      <Flex
        bg="#fff"
        boxShadow="0px 6px 24px 2px rgba(0,0,0,0.14)"
        w={["100vw", "auto"]}
        h={["auto", "52px"]}
        justify="center"
        align={["center"]}
        borderRadius={["0", "full"]}
      >
        <ResizableTab
          isOpen={selection === 0}
          label="Files"
          index={0}
          setSelection={setSelection}
          w="40px"
        >
          <Folder isOpen={selection === 0} />
        </ResizableTab>

        <ResizableTab
          isOpen={selection === 1}
          label="Notifications"
          index={1}
          setSelection={setSelection}
          w="108px"
        >
          <Bell isOpen={selection === 1} />
        </ResizableTab>

        <ResizableTab
          isOpen={selection === 2}
          label="Profile"
          index={2}
          setSelection={setSelection}
          w="56px"
        >
          <User isOpen={selection === 2} />
        </ResizableTab>

        <Box display={["block", "none"]} h="70px" />
      </Flex>
    </div>
  );
}
