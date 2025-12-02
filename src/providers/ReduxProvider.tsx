"use client";

import { Provider } from "react-redux";
import { makeStore } from "../lib/store";
import React from "react";

const store = makeStore();

export default function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}


