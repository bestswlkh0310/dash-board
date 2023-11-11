import React from "react";

export default function Channel({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className={"md:pl-60"}>
      {children}
    </div>
  )
}