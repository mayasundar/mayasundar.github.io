import Image from "next/image";
import Navbar from "@/components/Navbar";
import LayerSelector from "@/components/LayerSelector";


export default function Home() {
  return (
      <div>
      <Navbar />

    <div className="w-auto h-[80vh] mx-[5vw] after:content-[''] after:clear-both after:table">
      <p className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-hibiscus)]">hii</p>
      <LayerSelector />

    </div>
      </div>
  );
}
