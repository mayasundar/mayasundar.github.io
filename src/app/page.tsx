import Image from "next/image";
import Navbar from "@/components/Navbar";
import PageSelector from "@/components/PageSelector";
import { redirect } from 'next/navigation';

export default function Home() {
      redirect('/about');
}