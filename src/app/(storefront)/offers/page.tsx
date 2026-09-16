import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";

export default function OffersPage() {
  return (
    <Container className="flex flex-col items-start gap-4 py-24">
      <Text variant="label-caps" color="muted">
        Limited time
      </Text>
      <Heading level={1} size="headline-xl">
        Offers Are Being Restocked
      </Heading>
      <Text variant="body-lg" className="max-w-xl">
        Seasonal drops and discount bundles land here as the storefront builds out. Check back
        soon, or browse the full catalog by discipline.
      </Text>
      <Button href="/sports/cricket">Browse Gear</Button>
    </Container>
  );
}
