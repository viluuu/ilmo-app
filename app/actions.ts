// app/actions.ts
"use server";
import { neon } from "@neondatabase/serverless";

export async function getData() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined");
  }
  const sql = neon(process.env.DATABASE_URL);
  const data = await sql`...`;
  return data;
}

export async function getCompetitions() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined");
  }
  const sql = neon(process.env.DATABASE_URL);
  const response = await sql`SELECT * FROM competitions`;
  return response;
}

export async function getCompetitonID(id: number) {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined");
  }
  const sql = neon(process.env.DATABASE_URL);
  const response = await sql`SELECT * FROM competitions WHERE id = ${id}`;
  return response;
}

export async function getRounds(id: number) {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined");
  }
  const sql = neon(process.env.DATABASE_URL);
  const response =
    await sql`SELECT * FROM rounds WHERE competition_id = ${id} ORDER BY date, time`;
  return response;
}

export async function getRoundID(id: number) {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined");
  }
  const sql = neon(process.env.DATABASE_URL);
  const roundData = await sql`SELECT * FROM rounds WHERE id = ${id}`;
  const registrationsData =
    await sql`SELECT * FROM registrations WHERE round_id = ${id}`;
  return { roundData, registrationsData };
}

export async function addRegistration(
  roundId: number,
  participantId: number,
  status: string
) {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined");
  }
  const sql = neon(process.env.DATABASE_URL);
  const response = await sql`
    INSERT INTO registrations (round_id, user_id, status)
    VALUES (${roundId}, ${participantId}, ${status})
    RETURNING *;
  `;
  return response;
}
