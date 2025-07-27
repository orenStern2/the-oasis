import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://wmehlebxrpnjerybnipq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndtZWhsZWJ4cnBuamVyeWJuaXBxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA2ODcxMjQsImV4cCI6MjA2NjI2MzEyNH0.zQk4QSSWYB-i6AirvjIATv1ch__e4vjbCkJGHo9hoXE'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase


