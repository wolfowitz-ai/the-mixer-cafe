import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ReactNode } from "react";
import qrCodeImage from "@assets/bar_code_1768190429164.png";

interface OrderOnlineDialogProps {
  children: ReactNode;
}

export default function OrderOnlineDialog({ children }: OrderOnlineDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-serif text-primary">Order Online</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center gap-6 py-4">
          <img 
            src={qrCodeImage} 
            alt="QR Code for online ordering" 
            className="w-64 h-64 object-contain"
          />
          <p className="text-center text-muted-foreground">
            Scan the QR code above or click the link below
          </p>
          <a 
            href="https://www.clover.com/online-ordering/the-mixer-cafe-boynton-beach" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent hover:text-accent/80 font-semibold underline underline-offset-4 transition-colors text-lg"
          >
            Click Here to Place an Online Order
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
