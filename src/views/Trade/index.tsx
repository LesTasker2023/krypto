import "./styles.scss";

import React from "react";

import type Props from "./types";
import TimeSaleList from "@/components/TimeSaleList";

export const Trade = ({ data }: Props) => {
  return <div className="trade">{<TimeSaleList />}</div>;
};
