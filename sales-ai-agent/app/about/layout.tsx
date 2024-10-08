export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col">
      <div className="inline-block">
        {children}
      </div>
    </section>
  );
}
