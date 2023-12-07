import  { createClient }  from '@supabase/supabase-js'

const supabaseUrl = "https://imppfiivztrxyaecblbj.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImltcHBmaWl2enRyeHlhZWNibGJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE3MjAxNDMsImV4cCI6MjAxNzI5NjE0M30.LRIDMvP-s52WHmi3hcy4o-qg12-4t_8h6k_1OM_p_VE"
const supabase =  createClient(supabaseUrl,supabaseKey)
export default supabase