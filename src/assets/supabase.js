import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://rrukqmgsobjcsljwonfv.supabase.co"
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJydWtxbWdzb2JqY3NsandvbmZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAxMTIwMDcsImV4cCI6MjAwNTY4ODAwN30.GAUm0g3DrjZ1u4-bFA2NYbOjAg_rUrnIBVhKKSKmGYE'

const supabase = createClient(supabaseUrl, supabaseKey)


export default supabase;