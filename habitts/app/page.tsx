import React from "react";
import { Button } from "@nextui-org/button";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 bg-home-red rounded-3xl h-screen">
      <h1 className="text-4xl font-bold text-center text-white md:text-6xl">
        Welcome!
      </h1>
      <p className="text-center text-white">
        Time has come to automate your life with habits
      </p>
      <h1>But first, let's talk about it:</h1>
      <Button color="primary">
        <Link href="/question"> Let's talk</Link>
      </Button>
    </section>
  );
}
