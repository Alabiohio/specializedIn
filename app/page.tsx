import SkillCard from "@/components/skills/SkillCard";
import Navbar from "@/components/layout/Navbar";

export default function Home() {

  const sampleSkills = [
    { title: "Baking", description: "Learn cake baking & pastries." },
    { title: "Graphic Design", description: "Photoshop, Canva, branding." },
    { title: "Hairdressing", description: "Styling, braiding, treatments." },
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">

<Navbar />
      
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-4xl font-bold mb-6">
          Exchange Skills. Empower Each Other.
        </h1>
        <p className="text-gray-700 text-lg mb-10 txt">
          Learn new skills, teach what you know, and connect with talented people in your community.
        </p> 
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sampleSkills.map((skill, i) => (
            <SkillCard key={i} skill={skill} />
          ))}
        </div>
      </main>
    </div>
  );
}


