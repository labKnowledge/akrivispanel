import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';
import bcrypt from 'bcryptjs';

const DB_PATH = path.join(process.cwd(), 'data', 'panel.sqlite');
const DATA_DIR = path.dirname(DB_PATH);

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

const db = new Database(DB_PATH);

db.exec(`
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
`);

// Ensure default admin user exists
const defaultUsername = 'admin';
const defaultPassword = 'agenticpanel';
const user = db.prepare('SELECT * FROM users WHERE username = ?').get(defaultUsername);
if (!user) {
  const hash = bcrypt.hashSync(defaultPassword, 10);
  db.prepare('INSERT INTO users (username, password) VALUES (?, ?)').run(defaultUsername, hash);
}

// Add a type for user
interface UserRow {
  id: number;
  username: string;
  password: string;
  created_at: string;
}

export function getUserByUsername(username: string): UserRow | undefined {
  return db.prepare('SELECT * FROM users WHERE username = ?').get(username) as UserRow | undefined;
}

export function updateUserPassword(username: string, newPassword: string) {
  const hash = bcrypt.hashSync(newPassword, 10);
  db.prepare('UPDATE users SET password = ? WHERE username = ?').run(hash, username);
}

export function verifyPassword(username: string, password: string) {
  const user = getUserByUsername(username);
  if (!user) return false;
  return bcrypt.compareSync(password, user.password);
} 