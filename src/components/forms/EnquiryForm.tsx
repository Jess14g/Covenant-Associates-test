"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Loader2 } from "lucide-react";
import { products } from "@/data/products";

const enquirySchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z
        .string()
        .min(7, "Please enter a valid phone number")
        .regex(/^[+\d\s()-]+$/, "Please enter a valid phone number"),
    company: z.string().optional(),
    products: z.array(z.string()).min(1, "Please select at least one product"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type EnquiryFormValues = z.infer<typeof enquirySchema>;

interface EnquiryFormProps {
    preselectedProduct?: string;
    onSuccess?: () => void;
}

export default function EnquiryForm({
    preselectedProduct,
    onSuccess,
}: EnquiryFormProps) {
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<EnquiryFormValues>({
        resolver: zodResolver(enquirySchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            company: "",
            products: preselectedProduct ? [preselectedProduct] : [],
            message: "",
        },
    });

    const selectedProducts = watch("products");

    const toggleProduct = (productName: string) => {
        const current = selectedProducts || [];
        if (current.includes(productName)) {
            setValue(
                "products",
                current.filter((p) => p !== productName),
                { shouldValidate: true }
            );
        } else {
            setValue("products", [...current, productName], { shouldValidate: true });
        }
    };

    const onSubmit = async (data: EnquiryFormValues) => {
        // Simulate submission (replace with real API call)
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log("Enquiry submitted:", data);
        toast.success("Enquiry submitted successfully!", {
            description:
                "We'll get back to you within 24 hours. Thank you for your interest!",
        });
        reset();
        onSuccess?.();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name & Email row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="name">
                        Full Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                        id="name"
                        placeholder="John Doe"
                        {...register("name")}
                        className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && (
                        <p className="text-xs text-destructive">{errors.name.message}</p>
                    )}
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">
                        Email <span className="text-destructive">*</span>
                    </Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        {...register("email")}
                        className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                        <p className="text-xs text-destructive">{errors.email.message}</p>
                    )}
                </div>
            </div>

            {/* Phone & Company row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="phone">
                        Phone <span className="text-destructive">*</span>
                    </Label>
                    <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 98815 32102"
                        {...register("phone")}
                        className={errors.phone ? "border-destructive" : ""}
                    />
                    {errors.phone && (
                        <p className="text-xs text-destructive">{errors.phone.message}</p>
                    )}
                </div>
                <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                        id="company"
                        placeholder="Your Company Name"
                        {...register("company")}
                    />
                </div>
            </div>

            {/* Product interest */}
            <div className="space-y-3">
                <Label>
                    Products of Interest <span className="text-destructive">*</span>
                </Label>
                <div className="flex flex-wrap gap-2">
                    {products.map((product) => (
                        <button
                            key={product.id}
                            type="button"
                            onClick={() => toggleProduct(product.name)}
                            className={`px-3 py-1.5 text-xs rounded-full border transition-all duration-200 ${selectedProducts?.includes(product.name)
                                    ? "bg-royal text-white border-royal shadow-sm"
                                    : "bg-background text-muted-foreground border-border hover:border-royal/50 hover:text-royal"
                                }`}
                        >
                            {product.name}
                        </button>
                    ))}
                </div>
                {errors.products && (
                    <p className="text-xs text-destructive">{errors.products.message}</p>
                )}
            </div>

            {/* Message */}
            <div className="space-y-2">
                <Label htmlFor="message">
                    Message <span className="text-destructive">*</span>
                </Label>
                <Textarea
                    id="message"
                    rows={5}
                    placeholder="Please describe your requirements, quantities, and any specifications..."
                    {...register("message")}
                    className={errors.message ? "border-destructive" : ""}
                />
                {errors.message && (
                    <p className="text-xs text-destructive">{errors.message.message}</p>
                )}
            </div>

            {/* Submit */}
            <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto bg-gradient-to-r from-royal to-royal-light hover:from-royal-light hover:to-royal text-white shadow-lg hover:shadow-xl transition-all duration-300 h-12 px-8 text-base"
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                    </>
                ) : (
                    <>
                        <Send className="w-4 h-4 mr-2" />
                        Submit Enquiry
                    </>
                )}
            </Button>
        </form>
    );
}
