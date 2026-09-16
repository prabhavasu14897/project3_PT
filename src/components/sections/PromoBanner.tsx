import { Percent } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";

export function PromoBanner() {
  return (
    <Container className="py-4">
      <div className="flex flex-col items-start gap-6 rounded-xl bg-tertiary p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
        <div className="flex items-start gap-5 sm:items-center">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-md bg-white/10 text-on-tertiary">
            <Percent className="size-6" aria-hidden="true" />
          </span>

          <div className="flex flex-col gap-2">
            <span className="inline-flex w-fit items-center rounded-full bg-secondary/15 px-3 py-1 text-label-caps text-secondary uppercase">
              Limited Time Deal
            </span>
            <Heading level={3} size="headline-md" className="text-on-tertiary" balance={false}>
              Step Up Your Game &mdash; Flat 15% Off
            </Heading>
            <Text variant="body-md" className="max-w-md text-text-on-dark-muted">
              Claim instant discount on all match bats, footwear &amp; protective packages.
            </Text>
          </div>
        </div>

        <Button variant="secondary" size="lg" href="/offers" className="w-full sm:w-auto">
          Claim 15% Off Now
        </Button>
      </div>
    </Container>
  );
}
