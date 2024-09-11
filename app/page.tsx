import type { Metadata } from "next";
import { Counter } from "./components/counter/Counter";

export default function IndexPage() {
  return (
    <div>
      <Counter />
      <button>Button Click!</button>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
