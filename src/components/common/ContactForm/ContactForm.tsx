"use client";

// Next-Intl
import { useTranslations } from "next-intl";

// React Hook Form
import { useForm } from "react-hook-form";

// Zod
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

// Components
import { Button } from "@/components/ui/button";
import { FieldGroup, FieldSet } from "@/components/ui/field";
import FieldInput from "./FieldInput";
import { toast } from "sonner";

// Constants & Icons
import { CONTACT_OPTIONS } from "@/constants";
import { Loader2 } from "lucide-react";

const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;

const formSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(3, "minFullname")
    .regex(nameRegex, "invalidFullname"),
  email: z.string().email({ message: "invalidEmail" }).trim(),
  contactReason: z.array(z.enum(CONTACT_OPTIONS)).min(1, "minContactReason"),
  message: z
    .string()
    .trim()
    .min(10, { message: "messageMin" })
    .max(500, { message: "messageMax" }),
  budget: z
    .array(z.number())
    .length(2, "invalidBudget")
    .refine((val) => val[0] < val[1], {
      message: "minBudget",
    }),
});

export const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onSubmit",
    defaultValues: {
      fullName: "",
      email: "",
      contactReason: [],
      message: "",
      budget: [1000, 5000],
    },
  });
  const t = useTranslations("Common.ContactForm");
  const tErrors = useTranslations("Others.Errors");

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));

      console.log(values);
      form.reset();
      toast.success(t("messageSent"));
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  }

  return (
    <form
      id="contact-form"
      onSubmit={form.handleSubmit(onSubmit)}
      className="p-6 md:p-9 lg:p-18 2xl:p-24 border border-y-0"
    >
      <FieldSet>
        <FieldGroup>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7.5">
            <FieldInput
              control={form.control}
              name="fullName"
              label={t("fullName")}
              placeholder={t("fullNamePlaceholder")}
              tErrors={tErrors}
              layout="default"
            />

            <FieldInput
              control={form.control}
              name="email"
              label={t("email")}
              placeholder={t("emailPlaceholder")}
              tErrors={tErrors}
              layout="default"
            />
          </div>
        </FieldGroup>

        <FieldGroup>
          <FieldInput
            control={form.control}
            name="contactReason"
            label={t("contactReason")}
            tErrors={tErrors}
            layout="contactReason"
          />
        </FieldGroup>

        <FieldGroup>
          <FieldInput
            control={form.control}
            name="budget"
            label={t("budget")}
            budgetDescription={t("budgetDescription")}
            tErrors={tErrors}
            layout="budget"
          />
        </FieldGroup>

        <FieldGroup>
          <FieldInput
            control={form.control}
            name="message"
            label={t("message")}
            placeholder={t("messagePlaceholder")}
            tErrors={tErrors}
            layout="message"
          />
        </FieldGroup>

        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="w-full sm:w-fit mx-auto"
          size={"lg"}
        >
          {form.formState.isSubmitting ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            t("submitBtn")
          )}
        </Button>
      </FieldSet>
    </form>
  );
};
