import {
  HeroSection,
  LocationFilter,
  BrandSection,
  AboutSection,
  BoardOfDirectorsSection,
  CoreValuesSection,
  AchievementsSection,
} from '@/features/recruitment'

export default function App() {
  return (
    <div className="w-full flex flex-col min-h-screen">
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

