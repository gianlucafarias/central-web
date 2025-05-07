import SectionDivider from "../SectionDivider";
export default function ClubHeroSection({ title }: { title: string }) {
  return (
    <div>
       <div className="bg-club-black pt-40 pb-20">
      <div className="container mx-auto px-4 ">
        <h1 className="text-4xl font-bold text-white text-center pt-10">
    {title}
  </h1>
</div>
</div> 
<SectionDivider
 color="#0F0F0F" 
 className="h-20"
/> 
</div>
)
}
