import { createClient } from "@supabase/supabase-js";

export const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://kvhinnhnwgvdpzggdnxs.supabase.co";
export const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2aGlubmhud2d2ZHB6Z2dkbnhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE2MjcwNjAsImV4cCI6MjA1NzIwMzA2MH0.0sWCffCfBL9k7QtWXJgR3RDe7Mw_MssJPSkarIL3gS4";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
