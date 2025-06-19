import { auth } from '@clerk/nextjs/server';
export default async function Dashboard() {
  await auth.protect();           // redirects to sign-in if not logged in
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}
