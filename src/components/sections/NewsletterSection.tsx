import { Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Text } from "@/components/ui/Text";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

export function NewsletterSection() {
  return (
    <Container className="py-4 pb-20">
      <div className="flex flex-col items-start gap-5 rounded-xl bg-surface-muted p-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-4">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-surface-elevated text-primary">
            <Mail className="size-5" aria-hidden="true" />
          </span>
          <div className="flex flex-col gap-1">
            <Text as="p" variant="body-lg" color="primary" className="font-semibold">
              Get notified for limited willow clefts &amp; drops
            </Text>
            <Text variant="body-sm" color="muted">
              Subscribe to unlock 10% off your first gear purchase &amp; a knock-in voucher.
            </Text>
          </div>
        </div>

        <NewsletterForm />
      </div>
    </Container>
  );
}
