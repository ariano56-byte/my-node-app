const fs = require('fs');
const path = require('path');

const url = process.env.SUPABASE_URL || 'https://tgrtesjyjwuzcqvfpadc.supabase.co';
const anonKey = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRncnRlc2p5and1emNxdmZwYWRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzczMDA4OTMsImV4cCI6MjA5Mjg3Njg5M30.tp4e1nLfqR19IYgPxCuls5_DOVrFtX0uBqDqWKYNi7k';
const content = `window.SUPABASE_URL=${JSON.stringify(url)};\nwindow.SUPABASE_ANON_KEY=${JSON.stringify(anonKey)};\n`;

fs.writeFileSync(path.join(__dirname, '..', 'supabase-config.js'), content, { encoding: 'utf8' });
console.log('Built supabase-config.js');
