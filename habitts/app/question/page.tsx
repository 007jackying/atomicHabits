import React from "react";
import { Button } from "@nextui-org/button";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 bg-home-red rounded-3xl h-screen">
      <h1 className="text-4xl font-bold text-center text-white md:text-6xl">
        Are you familiar with the 4 laws of Atomic Habits?
      </h1>
      <div className="flex flex-row gap-20">
        <Button color="primary">
          <Link href="/habit-stacking"> Yes</Link>
        </Button>
        <Button color="primary">
          <Link href="/scorecard"> No</Link>
        </Button>
      </div>
    </section>
  );
}
