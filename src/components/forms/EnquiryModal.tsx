"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import EnquiryForm from "./EnquiryForm";

interface EnquiryModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    preselectedProduct?: string;
}

export default function EnquiryModal({
    open,
    onOpenChange,
    preselectedProduct,
}: EnquiryModalProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-serif text-navy dark:text-white">
                        Get a Quote
                    </DialogTitle>
                    <DialogDescription>
                        Fill in your details and we&apos;ll get back to you within 24 hours
                        with a competitive quotation.
                    </DialogDescription>
                </DialogHeader>
                <EnquiryForm
                    preselectedProduct={preselectedProduct}
                    onSuccess={() => onOpenChange(false)}
                />
            </DialogContent>
        </Dialog>
    );
}
