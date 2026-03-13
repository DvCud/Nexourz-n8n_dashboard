'use client';

// ============================================================
// Embeddable Dashboard View
// Stripped-down version for iframe integration
// Supports query params: ?autoRotate=true&showLabels=false&particles=medium
// ============================================================

import dynamic from 'next/dynamic';
import { Suspense, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useWorkflowStore } from '@/stores/workflowStore';

// Dynamically import 3D Scene (no SSR for Three.js)
const Scene = dynamic(
    () => import('@/components/3d/Scene').then((mod) => ({ default: mod.Scene })),
    {
        ssr: false,
        loading: () => (
            <div className="flex items-center justify-center w-full h-full bg-[#0a0a1a]">
                <div className="animate-pulse-glow text-cyan-400 text-sm">Loading 3D Scene...</div>
            </div>
        ),
    }
);

/**
 * EmbedContent - Inner component that uses useSearchParams
 * Wrapped in Suspense to avoid static prerendering errors
 */
function EmbedContent() {
    const searchParams = useSearchParams();
    const { updateSettings } = useWorkflowStore();

    // Apply query parameter overrides
    useEffect(() => {
        const autoRotate = searchParams.get('autoRotate');
        const showLabels = searchParams.get('showLabels');
        const particles = searchParams.get('particles');

        updateSettings({
            ...(autoRotate !== null && { autoRotate: autoRotate !== 'false' }),
            ...(showLabels !== null && { showLabels: showLabels !== 'false' }),
            ...(particles !== null && {
                particleDensity: particles as 'low' | 'medium' | 'high',
            }),
        });
    }, [searchParams, updateSettings]);

    const showControls = searchParams.get('showControls') === 'true';

    return (
        <main className="relative w-full h-screen overflow-hidden bg-[#0a0a1a]">
            {/* 3D Canvas - fills entire viewport */}
            <Scene />

            {/* Optional controls hint (off by default for clean embed) */}
            {showControls && (
                <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-10">
                    <div className="glass-panel rounded-xl px-4 py-2">
                        <p className="text-xs text-gray-400 whitespace-nowrap">
                            <span className="text-cyan-400 font-medium">Drag</span> to rotate
                            <span className="mx-2 text-gray-600">•</span>
                            <span className="text-purple-400 font-medium">Scroll</span> to zoom
                            <span className="mx-2 text-gray-600">•</span>
                            <span className="text-green-400 font-medium">Click</span> to select
                        </p>
                    </div>
                </div>
            )}
        </main>
    );
}

/**
 * EmbedPage - Wrapper with Suspense boundary
 * Required because useSearchParams triggers client-side bailout during prerendering
 *
 * Query Parameters:
 * - autoRotate: "true" | "false" (default: true)
 * - showLabels: "true" | "false" (default: true)
 * - particles: "low" | "medium" | "high" (default: "medium")
 * - showControls: "true" | "false" (default: false)
 */
export default function EmbedPage() {
    return (
        <Suspense
            fallback={
                <div className="flex items-center justify-center w-full h-screen bg-[#0a0a1a]">
                    <div className="animate-pulse-glow text-cyan-400 text-sm">Initializing...</div>
                </div>
            }
        >
            <EmbedContent />
        </Suspense>
    );
}
