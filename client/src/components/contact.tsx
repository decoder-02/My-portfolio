import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    return (async () => {
      try {
        setIsSending(true);
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data?.message || "Failed to send message");

        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        form.reset();
      } catch (err: any) {
        console.error("Contact submit error:", err);
        toast({ title: "Unable to send", description: err?.message || "Please try again later." });
      } finally {
        setIsSending(false);
      }
    })();
  }

  const [isSending, setIsSending] = useState(false);

  return (
    <section id="contact" className="py-16 bg-secondary/30">
      <div className="container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Let's work together</h2>
            <p className="text-muted-foreground text-lg mb-6">
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to drop me a message.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-background rounded-full border border-border">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Email</p>
                  <p className="font-medium">akashrajrad@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-background rounded-full border border-border">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Location</p>
                  <p className="font-medium">Chennai, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-border/50 shadow-lg">
              <CardContent className="p-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Akash" {...field} className="bg-secondary/20" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="ak@example.com" {...field} className="bg-secondary/20" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell me about your project..." 
                              className="min-h-[120px] bg-secondary/20" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full" disabled={isSending}>
                      <Send className="mr-2 h-4 w-4" /> {isSending ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
