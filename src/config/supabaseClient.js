import { createClient } from '@supabase/supabase-js'

// create a single supabase client for interacting with your database

const supabase = createClient('https://nzqszurmnlwplwetnhuz.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56cXN6dXJtbmx3cGx3ZXRuaHV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYwODk5NjEsImV4cCI6MTk5MTY2NTk2MX0.CGebwlVumpYn8chKzJi3u64B__SISfW1948cvfJltW0')

export default supabase;
