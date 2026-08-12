import {
  HeroSection,
  LocationFilter,
  BrandSection,
  AboutSection,
  BoardOfDirectorsSection,
  CoreValuesSection,
  AchievementsSection,
} from '@/features/recruitment'

export function HomePage() {
  return (
    <div className="w-full flex flex-col min-h-screen overflow-x-hidden">
      <HeroSection />
      <LocationFilter />
      <BrandSection />
      <AboutSection />
      <BoardOfDirectorsSection />
      <CoreValuesSection />
      <AchievementsSection />
    </div>
  )
}


