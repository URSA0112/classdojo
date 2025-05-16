import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MainPage } from "@/components/MainPage";
import AccomplishedTask from "@/components/AccomplishedTask";

export default function Home() {
  return (
    <div>
      <Header />
      <MainPage />
      <AccomplishedTask />
      <Footer />
    </div>
  );
}
