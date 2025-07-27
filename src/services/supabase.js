import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://wmehlebxrpnjerybnipq.supabase.co'
const supabaseKey = 'secretAPIKey'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase


