import Hero from '@/components/ui/Hero';
import QuotesCollection from '@/components/ui/QuotesCollection';

export default function Home() {
  console.log('rendering home');
  return (
    <div className="">
      <Hero />
      <QuotesCollection />
    </div>
  );
}
