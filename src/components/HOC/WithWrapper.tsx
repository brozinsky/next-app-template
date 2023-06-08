"use client";
import MenuDrawer from "@/modules/navigation/MenuDrawer";
import MenuTopApp from "@/modules/navigation/MenuTopApp";
import {useState} from "react";
import Container from "@/layout/Container";
import Flex from "@/layout/Flex";
import {cva} from "class-variance-authority";
import React from "react";
import Breadcrumbs from '@/modules/navigation/Breadcrumbs';
import { useMenuDrawer } from "@/store/useDrawerStore";

const wrapperClasses = cva(["main"], {
  variants: {
    isDrawerOpen: {
      true: "main--open",
      false: "main--closed",
    },
    isDrawerCollapsed: {
      true: "",
      false: "",
    }
  },
  compoundVariants: [
    {
      isDrawerOpen: true,
      isDrawerCollapsed: true,
      className: "main--closed",
    },
    {
      isDrawerOpen: true,
      isDrawerCollapsed: false,
      className: "main--open",
    },
    {
      isDrawerOpen: false,
      isDrawerCollapsed: true,
      className: "main--closed",
    },
    {
      isDrawerOpen: false,
      isDrawerCollapsed: false,
      className: "main--closed",
    },
  ],
});

interface WithWrapperProps {
  isDrawerOpen: boolean;
}

function WithWrapper<T extends WithWrapperProps>(WrappedComponent: React.ComponentType<T>) {
  return function Wrapper(props: T) {
    const { isDrawerOpen, isDrawerCollapsed } = useMenuDrawer();
    return (
      <>
        <MenuTopApp />
        <Flex direction={"row"} gap={5} alignItems="center" justifyContent={"center"}>
          <MenuDrawer />
          <Container noMargin variant="main" className={wrapperClasses({isDrawerOpen, isDrawerCollapsed})}>
            <Breadcrumbs />
            <WrappedComponent {...props} />
          </Container>
        </Flex>
      </>
    );
  };
}

export default WithWrapper;
