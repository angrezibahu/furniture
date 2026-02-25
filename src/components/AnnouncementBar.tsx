import { Truck, Percent, Shield } from "lucide-react";

const AnnouncementBar = () => {
  return (
    <div className="bg-charcoal text-white py-2 px-4 text-center">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-6 md:gap-10 text-xs md:text-sm font-light tracking-wide">
        <span className="flex items-center gap-1.5">
          <Truck className="w-3.5 h-3.5 text-gold-light" />
          Fast Delivery from 3 Working Days
        </span>
        <span className="hidden md:inline text-stone-dark">|</span>
        <span className="flex items-center gap-1.5">
          <Percent className="w-3.5 h-3.5 text-gold-light" />
          0% Finance Available
        </span>
        <span className="hidden md:inline text-stone-dark">|</span>
        <span className="hidden md:flex items-center gap-1.5">
          <Shield className="w-3.5 h-3.5 text-gold-light" />
          Up to 10 Year Guarantee
        </span>
      </div>
    </div>
  );
};

export default AnnouncementBar;
