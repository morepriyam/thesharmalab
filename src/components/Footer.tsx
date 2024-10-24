export default function Footer() {
  return (
    <footer className="flex w-full shrink-0 flex-col items-center gap-1 px-4 py-3 sm:flex-row fixed bottom-0 opacity-55">
      <p className="text-xs text-gray-500 dark:text-gray-400">
        © 2024 The Sharma Lab All rights reserved.
      </p>
      <nav className="flex gap-4 sm:ml-auto sm:gap-6">
        <a className="text-xs underline-offset-4 hover:underline" href="#">
          Terms of Service
        </a>
        <a className="text-xs underline-offset-4 hover:underline" href="#">
          Privacy
        </a>
      </nav>
    </footer>
  );
}
