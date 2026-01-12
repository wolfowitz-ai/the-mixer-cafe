import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ReactNode } from "react";
import qrCodeImage from "@assets/bar_code_1768190811626.png";

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
        <div className="flex flex-col items-center gap-4 py-4">
          <img 
            src={qrCodeImage} 
            alt="QR Code for online ordering" 
            className="w-48 h-48"
          />
          <p className="text-center text-primary font-semibold text-lg">
            Scan to Place an Online Order
          </p>
          <div className="flex items-center gap-3 text-muted-foreground text-sm">
            <span className="h-px w-12 bg-border"></span>
            <span>or</span>
            <span className="h-px w-12 bg-border"></span>
          </div>
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
