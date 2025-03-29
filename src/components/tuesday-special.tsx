import { CalendarDays } from "lucide-react";

export default function TuesdaySpecial() {
  return (
    <section className="w-full bg-black py-4 text-white">
      <div className="container flex flex-col items-center justify-center gap-2 px-4 sm:flex-row">
        <CalendarDays className="h-5 w-5" />
        <p className="text-center font-medium sm:text-lg">
          <span className="font-bold">Tuesday Special:</span> $12 Haircuts Every
          Tuesday
        </p>
      </div>
    </section>
  );
}
