export function BusinessHours() {
  return (
    <div className="space-y-1 text-sm">
      <div className="flex justify-between">
        <span>Sunday & Monday:</span>
        <span className="font-medium">Closed</span>
      </div>
      <div className="flex justify-between">
        <span>Tuesday – Thursday:</span>
        <span className="font-medium">9 AM – 6 PM</span>
      </div>
      <div className="flex justify-between">
        <span>Friday:</span>
        <span className="font-medium">9 AM – 7 PM</span>
      </div>
      <div className="flex justify-between">
        <span>Saturday:</span>
        <span className="font-medium">9 AM – 6 PM</span>
      </div>
    </div>
  );
}
