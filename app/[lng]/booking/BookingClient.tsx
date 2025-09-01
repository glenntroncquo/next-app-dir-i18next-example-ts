"use client";

import { createClient } from "@supabase/supabase-js";
import {  SalonBooking } from "your-package-name";

export default function BookingClient() {
  const companyId = process.env.NEXT_PUBLIC_COMPANY_ID;
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const salonTheme = {
    primary: "#FF8FB2",
    primaryHover: "#FFBDD4",
    primaryLight: "#FFF0F7",
    secondary: "#FFBDD4",
    text: "#4A3F45",
    background: "white",
    buttonText: "white",
  };
  return (
    <div>
      <h1>Booking</h1>
      <div className="w-full g-gray-200 bg-white shadow-xl rounded-xl overflow-hidden border border-gray-100 min-h-[80vh] max-h-[80vh] flex flex-col max-w-md mx-auto px-4 pt-6 pb-4 border-b text-lg font-bold mb-4 text-center items-center justify-between flex-1 overflow-y-auto p-4 h-[500px] text-left py-3 font-medium text-sm mb-3 space-y-3 cursor-pointer hover:border-salon-pink border-salon-pink bg-salon-softer-pink border-gray-200 inline-block h-3 w-3 mr-1 py-4 text-gray-500 justify-center relative flex-1 mr-2 w-auto p-0 align-start ml-2 h-4 w-4 shrink-0 gap-1 h-9 w-9 rounded-md sr-only grid grid-cols-7 mb-6 h-auto sm:p-2 rounded-lg bg-salon-pink text-white opacity-70 text-xs sm:text-sm my-0.5 sm:my-1 text-[10px] sm:text-xs rounded-full px-1 sm:px-2 py-0.5 gap-0.5 sm:gap-1 bg-salon-rose text-salon-text-dark bg-salon-light-pink bg-gray-100 text-gray-500 w-1.5 h-1.5 sm:w-2 sm:h-2 mb-3 gap-3 w-8 h-8 object-cover grid-cols-3 gap-2 pt-2 py-2 text-sm flex-col items-center bg-salon-pink text-white bg-white opacity-75 text-center py-8 space-y-4 mb-4 bg-green-50 border-green-200 text-green-800 bg-red-50 border-red-200 text-red-800 text-red-500 mt-1 required placeholder text-xs text-gray-400 border-gray-300 p-2 max-h-36 mx-auto absolute top-2 right-2 rounded-full p-1 shadow-md border-2 border-dashed p-4 text-gray-400 mb-2 hidden sticky bottom-0 left-0 right-0 border-t flex-col font-bold text-lg px-4 py-2 h-auto outline variant bg-salon-rose hover:bg-salon-rose px-5 bg-salon-cream">
        This div contains all unique classes from the SalonBooking component
      </div>
      <SalonBooking
        companyId={companyId ?? ""}
        supabase={supabase as any}
        theme={salonTheme}
        shouldShowStaff={false}
      />
    </div>
    // <div>hello world</div>
    // <TestComponent />
    // <Counter />
  );
}
