create table if not exists public.ua_contacts (
  optimizer_id text primary key,
  email text not null check (position('@' in email) > 1),
  is_active boolean not null default true,
  updated_at timestamptz not null default now()
);

alter table public.ua_contacts enable row level security;

revoke all on table public.ua_contacts from anon;
grant select on table public.ua_contacts to authenticated;
grant all on table public.ua_contacts to service_role;

drop policy if exists "Authenticated users can read active UA contacts" on public.ua_contacts;
create policy "Authenticated users can read active UA contacts"
on public.ua_contacts
for select
to authenticated
using (is_active = true);

-- Add real contacts from the Supabase SQL editor or Table editor.
-- insert into public.ua_contacts (optimizer_id, email)
-- values ('paid-social', 'real-address@example.com')
-- on conflict (optimizer_id) do update
-- set email = excluded.email, is_active = true, updated_at = now();
