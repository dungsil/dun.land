import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.24.0'

const PROJECT_URL = Deno.env.get('SUPABASE_PROJECT_URL')
const ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY')
const client = createClient(PROJECT_URL, ANON_KEY)

export default function Authorize() {
  return (
    <div>

    </div>
  )
}
