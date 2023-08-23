import Background from "@/components/marketing/background";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="container flex-1">{children}</main>
      <Background />
    </div>
  );
}
