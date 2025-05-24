"use client";
import { useState } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";

import { Textarea } from "@/components/ui/textarea";
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from "@/components/ui/multi-select";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { SmartDatetimeInput } from "@/components/ui/smart-datetime-input";
import { enUS } from "date-fns/locale";

const formSchema = z.object({
  intro: z.string(),
  first_name: z.string().min(1),
  last_name: z.string().min(1),
  email: z.string().min(1),
  phone: z.string().min(1),
  address: z.string(),
  pets: z.string(),
  services: z.array(z.string()).nonempty("Please at least one item"),
  visit_start: z.unknown(),
  visit_end: z.unknown(),
  message: z.string(),
});

const CONTACT_URL =
  "https://p8z9dmiqy7.execute-api.us-east-1.amazonaws.com/prod/contact";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      intro: "",
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      address: "",
      pets: "",
      services: ["Once-daily visit"],
      visit_start: new Date(),
      visit_end: new Date(),
      message: "",
    },
  });

  // function onSubmit(values: z.infer<typeof formSchema>) {
  //   try {
  //     console.log(values);
  //     toast(
  //       <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
  //         <code className="text-white">{JSON.stringify(values, null, 2)}</code>
  //       </pre>,
  //     );
  //   } catch (error) {
  //     console.error("Form submission error", error);
  //     toast.error("Failed to submit the form. Please try again.");
  //   }
  // }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const response = await fetch(CONTACT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      //toast("Form submitted successfully!");
      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>,
      );
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-10 p-4 max-w-[70vw] space-y-6 mx-auto border-2"
      >
        <FormField
          control={form.control}
          name="intro"
          render={({ field }) => (
            <FormItem className="w-1/2 pr-2 mb-12">
              <FormLabel>How did you hear about The Quirky Kitty?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl className="w-full">
                  <SelectTrigger>
                    <SelectValue placeholder="Veterinarian" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Veterinarian">Veterinarian</SelectItem>
                  <SelectItem value="Friend/family">Friend/family</SelectItem>
                  <SelectItem value="Social media">Social media</SelectItem>
                  <SelectItem value="Search engine">Search engine</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
              {/* <FormDescription>
                You can manage email addresses in your email settings.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-4 w-full">
          <div className="flex-1">
            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="First name" type="text" {...field} />
                  </FormControl>
                  {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex-1">
            <FormField
              control={form.control}
              name="last_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Last name" type="text" {...field} />
                  </FormControl>
                  {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="flex gap-4 w-full">
          <div className="flex-1">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" type="email" {...field} />
                  </FormControl>
                  {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex-1">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="flex flex-col items-start">
                  <FormLabel>Phone</FormLabel>
                  <FormControl className="w-full">
                    <PhoneInput
                      placeholder="(xxx) xxx-xxxx"
                      {...field}
                      defaultCountry="US"
                    />
                  </FormControl>
                  {/* <FormDescription>Enter your phone number.</FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input
                  placeholder="Chicago street address"
                  type="text"
                  {...field}
                />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="border-2 rounded-md m-8 p-6 space-y-8">
          <FormField
            control={form.control}
            name="services"
            render={({ field }) => (
              // <FormItem className="px-4 py-6 ">
              <FormItem>
                <FormLabel>Services requested</FormLabel>
                <FormControl className="mb-[-9] bg-white ">
                  <MultiSelector
                    values={field.value}
                    onValuesChange={field.onChange}
                    loop
                    className="outline outline-gray-200 rounded-sm"
                  >
                    <MultiSelectorTrigger>
                      <MultiSelectorInput placeholder="(select options)" />
                    </MultiSelectorTrigger>
                    <MultiSelectorContent>
                      <MultiSelectorList>
                        <MultiSelectorItem value={"Once-daily visit"}>
                          Once-daily visit
                        </MultiSelectorItem>

                        <MultiSelectorItem value={"Twice-daily visit"}>
                          Twice-daily visit
                        </MultiSelectorItem>

                        <MultiSelectorItem value={"Overnight visit"}>
                          Overnight visit
                        </MultiSelectorItem>

                        <MultiSelectorItem value={"Behavioral consultation"}>
                          Behavioral consultation
                        </MultiSelectorItem>

                        <MultiSelectorItem value={"Other (see below)"}>
                          Other
                        </MultiSelectorItem>
                      </MultiSelectorList>
                    </MultiSelectorContent>
                  </MultiSelector>
                </FormControl>
                {/* <FormDescription>(select all that apply)</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex gap-4 w-full">
            <div className="flex-1">
              <FormField
                control={form.control}
                name="visit_start"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Visit start</FormLabel>
                    <FormControl>
                      <SmartDatetimeInput
                        value={field.value}
                        onValueChange={field.onChange}
                        placeholder="e.g. Tomorrow morning 9am"
                        locale={enUS}
                      />
                    </FormControl>
                    <FormDescription>
                      Use selection form or just enter text like "next Friday at
                      noon"
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex-1">
              <FormField
                control={form.control}
                name="visit_end"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Visit end</FormLabel>
                    <FormControl>
                      <SmartDatetimeInput
                        value={field.value}
                        onValueChange={field.onChange}
                        placeholder="e.g. Tomorrow morning 9am"
                        locale={enUS}
                      />
                    </FormControl>
                    {/* <FormDescription>Approximate service end</FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>

        <div className="flex gap-4 w-full">
          <div className="w-[30%]">
            <FormField
              control={form.control}
              name="pets"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pet name(s)</FormLabel>
                  <FormControl>
                    <Input placeholder="Ziggy" type="text" {...field} />
                  </FormControl>
                  {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex-1">
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="tell us about your kitty!"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Include any additional information, behavioral issues,
                    medication, etc.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <Button
          disabled={isSubmitting}
          className=""
          type="submit"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Send"}
        </Button>
      </form>
    </Form>
  );
}
