// Next-Intl
import { useTranslations } from "next-intl";

// Components
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";

// Constants
import { ReasonContactOptions } from "@/constants";

// React Hook Form & Utils
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { cn } from "@/lib/utils";

interface Props<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  budgetDescription?: string;
  placeholder?: string;
  type?: string;
  tErrors: (key: string) => string;
  layout: "contactReason" | "budget" | "message" | "default";
}

const FieldInput = <T extends FieldValues>({
  control,
  name,
  label,
  budgetDescription,
  placeholder,
  tErrors,
  type = "text",
  layout = "default",
}: Props<T>) => {
  const t = useTranslations("Common.ContactForm.contactReasonOpts");

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field className="py-4.5 px-5 lg:py-5 lg:px-7.5 2xl:px-10 rounded-lg border bg-[#242424]/50">
          <FieldLabel
            htmlFor={field.name}
            className={cn(
              "text-base lg:text-lg",
              layout === "contactReason" && "mb-3"
            )}
          >
            {label}
          </FieldLabel>
          {layout === "budget" && (
            <FieldDescription className="mb-3">
              {budgetDescription}
            </FieldDescription>
          )}
          {layout === "default" ? (
            <Input
              {...field}
              id={field.name}
              type={type}
              aria-invalid={fieldState.invalid}
              className="lg:text-base border-0 border-b rounded-none bg-transparent! px-0"
              placeholder={placeholder}
            />
          ) : layout === "contactReason" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {ReasonContactOptions.map((opt) => {
                // Verifica se o valor atual do array contém esta opção
                const isSelected = field.value?.includes(opt.value);

                return (
                  <Label
                    key={opt.value}
                    className={`flex items-center gap-2.5`}
                  >
                    <Checkbox
                      id={opt.value}
                      checked={isSelected}
                      className="size-7"
                      onCheckedChange={(checked) => {
                        const newValue = checked
                          ? [...field.value, opt.value] //adiciona se marcado
                          : field.value.filter(
                              (value: string) => value !== opt.value
                            ); //remove se desmarcado
                        field.onChange(newValue);
                      }}
                    />
                    <span className="text-app-green-99">{t(opt.label)}</span>
                  </Label>
                );
              })}
            </div>
          ) : layout === "budget" ? (
            <Slider
              value={field.value}
              onValueChange={field.onChange}
              step={100}
              min={100}
              max={10000}
            />
          ) : (
            <Textarea
              {...field}
              id={field.name}
              aria-invalid={fieldState.invalid}
              className="lg:text-base border-0 border-b rounded-none bg-transparent! px-0 min-h-10"
              placeholder={placeholder}
            />
          )}

          {fieldState.error?.message && (
            <FieldError
              errors={[{ message: tErrors(fieldState.error.message) }]}
            />
          )}
        </Field>
      )}
    />
  );
};

export default FieldInput;
