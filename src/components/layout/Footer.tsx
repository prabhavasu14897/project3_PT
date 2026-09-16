import Link from "next/link";
import { AtSign, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Text } from "@/components/ui/Text";
import { Logo } from "@/components/layout/Logo";
import { FooterColumn } from "@/components/layout/FooterColumn";
import {
  footerShopDisciplines,
  footerLionsServices,
  footerLegal,
  contactInfo,
} from "@/data/navigation";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-surface-muted">
      <Container className="grid grid-cols-1 gap-10 py-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div className="flex flex-col gap-4 lg:col-span-1">
          <Logo />
          <Text variant="body-sm" color="secondary" className="max-w-xs">
            Lions United Sports is your premier home for certified cricket willow, professional
            spikes, protective armour, and custom bat knocking services. Built by athletes, for
            champions.
          </Text>
          <a
            href={contactInfo.instagramHref}
            target="_blank"
            rel="noreferrer"
            className="flex w-fit items-center gap-2 text-body-sm text-text-secondary hover:text-primary"
          >
            <AtSign className="size-4" aria-hidden="true" />
            {contactInfo.instagramHandle}
          </a>
        </div>

        <FooterColumn title="Shop Disciplines" items={footerShopDisciplines} />
        <FooterColumn title="Lions Services" items={footerLionsServices} />

        <div className="flex flex-col gap-3">
          <Text as="h3" variant="label-caps" color="muted">
            Help &amp; Hotline
          </Text>
          <a
            href={contactInfo.phoneHref}
            className="flex items-center gap-2 text-headline-md text-text-primary hover:text-primary"
          >
            <Phone className="size-4" aria-hidden="true" />
            {contactInfo.phoneDisplay}
          </a>
          <Text variant="body-sm" color="secondary">
            {contactInfo.hours}
          </Text>
          <a
            href={`mailto:${contactInfo.email}`}
            className="flex items-center gap-2 text-body-sm text-text-secondary hover:text-primary"
          >
            <Mail className="size-4 shrink-0" aria-hidden="true" />
            {contactInfo.email}
          </a>
          <div className="flex items-start gap-2">
            <MapPin className="mt-0.5 size-4 shrink-0 text-text-secondary" aria-hidden="true" />
            <Text variant="body-sm" color="secondary">
              {contactInfo.address}
            </Text>
          </div>
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-success" aria-hidden="true" />
            <Text variant="body-sm" color="primary">
              {contactInfo.whatsappLabel}
            </Text>
          </div>
        </div>
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 sm:flex-row">
          <Text variant="body-sm" color="muted">
            &copy; {new Date().getFullYear()} Lions United Sports. All rights reserved.
          </Text>
          <div className="flex items-center gap-6">
            {footerLegal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-body-sm text-text-muted hover:text-text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
