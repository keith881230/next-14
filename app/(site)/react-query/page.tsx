import LinkButton from "@/app/components/link-button";
import React from "react";

type Props = {};

function page({}: Props) {
  return (
    <div>
      <LinkButton href={"/"} text={"Back to home"} />
    </div>
  );
}

export default page;
