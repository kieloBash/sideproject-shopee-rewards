"use client";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const GoToButton = () => {
  return (
    <Link href={"https://shopee.ph/stylizboutique"} target="_blank">
      <Button className="bg-main-default text-xl py-6 -mt-4">
        Go to our store
      </Button>
    </Link>
  );
};

export default GoToButton;
