import type { Metadata } from "next";

// ============================================================
// Embed Layout - Minimal metadata override for iframe embedding
// Note: This layout nests inside the root layout, so we only
// override metadata and add a minimal wrapper — no html/body tags
// ============================================================

export const metadata: Metadata = {
    title: "n8n Workflow Galaxy | Embedded View",
    description: "Embeddable 3D visualization of n8n automation workflows",
    robots: { index: false, follow: false },
};

export default function EmbedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
