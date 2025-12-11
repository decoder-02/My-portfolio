export default function Footer() {
  return (
    <footer className="py-8 border-t border-border bg-background/5">
      <div className="container-padding max-w-4xl mx-auto text-center">
        <div className="mb-3">
          <p className="text-base font-semibold">Akash Rajkumar</p>
          <p className="text-sm text-muted-foreground mt-1">Full-stack engineer focused on building reliable, maintainable web apps</p>
        </div>

        <div className="mt-4">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} • All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
