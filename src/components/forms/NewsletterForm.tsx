"use client";

import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Text } from "@/components/ui/Text";

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitted");
  }

  if (status === "submitted") {
    return (
      <div className="flex items-center gap-2 text-label-lg text-primary" role="status">
        <Check className="size-5" aria-hidden="true" />
        You&rsquo;re on the list &mdash; watch your inbox.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-2 sm:flex-row">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <Input
        id="newsletter-email"
        name="email"
        type="email"
        required
        placeholder="Enter your email address..."
        className="flex-1"
      />
      <Button type="submit" variant="primary">
        Subscribe
      </Button>
      <Text variant="body-sm" color="muted" className="sr-only">
        This is a prototype form; no email will actually be sent.
      </Text>
    </form>
  );
}
