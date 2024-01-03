import { Header } from "@components/header";
import {
  ExpertiseSection,
  HomeSection,
  ProjectSection,
  ContactSection,
} from "./components/sections";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black">
      <Header />
      <div className="grid w-full text-center">
        <HomeSection />
        <ExpertiseSection />
        <ProjectSection />
        <ContactSection />
      </div>
    </main>
  );
}
