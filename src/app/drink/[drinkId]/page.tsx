import Details from '@/scenes/Details';

export default function DetailsPage({
  params: { drinkId },
}: {
  params: { drinkId: string };
}) {
  return <Details drinkId={drinkId} />;
}
