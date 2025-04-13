'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://srhopbavlugxfkdffhpa.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNyaG9wYmF2bHVneGZrZGZmaHBhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ1MzI2MjksImV4cCI6MjA2MDEwODYyOX0.hV78EsizxjtdrvOgwqh0eNDljkpfwaYM01PwcUFK46k'
);

export default function Home() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // FETCH IP INFO
    fetch('https://ipinfo.io/json?token=6ff95514eb5eaf')
      .then((res) => res.json())
      .then(async (data) => {
        const { ip, city, region, country, loc, org, postal, timezone } = data;

        const userAgent = navigator.userAgent;

        // INSERT into SUPABASE
        await supabase.from('visitors').insert([
          {
            ip,
            city,
            region,
            country,
            location: loc,
            org,
            postal,
            timezone,
            user_agent: userAgent,
          },
        ]);
      })
      .catch((err) => console.error('IPInfo Error:', err));
  }, []);

  const handleSubmit = () => {
    if (password === 'MALE') {
      window.location.href = 'https://instagram.com/hydergaxi';
    } else {
      setError('Incorrect password!');
    }
  };

  return (
    <div style={{ padding: 30 }}>
      <h2>Enter Password to Continue</h2>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
        style={{ padding: 10 }}
      />
      <button onClick={handleSubmit} style={{ marginLeft: 10, padding: 10 }}>
        Submit
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
