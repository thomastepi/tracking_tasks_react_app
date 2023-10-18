import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rrukqmgsobjcsljwonfv.supabase.co";
const supabaseKey = process.env.REACT_APP_API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
