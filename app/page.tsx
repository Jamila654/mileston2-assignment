"use-client";
import Image from "next/image";
import Navbar from "@/components/navbar";
import About from "./about/page";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="  flex-grow flex items-center justify-center px-2">
        <h1>This is a home page</h1>
      </div>
    </main>
  );
}
