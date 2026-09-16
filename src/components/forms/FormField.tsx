import { useId, type ReactElement, cloneElement } from "react";
import { Text } from "@/components/ui/Text";

interface FormFieldProps {
  label: string;
  error?: string;
  description?: string;
  required?: boolean;
  children: ReactElement<{ id?: string; "aria-describedby"?: string; required?: boolean }>;
}

export function FormField({ label, error, description, required, children }: FormFieldProps) {
  const id = useId();
  const descriptionId = description ? `${id}-description` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [descriptionId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-label-lg text-text-primary">
        {label}
        {required && (
          <span className="text-secondary" aria-hidden="true">
            {" "}
            *
          </span>
        )}
      </label>
      {cloneElement(children, { id, "aria-describedby": describedBy, required })}
      {description && !error && (
        <Text id={descriptionId} variant="body-sm" color="muted">
          {description}
        </Text>
      )}
      {error && (
        <Text id={errorId} variant="body-sm" className="text-error" role="alert">
          {error}
        </Text>
      )}
    </div>
  );
}
