import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://srhopbavlugxfkdffhpa.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNyaG9wYmF2bHVneGZrZGZmaHBhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ1MzI2MjksImV4cCI6MjA2MDEwODYyOX0.hV78EsizxjtdrvOgwqh0eNDljkpfwaYM01PwcUFK46k';

export const supabase = createClient(supabaseUrl, supabaseKey);