import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Text } from "@chakra-ui/react";

const MotionBox = motion(Box);
const MotionText = motion(Text);

/* passing "w" as the text width (line 67) is a hacky trick to get text to show up nicely,
  the elegant way would be calculating the width ofthe text before
  rendering it with element.getBoundingClientRect() or something alike 
*/
export default function ResizableTab({
  isOpen,
  label,
  setSelection,
  index,
  w,
  children
}) {
  return (
    <MotionBox
      as="button"
      onClick={() => setSelection(index)}
      _focus={{ outline: "none" }}
      whileHover={{ background: isOpen ? "#000000" : "#b0b0b0" }}
      display="flex"
      align="center"
      justify="center"
      px={"18px"}
      py="8px"
      h="44px"
      borderRadius="full"
      m="4px"
      overflow="hidden"
      textAlign="left"
      initial={{
        background: "#e3e3e3"
      }}
      animate={{
        background: isOpen ? "#111" : "#e3e3e3"
      }}
      transition={{
        duration: 0.3
      }}
    >
      {children}
      <MotionBox
        initial={{
          opacity: 0,
          height: 0
        }}
        animate={{
          opacity: isOpen ? 1 : 0,
          width: isOpen ? "auto" : 0,
          height: isOpen ? "auto" : 0
        }}
        exit={{
          opacity: 0,
          height: 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {/* AnimatePresence is necessary because the text has to be
          removed from the DOM and can't just be hidden      
      */}
        <AnimatePresence>
          {isOpen && (
            <MotionText
              fontWeight="600"
              w={w}
              ml="8px"
              fontSize="18px"
              textAlign="left"
              initial={{ color: "#000" }}
              animate={{
                color: isOpen ? "#fff" : "#000"
              }}
              transition={{
                duration: 0.25,
                ease: "easeOut"
              }}
            >
              {label}
            </MotionText>
          )}
        </AnimatePresence>
      </MotionBox>
    </MotionBox>
  );
}
