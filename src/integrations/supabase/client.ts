import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://qfinjuutwzimfzskfqtj.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFmaW5qdXV0d3ppbWZ6c2tmcXRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg3MDkwNjMsImV4cCI6MjA1NDI4NTA2M30.N_SU3HEDxWfOEU3JnajeiOHYSdrDL5VnAf6MVFMwTa0";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);