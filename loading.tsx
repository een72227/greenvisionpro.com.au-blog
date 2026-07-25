export default function Loading() {
  return (
    <div className="container-page py-16">
      <div className="mx-auto max-w-2xl animate-pulse space-y-4">
        <div className="h-4 w-24 rounded-full bg-primary-100" />
        <div className="h-10 w-3/4 rounded-xl2 bg-surface-mist" />
        <div className="h-4 w-full rounded-full bg-surface-mist" />
        <div className="h-4 w-5/6 rounded-full bg-surface-mist" />
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="animate-pulse overflow-hidden rounded-xl2 border border-black/5">
            <div className="aspect-[16/10] w-full bg-surface-mist" />
            <div className="space-y-3 p-6">
              <div className="h-4 w-3/4 rounded-full bg-surface-mist" />
              <div className="h-3 w-full rounded-full bg-surface-mist" />
              <div className="h-3 w-1/2 rounded-full bg-surface-mist" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
