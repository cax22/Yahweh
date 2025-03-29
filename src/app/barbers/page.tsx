import { BarbersList } from "@/components/barbers-list";

export default function BarbersPage() {
  return (
    <main className="container mx-auto px-4 py-12 md:py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-2 text-4xl font-bold tracking-tight md:text-5xl">
          Meet Our Barbers
        </h1>
        <p className="mb-8 text-xl text-muted-foreground">
          Skilled professionals dedicated to making you look your best
        </p>

        <BarbersList />

        <div className="mt-12">
          <h2 className="mb-4 text-2xl font-semibold">
            Barber Availability Schedule
          </h2>
          <div className="overflow-x-auto rounded-lg border">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted">
                  <th className="p-3 text-left">Barber</th>
                  <th className="p-3 text-center">Tue</th>
                  <th className="p-3 text-center">Wed</th>
                  <th className="p-3 text-center">Thu</th>
                  <th className="p-3 text-center">Fri</th>
                  <th className="p-3 text-center">Sat</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3 font-medium">Robin (TheBarber)</td>
                  <td className="p-3 text-center">9AM-6PM</td>
                  <td className="p-3 text-center">9AM-6PM</td>
                  <td className="p-3 text-center">9AM-6PM</td>
                  <td className="p-3 text-center">9AM-7PM</td>
                  <td className="p-3 text-center">9AM-6PM</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Ivan (BlessedHands)</td>
                  <td className="p-3 text-center">9AM-6PM</td>
                  <td className="p-3 text-center">9AM-6PM</td>
                  <td className="p-3 text-center">9AM-6PM</td>
                  <td className="p-3 text-center">9AM-7PM</td>
                  <td className="p-3 text-center">9AM-6PM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
