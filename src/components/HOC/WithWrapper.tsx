"use client";
import MenuDrawer from "@/modules/navigation/MenuDrawer";
import MenuTopApp from "@/modules/navigation/MenuTopApp";
import {useState} from "react";
import Container from "@/layout/Container";
import Flex from "@/layout/Flex";
import {cva} from "class-variance-authority";
import React from "react";

const wrapperClasses = cva(["flex items-center justify-center h-screen transition-all"], {
  variants: {
    isDrawerOpen: {
      true: "ml-96",
      false: "ml-auto",
    },
  },
});

interface WithWrapperProps {
  isDrawerOpen: boolean;
}

function WithWrapper<T extends WithWrapperProps>(WrappedComponent: React.ComponentType<T>) {
  return function Wrapper(props: T) {
    const [isDrawerOpen, setIsDrawerOpen] = useState(true);
    return (
      <>
        <MenuTopApp isDrawerOpen={isDrawerOpen} toggleDrawer={setIsDrawerOpen} />
        <Flex direction={"row"} gap={5} alignItems="center" justifyContent={"center"}>
          <MenuDrawer isOpen={isDrawerOpen} />
          <Container noMargin variant="main" className={wrapperClasses({isDrawerOpen})}>
            <WrappedComponent {...props} />
          </Container>
        </Flex>
      </>
    );
  };
}

export default WithWrapper;
