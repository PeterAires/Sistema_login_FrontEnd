import Link from "next/link";

export default function PortalPage() {
  return (
    <main className=" flex min-h-screen flex-col items-center p-24">
      <h1 className=" text-xl font-bold text-yellow-300">Pagina do Portal</h1>

      <Link href='api/logout'>logout </Link>
    </main>
  );
}
