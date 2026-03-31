module.exports = [
"[project]/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "STALE_CONFIG",
    ()=>STALE_CONFIG,
    "STATUS_CONFIG",
    ()=>STATUS_CONFIG,
    "cn",
    ()=>cn,
    "formatLastUpdated",
    ()=>formatLastUpdated
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
const STATUS_CONFIG = {
    serving_now: {
        label: "Serving Now",
        color: "text-emerald-400",
        dotColor: "bg-emerald-400",
        pulse: true
    },
    arriving_soon: {
        label: "Arriving Soon",
        color: "text-amber-400",
        dotColor: "bg-amber-400",
        pulse: true
    },
    busy: {
        label: "Busy",
        color: "text-orange-400",
        dotColor: "bg-orange-400",
        pulse: false
    },
    sold_out: {
        label: "Sold Out",
        color: "text-red-400",
        dotColor: "bg-red-400",
        pulse: false
    },
    closed_early: {
        label: "Closed Early",
        color: "text-zinc-500",
        dotColor: "bg-zinc-500",
        pulse: false
    },
    offline: {
        label: "Offline",
        color: "text-zinc-600",
        dotColor: "bg-zinc-600",
        pulse: false
    }
};
const STALE_CONFIG = {
    fresh: {
        label: "",
        show: false
    },
    aging: {
        label: "~{n} min ago",
        show: true
    },
    stale: {
        label: "Unconfirmed",
        show: true
    },
    expired: {
        label: "May be outdated",
        show: true
    }
};
function formatLastUpdated(isoString) {
    const diffMs = Date.now() - new Date(isoString).getTime();
    const diffMin = Math.floor(diffMs / 60000);
    if (diffMin < 1) return "just now";
    if (diffMin === 1) return "1 min ago";
    return `${diffMin} min ago`;
}
}),
"[project]/components/map/MapView.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MapView",
    ()=>MapView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
// Deterministic pseudo-random position from truck id
// In production: real lat/lng → Mapbox/Google Maps
function getMapPosition(truck) {
    const seed = truck.truck.id.split("").reduce((a, c)=>a + c.charCodeAt(0), 0);
    const phi = (1 + Math.sqrt(5)) / 2;
    return {
        x: 8 + seed * phi * 37 % 84,
        y: 10 + seed * phi * 23 % 75
    };
}
function MapView({ trucks, selectedTruckId }) {
    const pins = trucks.filter((t)=>t.liveStatus.status !== "offline").map((t)=>({
            id: t.truck.id,
            slug: t.truck.slug,
            ...getMapPosition(t),
            data: t
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-full overflow-hidden rounded-none md:rounded-xl bg-[#1c1f26]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MapBackground, {}, void 0, false, {
                fileName: "[project]/components/map/MapView.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-3 h-3 rounded-full bg-blue-400 border-2 border-white shadow-lg shadow-blue-400/50"
                }, void 0, false, {
                    fileName: "[project]/components/map/MapView.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/map/MapView.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            pins.map((pin)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TruckPin, {
                    pin: pin,
                    isSelected: pin.id === selectedTruckId
                }, pin.id, false, {
                    fileName: "[project]/components/map/MapView.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/40 text-[10px] text-zinc-500 font-body pointer-events-none",
                children: "Map placeholder · Replace with Mapbox"
            }, void 0, false, {
                fileName: "[project]/components/map/MapView.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/map/MapView.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
function TruckPin({ pin, isSelected }) {
    const { data } = pin;
    const config = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STATUS_CONFIG"][data.liveStatus.status];
    const isLive = data.liveStatus.open_now;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: `/trucks/${pin.slug}`,
        style: {
            left: `${pin.x}%`,
            top: `${pin.y}%`
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute -translate-x-1/2 -translate-y-full z-10", "transition-transform duration-200", isSelected ? "scale-125 z-20" : "hover:scale-110"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative flex items-center gap-1 px-2 py-1 rounded-full", "font-body text-xs font-semibold whitespace-nowrap shadow-lg", "border transition-all duration-200", isSelected ? "bg-brand-500 border-brand-400 text-white shadow-brand-500/40 shadow-xl" : isLive ? "bg-surface-card border-surface-border text-white" : "bg-surface-muted border-surface-border text-zinc-500"),
                children: [
                    config.pulse && isLive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "relative flex h-1.5 w-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping", config.dotColor)
                            }, void 0, false, {
                                fileName: "[project]/components/map/MapView.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative inline-flex rounded-full h-1.5 w-1.5", config.dotColor)
                            }, void 0, false, {
                                fileName: "[project]/components/map/MapView.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/map/MapView.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this),
                    data.truck.name.split(" ")[0]
                ]
            }, void 0, true, {
                fileName: "[project]/components/map/MapView.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute left-1/2 -translate-x-1/2 w-0 h-0", "border-l-[5px] border-r-[5px] border-t-[6px]", "border-l-transparent border-r-transparent", isSelected ? "border-t-brand-500" : "border-t-surface-card")
            }, void 0, false, {
                fileName: "[project]/components/map/MapView.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/map/MapView.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
function MapBackground() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "absolute inset-0 w-full h-full opacity-30",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                        id: "grid",
                        width: "40",
                        height: "40",
                        patternUnits: "userSpaceOnUse",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M 40 0 L 0 0 0 40",
                            fill: "none",
                            stroke: "#374151",
                            strokeWidth: "0.5"
                        }, void 0, false, {
                            fileName: "[project]/components/map/MapView.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/map/MapView.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                        id: "grid-large",
                        width: "200",
                        height: "200",
                        patternUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                width: "200",
                                height: "200",
                                fill: "url(#grid)"
                            }, void 0, false, {
                                fileName: "[project]/components/map/MapView.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M 200 0 L 0 0 0 200",
                                fill: "none",
                                stroke: "#4b5563",
                                strokeWidth: "1"
                            }, void 0, false, {
                                fileName: "[project]/components/map/MapView.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/map/MapView.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/map/MapView.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "100%",
                height: "100%",
                fill: "url(#grid-large)"
            }, void 0, false, {
                fileName: "[project]/components/map/MapView.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "0",
                y1: "35%",
                x2: "100%",
                y2: "38%",
                stroke: "#374151",
                strokeWidth: "3"
            }, void 0, false, {
                fileName: "[project]/components/map/MapView.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "0",
                y1: "65%",
                x2: "100%",
                y2: "62%",
                stroke: "#374151",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/components/map/MapView.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "30%",
                y1: "0",
                x2: "32%",
                y2: "100%",
                stroke: "#374151",
                strokeWidth: "3"
            }, void 0, false, {
                fileName: "[project]/components/map/MapView.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "65%",
                y1: "0",
                x2: "68%",
                y2: "100%",
                stroke: "#374151",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/components/map/MapView.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "0",
                y: "78%",
                width: "25%",
                height: "22%",
                fill: "#1e3a5f",
                opacity: "0.4",
                rx: "4"
            }, void 0, false, {
                fileName: "[project]/components/map/MapView.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "68%",
                y: "20%",
                width: "18%",
                height: "25%",
                fill: "#1a3a1a",
                opacity: "0.5",
                rx: "4"
            }, void 0, false, {
                fileName: "[project]/components/map/MapView.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/map/MapView.tsx",
        lineNumber: 122,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/truck/StatusBadge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatusBadge",
    ()=>StatusBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
function StatusBadge({ liveStatus, size = "md" }) {
    const config = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STATUS_CONFIG"][liveStatus.status];
    const isSm = size === "sm";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center gap-1.5 rounded-full font-body font-semibold", isSm ? "px-2 py-0.5 text-xs" : "px-2.5 py-1 text-xs", "bg-surface-muted/60 border border-surface-border"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "relative flex h-2 w-2 shrink-0",
                children: [
                    config.pulse && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping", config.dotColor)
                    }, void 0, false, {
                        fileName: "[project]/components/truck/StatusBadge.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative inline-flex rounded-full h-2 w-2", config.dotColor)
                    }, void 0, false, {
                        fileName: "[project]/components/truck/StatusBadge.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/truck/StatusBadge.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: config.color,
                children: config.label
            }, void 0, false, {
                fileName: "[project]/components/truck/StatusBadge.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            liveStatus.stale_state !== "fresh" && !isSm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-zinc-500 font-normal ml-0.5",
                children: [
                    "· ",
                    liveStatus.stale_state === "stale" || liveStatus.stale_state === "expired" ? "unconfirmed" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatLastUpdated"])(liveStatus.last_updated_at)
                ]
            }, void 0, true, {
                fileName: "[project]/components/truck/StatusBadge.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/truck/StatusBadge.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/truck/TruckCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TruckCard",
    ()=>TruckCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$truck$2f$StatusBadge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/truck/StatusBadge.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function TruckCard({ data, isSelected, onClick }) {
    const { truck, liveStatus, distance_miles } = data;
    const isLive = liveStatus.open_now;
    const isOffline = liveStatus.status === "offline";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: `/trucks/${truck.slug}`,
        onClick: onClick,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("block w-full rounded-xl border transition-all duration-200", "bg-surface-card hover:bg-surface-muted/40", "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500", isSelected ? "border-brand-500 shadow-[0_0_0_1px] shadow-brand-500/30" : "border-surface-border hover:border-surface-muted"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-3 p-3.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-12 w-12 rounded-lg shrink-0 flex items-center justify-center", "font-display font-bold text-lg", isOffline ? "bg-surface-muted text-zinc-600" : "bg-brand-500/10 text-brand-400 border border-brand-500/20"),
                        children: truck.name.charAt(0)
                    }, void 0, false, {
                        fileName: "[project]/components/truck/TruckCard.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 mb-0.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("font-display font-semibold text-sm leading-tight truncate", isOffline ? "text-zinc-500" : "text-white"),
                                        children: truck.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/truck/TruckCard.tsx",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, this),
                                    truck.is_verified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "h-3.5 w-3.5 text-brand-400 shrink-0",
                                        viewBox: "0 0 20 20",
                                        fill: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fillRule: "evenodd",
                                            d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
                                            clipRule: "evenodd"
                                        }, void 0, false, {
                                            fileName: "[project]/components/truck/TruckCard.tsx",
                                            lineNumber: 62,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/truck/TruckCard.tsx",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/truck/TruckCard.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-zinc-500 font-body",
                                        children: truck.primary_cuisine
                                    }, void 0, false, {
                                        fileName: "[project]/components/truck/TruckCard.tsx",
                                        lineNumber: 69,
                                        columnNumber: 13
                                    }, this),
                                    distance_miles !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-zinc-700",
                                                children: "·"
                                            }, void 0, false, {
                                                fileName: "[project]/components/truck/TruckCard.tsx",
                                                lineNumber: 72,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-zinc-500 font-body",
                                                children: distance_miles < 1 ? `${Math.round(distance_miles * 5280)} ft` : `${distance_miles.toFixed(1)} mi`
                                            }, void 0, false, {
                                                fileName: "[project]/components/truck/TruckCard.tsx",
                                                lineNumber: 73,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/truck/TruckCard.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$truck$2f$StatusBadge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StatusBadge"], {
                                liveStatus: liveStatus,
                                size: "sm"
                            }, void 0, false, {
                                fileName: "[project]/components/truck/TruckCard.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/truck/TruckCard.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "shrink-0 flex flex-col items-end gap-1 self-center",
                        children: isLive && liveStatus.wait_time_minutes !== null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-right",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-base font-display font-bold text-white leading-none",
                                    children: [
                                        liveStatus.wait_time_minutes,
                                        "m"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/truck/TruckCard.tsx",
                                    lineNumber: 90,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] text-zinc-500 font-body mt-0.5",
                                    children: "wait"
                                }, void 0, false, {
                                    fileName: "[project]/components/truck/TruckCard.tsx",
                                    lineNumber: 93,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/truck/TruckCard.tsx",
                            lineNumber: 89,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "h-4 w-4 text-zinc-600",
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                fillRule: "evenodd",
                                d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
                                clipRule: "evenodd"
                            }, void 0, false, {
                                fileName: "[project]/components/truck/TruckCard.tsx",
                                lineNumber: 97,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/truck/TruckCard.tsx",
                            lineNumber: 96,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/truck/TruckCard.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/truck/TruckCard.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            isLive && liveStatus.location_name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-3.5 pb-3 flex items-center gap-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "h-3 w-3 text-brand-500 shrink-0",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fillRule: "evenodd",
                            d: "M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.387 1.445-.966 2.274-1.765C15.302 15.1 17 12.462 17 9A7 7 0 103 9c0 3.462 1.698 6.1 3.354 7.584.829.799 1.653 1.378 2.274 1.766.311.192.571.336.757.432a5.742 5.742 0 00.281.14l.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z",
                            clipRule: "evenodd"
                        }, void 0, false, {
                            fileName: "[project]/components/truck/TruckCard.tsx",
                            lineNumber: 107,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/truck/TruckCard.tsx",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[11px] text-zinc-500 font-body truncate",
                        children: liveStatus.location_name
                    }, void 0, false, {
                        fileName: "[project]/components/truck/TruckCard.tsx",
                        lineNumber: 109,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[11px] text-zinc-600 font-body ml-auto shrink-0",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatLastUpdated"])(liveStatus.last_updated_at)
                    }, void 0, false, {
                        fileName: "[project]/components/truck/TruckCard.tsx",
                        lineNumber: 110,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/truck/TruckCard.tsx",
                lineNumber: 105,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/truck/TruckCard.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/truck/FilterBar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FilterBar",
    ()=>FilterBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
function FilterBar({ filters, availableCuisines, onFiltersChange, resultCount }) {
    const toggleOpenNow = ()=>onFiltersChange({
            ...filters,
            openNow: !filters.openNow
        });
    const toggleCuisine = (cuisine)=>{
        const updated = filters.cuisines.includes(cuisine) ? filters.cuisines.filter((c)=>c !== cuisine) : [
            ...filters.cuisines,
            cuisine
        ];
        onFiltersChange({
            ...filters,
            cuisines: updated
        });
    };
    const toggleEventOnly = ()=>onFiltersChange({
            ...filters,
            eventOnly: !filters.eventOnly
        });
    const hasActiveFilters = filters.openNow || filters.cuisines.length > 0 || filters.eventOnly;
    const clearAll = ()=>onFiltersChange({
            openNow: false,
            cuisines: [],
            eventOnly: false
        });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 overflow-x-auto no-scrollbar pb-0.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: toggleOpenNow,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-body font-semibold", "border transition-all duration-150 whitespace-nowrap", filters.openNow ? "bg-brand-500 border-brand-500 text-white" : "bg-surface-card border-surface-border text-zinc-400 hover:border-zinc-500 hover:text-zinc-300"),
                        children: [
                            filters.openNow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "relative flex h-1.5 w-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-ping"
                                    }, void 0, false, {
                                        fileName: "[project]/components/truck/FilterBar.tsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "relative inline-flex rounded-full h-1.5 w-1.5 bg-white"
                                    }, void 0, false, {
                                        fileName: "[project]/components/truck/FilterBar.tsx",
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/truck/FilterBar.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this),
                            "Open Now"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/truck/FilterBar.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-px h-5 bg-surface-border shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/components/truck/FilterBar.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    availableCuisines.map((cuisine)=>{
                        const active = filters.cuisines.includes(cuisine);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>toggleCuisine(cuisine),
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("shrink-0 px-3 py-1.5 rounded-full text-xs font-body font-medium", "border transition-all duration-150 whitespace-nowrap", active ? "bg-brand-500/15 border-brand-500/40 text-brand-300" : "bg-surface-card border-surface-border text-zinc-500 hover:text-zinc-300 hover:border-zinc-500"),
                            children: cuisine
                        }, cuisine, false, {
                            fileName: "[project]/components/truck/FilterBar.tsx",
                            lineNumber: 71,
                            columnNumber: 13
                        }, this);
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-px h-5 bg-surface-border shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/components/truck/FilterBar.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: toggleEventOnly,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-body font-semibold", "border transition-all duration-150 whitespace-nowrap", filters.eventOnly ? "bg-purple-600/20 border-purple-500/40 text-purple-300" : "bg-surface-card border-surface-border text-zinc-500 hover:text-zinc-300 hover:border-zinc-500"),
                        children: "🎪 Events Only"
                    }, void 0, false, {
                        fileName: "[project]/components/truck/FilterBar.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/truck/FilterBar.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            hasActiveFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 text-xs font-body",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-zinc-400",
                        children: [
                            resultCount,
                            " ",
                            resultCount === 1 ? "truck" : "trucks",
                            " found"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/truck/FilterBar.tsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: clearAll,
                        className: "text-brand-400 hover:text-brand-300 underline underline-offset-2",
                        children: "Clear all"
                    }, void 0, false, {
                        fileName: "[project]/components/truck/FilterBar.tsx",
                        lineNumber: 111,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/truck/FilterBar.tsx",
                lineNumber: 107,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/truck/FilterBar.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/mock-data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CUISINE_OPTIONS",
    ()=>CUISINE_OPTIONS,
    "MOCK_MENUS",
    ()=>MOCK_MENUS,
    "MOCK_SCHEDULES",
    ()=>MOCK_SCHEDULES,
    "MOCK_TRUCKS",
    ()=>MOCK_TRUCKS
]);
const MOCK_TRUCKS = [
    {
        truck: {
            id: "1",
            name: "Smoky Soul BBQ",
            slug: "smoky-soul-bbq",
            description: "Slow-smoked brisket, ribs, and loaded mac straight from the pit. We've been rolling through Austin since 2018 — find us by the smoke.",
            primary_cuisine: "BBQ",
            cuisines: [
                "BBQ",
                "American"
            ],
            profile_image_url: null,
            cover_image_url: null,
            city: "Austin",
            state: "TX",
            is_verified: true,
            phone: "(512) 555-0101",
            email: "hello@smokysouldbbq.com",
            website_url: null,
            instagram_url: "https://instagram.com/smokysoulbbq",
            facebook_url: null
        },
        liveStatus: {
            food_truck_id: "1",
            status: "serving_now",
            open_now: true,
            latitude: 30.2672,
            longitude: -97.7431,
            location_name: "Congress Ave & 6th St",
            address_line1: "600 Congress Ave",
            city: "Austin",
            start_time: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
            end_time: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(),
            wait_time_minutes: 10,
            last_updated_at: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
            stale_state: "fresh",
            is_confirmed: true
        },
        distance_miles: 0.3
    },
    {
        truck: {
            id: "2",
            name: "Taco Loco",
            slug: "taco-loco",
            description: "Authentic street tacos, birria, and agua fresca made fresh daily. Family recipe, Austin-born since 2015.",
            primary_cuisine: "Mexican",
            cuisines: [
                "Mexican",
                "Street Food"
            ],
            profile_image_url: null,
            cover_image_url: null,
            city: "Austin",
            state: "TX",
            is_verified: true,
            phone: "(512) 555-0202",
            email: null,
            website_url: "https://tacolocoatx.com",
            instagram_url: "https://instagram.com/tacolocoatx",
            facebook_url: "https://facebook.com/tacolocoatx"
        },
        liveStatus: {
            food_truck_id: "2",
            status: "busy",
            open_now: true,
            latitude: 30.2651,
            longitude: -97.7478,
            location_name: "South Congress Food Park",
            address_line1: "1412 S Congress Ave",
            city: "Austin",
            start_time: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
            end_time: new Date(Date.now() + 3 * 60 * 60 * 1000).toISOString(),
            wait_time_minutes: 25,
            last_updated_at: new Date(Date.now() - 12 * 60 * 1000).toISOString(),
            stale_state: "fresh",
            is_confirmed: true
        },
        distance_miles: 0.7
    },
    {
        truck: {
            id: "3",
            name: "Seoul Bowl",
            slug: "seoul-bowl",
            description: "Korean fusion bowls, crispy bibimbap, and the city's best Korean fried chicken. Spicy optional — always recommended.",
            primary_cuisine: "Korean",
            cuisines: [
                "Korean",
                "Fusion",
                "Asian"
            ],
            profile_image_url: null,
            cover_image_url: null,
            city: "Austin",
            state: "TX",
            is_verified: false,
            phone: null,
            email: "seoulbowlatx@gmail.com",
            website_url: null,
            instagram_url: "https://instagram.com/seoulbowlatx",
            facebook_url: null
        },
        liveStatus: {
            food_truck_id: "3",
            status: "arriving_soon",
            open_now: false,
            latitude: 30.2699,
            longitude: -97.7389,
            location_name: "East 6th & Waller",
            address_line1: "2200 E 6th St",
            city: "Austin",
            start_time: new Date(Date.now() + 30 * 60 * 1000).toISOString(),
            end_time: new Date(Date.now() + 4.5 * 60 * 60 * 1000).toISOString(),
            wait_time_minutes: null,
            last_updated_at: new Date(Date.now() - 8 * 60 * 1000).toISOString(),
            stale_state: "fresh",
            is_confirmed: true
        },
        distance_miles: 1.1
    },
    {
        truck: {
            id: "4",
            name: "Napoli Slice",
            slug: "napoli-slice",
            description: "Wood-fired Neapolitan pizza by the slice. 900°F oven, 90-second bake. Simple ingredients, serious results.",
            primary_cuisine: "Italian",
            cuisines: [
                "Italian",
                "Pizza"
            ],
            profile_image_url: null,
            cover_image_url: null,
            city: "Austin",
            state: "TX",
            is_verified: true,
            phone: "(512) 555-0404",
            email: null,
            website_url: "https://napolislice.com",
            instagram_url: "https://instagram.com/napolisliceatx",
            facebook_url: null
        },
        liveStatus: {
            food_truck_id: "4",
            status: "sold_out",
            open_now: false,
            latitude: 30.2615,
            longitude: -97.7512,
            location_name: "Barton Springs & Lamar",
            address_line1: "1800 Barton Springs Rd",
            city: "Austin",
            start_time: null,
            end_time: null,
            wait_time_minutes: null,
            last_updated_at: new Date(Date.now() - 45 * 60 * 1000).toISOString(),
            stale_state: "stale",
            is_confirmed: false
        },
        distance_miles: 1.8
    },
    {
        truck: {
            id: "5",
            name: "Viet Bites",
            slug: "viet-bites",
            description: "Bánh mì, pho cups, and fresh summer rolls made with herbs from our garden. Light, fresh, and fast.",
            primary_cuisine: "Vietnamese",
            cuisines: [
                "Vietnamese",
                "Asian"
            ],
            profile_image_url: null,
            cover_image_url: null,
            city: "Austin",
            state: "TX",
            is_verified: false,
            phone: null,
            email: "vietbitesatx@gmail.com",
            website_url: null,
            instagram_url: "https://instagram.com/vietbitesatx",
            facebook_url: null
        },
        liveStatus: {
            food_truck_id: "5",
            status: "serving_now",
            open_now: true,
            latitude: 30.2588,
            longitude: -97.7392,
            location_name: "Mueller Farmers Market",
            address_line1: "4209 Airport Blvd",
            city: "Austin",
            start_time: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
            end_time: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(),
            wait_time_minutes: 5,
            last_updated_at: new Date(Date.now() - 3 * 60 * 1000).toISOString(),
            stale_state: "fresh",
            is_confirmed: true
        },
        distance_miles: 2.4
    },
    {
        truck: {
            id: "6",
            name: "The Burger Lab",
            slug: "the-burger-lab",
            description: "Smash burgers, loaded fries, and craft shakes. We press hard, season loud, and never apologize.",
            primary_cuisine: "American",
            cuisines: [
                "American",
                "Burgers"
            ],
            profile_image_url: null,
            cover_image_url: null,
            city: "Austin",
            state: "TX",
            is_verified: true,
            phone: "(512) 555-0606",
            email: "info@theburgerlab.co",
            website_url: "https://theburgerlab.co",
            instagram_url: "https://instagram.com/theburgerlab",
            facebook_url: "https://facebook.com/theburgerlab"
        },
        liveStatus: {
            food_truck_id: "6",
            status: "offline",
            open_now: false,
            latitude: null,
            longitude: null,
            location_name: null,
            address_line1: null,
            city: null,
            start_time: null,
            end_time: null,
            wait_time_minutes: null,
            last_updated_at: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
            stale_state: "expired",
            is_confirmed: false
        },
        distance_miles: 3.1
    }
];
const MOCK_MENUS = {
    "1": {
        food_truck_id: "1",
        categories: [
            {
                name: "Plates",
                items: [
                    {
                        id: "m1-1",
                        name: "Brisket Plate",
                        description: "½ lb smoked brisket, two sides, pickles & onions",
                        price_cents: 1895,
                        category: "Plates",
                        is_available: true,
                        is_featured: true
                    },
                    {
                        id: "m1-2",
                        name: "Ribs Half Rack",
                        description: "Slow-smoked St. Louis ribs, dry rub",
                        price_cents: 2195,
                        category: "Plates",
                        is_available: true,
                        is_featured: false
                    },
                    {
                        id: "m1-3",
                        name: "Combo Plate",
                        description: "Choose 2 meats, two sides",
                        price_cents: 2095,
                        category: "Plates",
                        is_available: true,
                        is_featured: true
                    }
                ]
            },
            {
                name: "Sandwiches",
                items: [
                    {
                        id: "m1-4",
                        name: "Pulled Pork Sandwich",
                        description: "House-smoked pork, house slaw, house pickles",
                        price_cents: 1295,
                        category: "Sandwiches",
                        is_available: true,
                        is_featured: true
                    },
                    {
                        id: "m1-5",
                        name: "Brisket Sandwich",
                        description: "Sliced brisket, caramelized onions, jalapeño",
                        price_cents: 1495,
                        category: "Sandwiches",
                        is_available: true,
                        is_featured: false
                    }
                ]
            },
            {
                name: "Sides",
                items: [
                    {
                        id: "m1-6",
                        name: "Loaded Mac & Cheese",
                        description: "Cheddar blend with brisket bits",
                        price_cents: 695,
                        category: "Sides",
                        is_available: true,
                        is_featured: false
                    },
                    {
                        id: "m1-7",
                        name: "Collard Greens",
                        description: "Slow-cooked with smoked turkey",
                        price_cents: 495,
                        category: "Sides",
                        is_available: true,
                        is_featured: false
                    },
                    {
                        id: "m1-8",
                        name: "Smoked Beans",
                        description: "Brisket drippings, brown sugar, jalapeño",
                        price_cents: 495,
                        category: "Sides",
                        is_available: true,
                        is_featured: false
                    }
                ]
            }
        ]
    },
    "2": {
        food_truck_id: "2",
        categories: [
            {
                name: "Tacos",
                items: [
                    {
                        id: "m2-1",
                        name: "Birria Taco",
                        description: "Braised beef, consommé for dipping, cilantro",
                        price_cents: 495,
                        category: "Tacos",
                        is_available: true,
                        is_featured: true
                    },
                    {
                        id: "m2-2",
                        name: "Al Pastor Taco",
                        description: "Marinated pork, pineapple, cilantro, onion",
                        price_cents: 395,
                        category: "Tacos",
                        is_available: true,
                        is_featured: true
                    },
                    {
                        id: "m2-3",
                        name: "Carne Asada Taco",
                        description: "Grilled steak, guac, pico, cotija",
                        price_cents: 445,
                        category: "Tacos",
                        is_available: true,
                        is_featured: false
                    }
                ]
            },
            {
                name: "Drinks",
                items: [
                    {
                        id: "m2-4",
                        name: "Agua de Jamaica",
                        description: "House hibiscus agua fresca",
                        price_cents: 350,
                        category: "Drinks",
                        is_available: true,
                        is_featured: false
                    },
                    {
                        id: "m2-5",
                        name: "Horchata",
                        description: "Classic rice milk, cinnamon",
                        price_cents: 350,
                        category: "Drinks",
                        is_available: true,
                        is_featured: false
                    }
                ]
            }
        ]
    },
    "3": {
        food_truck_id: "3",
        categories: [
            {
                name: "Bowls",
                items: [
                    {
                        id: "m3-1",
                        name: "Bibimbap Bowl",
                        description: "Rice, seasonal veg, gochujang, fried egg",
                        price_cents: 1395,
                        category: "Bowls",
                        is_available: true,
                        is_featured: true
                    },
                    {
                        id: "m3-2",
                        name: "KFC Bowl",
                        description: "Korean fried chicken, kimchi slaw, pickled daikon",
                        price_cents: 1495,
                        category: "Bowls",
                        is_available: true,
                        is_featured: true
                    },
                    {
                        id: "m3-3",
                        name: "Bulgogi Bowl",
                        description: "Marinated beef, scallion, sesame, rice",
                        price_cents: 1595,
                        category: "Bowls",
                        is_available: true,
                        is_featured: false
                    }
                ]
            }
        ]
    },
    "4": {
        food_truck_id: "4",
        categories: [
            {
                name: "Pizza by the Slice",
                items: [
                    {
                        id: "m4-1",
                        name: "Margherita",
                        description: "San Marzano, fior di latte, fresh basil",
                        price_cents: 595,
                        category: "Pizza by the Slice",
                        is_available: true,
                        is_featured: true
                    },
                    {
                        id: "m4-2",
                        name: "Diavola",
                        description: "Spicy salami, mozzarella, chili oil",
                        price_cents: 695,
                        category: "Pizza by the Slice",
                        is_available: true,
                        is_featured: true
                    },
                    {
                        id: "m4-3",
                        name: "Funghi",
                        description: "Wild mushroom, truffle oil, pecorino",
                        price_cents: 745,
                        category: "Pizza by the Slice",
                        is_available: false,
                        is_featured: false
                    }
                ]
            }
        ]
    },
    "5": {
        food_truck_id: "5",
        categories: [
            {
                name: "Bánh Mì",
                items: [
                    {
                        id: "m5-1",
                        name: "Classic Bánh Mì",
                        description: "Pork, pâté, pickled veg, cilantro, jalapeño",
                        price_cents: 895,
                        category: "Bánh Mì",
                        is_available: true,
                        is_featured: true
                    },
                    {
                        id: "m5-2",
                        name: "Lemongrass Chicken",
                        description: "Grilled chicken, cucumber, herbs",
                        price_cents: 995,
                        category: "Bánh Mì",
                        is_available: true,
                        is_featured: false
                    }
                ]
            },
            {
                name: "Bowls & Rolls",
                items: [
                    {
                        id: "m5-3",
                        name: "Pho Cup",
                        description: "Rich beef broth, rice noodles, bean sprouts",
                        price_cents: 895,
                        category: "Bowls & Rolls",
                        is_available: true,
                        is_featured: true
                    },
                    {
                        id: "m5-4",
                        name: "Summer Rolls (2)",
                        description: "Shrimp, herbs, rice paper, peanut sauce",
                        price_cents: 795,
                        category: "Bowls & Rolls",
                        is_available: true,
                        is_featured: false
                    }
                ]
            }
        ]
    },
    "6": {
        food_truck_id: "6",
        categories: [
            {
                name: "Burgers",
                items: [
                    {
                        id: "m6-1",
                        name: "The Classic Smash",
                        description: "Double smash, American cheese, special sauce",
                        price_cents: 1195,
                        category: "Burgers",
                        is_available: true,
                        is_featured: true
                    },
                    {
                        id: "m6-2",
                        name: "The Lab Burger",
                        description: "Triple smash, bacon, caramelized onion, gruyère",
                        price_cents: 1595,
                        category: "Burgers",
                        is_available: true,
                        is_featured: true
                    },
                    {
                        id: "m6-3",
                        name: "Mushroom Swiss",
                        description: "Double smash, sautéed mushrooms, Swiss, aioli",
                        price_cents: 1295,
                        category: "Burgers",
                        is_available: true,
                        is_featured: false
                    }
                ]
            },
            {
                name: "Sides & Shakes",
                items: [
                    {
                        id: "m6-4",
                        name: "Loaded Fries",
                        description: "Crinkle cut, cheese sauce, jalapeños, scallions",
                        price_cents: 795,
                        category: "Sides & Shakes",
                        is_available: true,
                        is_featured: false
                    },
                    {
                        id: "m6-5",
                        name: "Craft Shake",
                        description: "Rotating flavors — ask today's",
                        price_cents: 695,
                        category: "Sides & Shakes",
                        is_available: true,
                        is_featured: false
                    }
                ]
            }
        ]
    }
};
// ─── Upcoming schedules ───────────────────────────────────────────────────────
const DAY = 24 * 60 * 60 * 1000;
const MOCK_SCHEDULES = {
    "1": [
        {
            id: "s1-1",
            food_truck_id: "1",
            venue_name: "Congress Ave & 6th St",
            address_line1: "600 Congress Ave",
            city: "Austin",
            state: "TX",
            start_time: new Date(Date.now() + 1 * DAY + 11 * 60 * 60 * 1000).toISOString(),
            end_time: new Date(Date.now() + 1 * DAY + 15 * 60 * 60 * 1000).toISOString(),
            notes: null,
            is_public: true
        },
        {
            id: "s1-2",
            food_truck_id: "1",
            venue_name: "Rainey Street",
            address_line1: "78 Rainey St",
            city: "Austin",
            state: "TX",
            start_time: new Date(Date.now() + 2 * DAY + 17 * 60 * 60 * 1000).toISOString(),
            end_time: new Date(Date.now() + 2 * DAY + 22 * 60 * 60 * 1000).toISOString(),
            notes: "Happy hour special",
            is_public: true
        },
        {
            id: "s1-3",
            food_truck_id: "1",
            venue_name: "Mueller Park",
            address_line1: "4550 Mueller Blvd",
            city: "Austin",
            state: "TX",
            start_time: new Date(Date.now() + 4 * DAY + 10 * 60 * 60 * 1000).toISOString(),
            end_time: new Date(Date.now() + 4 * DAY + 14 * 60 * 60 * 1000).toISOString(),
            notes: null,
            is_public: true
        }
    ],
    "2": [
        {
            id: "s2-1",
            food_truck_id: "2",
            venue_name: "South Congress Food Park",
            address_line1: "1412 S Congress Ave",
            city: "Austin",
            state: "TX",
            start_time: new Date(Date.now() + 1 * DAY + 11 * 60 * 60 * 1000).toISOString(),
            end_time: new Date(Date.now() + 1 * DAY + 15 * 60 * 60 * 1000).toISOString(),
            notes: null,
            is_public: true
        },
        {
            id: "s2-2",
            food_truck_id: "2",
            venue_name: "Barton Springs Pool",
            address_line1: "2131 William Barton Dr",
            city: "Austin",
            state: "TX",
            start_time: new Date(Date.now() + 3 * DAY + 12 * 60 * 60 * 1000).toISOString(),
            end_time: new Date(Date.now() + 3 * DAY + 16 * 60 * 60 * 1000).toISOString(),
            notes: null,
            is_public: true
        }
    ],
    "3": [
        {
            id: "s3-1",
            food_truck_id: "3",
            venue_name: "East 6th & Waller",
            address_line1: "2200 E 6th St",
            city: "Austin",
            state: "TX",
            start_time: new Date(Date.now() + 0.5 * DAY).toISOString(),
            end_time: new Date(Date.now() + 0.5 * DAY + 4 * 60 * 60 * 1000).toISOString(),
            notes: null,
            is_public: true
        },
        {
            id: "s3-2",
            food_truck_id: "3",
            venue_name: "The Domain",
            address_line1: "3401 Esperanza Crossing",
            city: "Austin",
            state: "TX",
            start_time: new Date(Date.now() + 2 * DAY + 11 * 60 * 60 * 1000).toISOString(),
            end_time: new Date(Date.now() + 2 * DAY + 15 * 60 * 60 * 1000).toISOString(),
            notes: null,
            is_public: true
        }
    ],
    "4": [
        {
            id: "s4-1",
            food_truck_id: "4",
            venue_name: "Barton Springs & Lamar",
            address_line1: "1800 Barton Springs Rd",
            city: "Austin",
            state: "TX",
            start_time: new Date(Date.now() + 1 * DAY + 11 * 60 * 60 * 1000).toISOString(),
            end_time: new Date(Date.now() + 1 * DAY + 15 * 60 * 60 * 1000).toISOString(),
            notes: null,
            is_public: true
        }
    ],
    "5": [
        {
            id: "s5-1",
            food_truck_id: "5",
            venue_name: "Mueller Farmers Market",
            address_line1: "4209 Airport Blvd",
            city: "Austin",
            state: "TX",
            start_time: new Date(Date.now() + 1 * DAY + 9 * 60 * 60 * 1000).toISOString(),
            end_time: new Date(Date.now() + 1 * DAY + 13 * 60 * 60 * 1000).toISOString(),
            notes: null,
            is_public: true
        },
        {
            id: "s5-2",
            food_truck_id: "5",
            venue_name: "Cherrywood Coffeehouse",
            address_line1: "1400 E 38th St",
            city: "Austin",
            state: "TX",
            start_time: new Date(Date.now() + 3 * DAY + 8 * 60 * 60 * 1000).toISOString(),
            end_time: new Date(Date.now() + 3 * DAY + 12 * 60 * 60 * 1000).toISOString(),
            notes: "Weekend brunch pop-up",
            is_public: true
        }
    ],
    "6": [
        {
            id: "s6-1",
            food_truck_id: "6",
            venue_name: "South Lamar Lot",
            address_line1: "1209 S Lamar Blvd",
            city: "Austin",
            state: "TX",
            start_time: new Date(Date.now() + 1 * DAY + 11 * 60 * 60 * 1000).toISOString(),
            end_time: new Date(Date.now() + 1 * DAY + 15 * 60 * 60 * 1000).toISOString(),
            notes: null,
            is_public: true
        },
        {
            id: "s6-2",
            food_truck_id: "6",
            venue_name: "Sixth Street Entertainment",
            address_line1: "412 E 6th St",
            city: "Austin",
            state: "TX",
            start_time: new Date(Date.now() + 2 * DAY + 20 * 60 * 60 * 1000).toISOString(),
            end_time: new Date(Date.now() + 3 * DAY + 0 * 60 * 60 * 1000).toISOString(),
            notes: "Late night hours",
            is_public: true
        }
    ]
};
const CUISINE_OPTIONS = [
    "BBQ",
    "Mexican",
    "Korean",
    "Italian",
    "Vietnamese",
    "American",
    "Asian",
    "Fusion",
    "Street Food",
    "Pizza",
    "Burgers"
];
}),
"[project]/app/(public)/explore/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ExplorePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$map$2f$MapView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/map/MapView.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$truck$2f$TruckCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/truck/TruckCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$truck$2f$FilterBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/truck/FilterBar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mock-data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function ExplorePage() {
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        openNow: false,
        cuisines: [],
        eventOnly: false
    });
    const [sheetExpanded, setSheetExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const filteredTrucks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOCK_TRUCKS"].filter((t)=>{
            if (filters.openNow && !t.liveStatus.open_now) return false;
            if (filters.cuisines.length > 0 && !filters.cuisines.some((c)=>t.truck.cuisines.includes(c) || t.truck.primary_cuisine === c)) return false;
            return true;
        });
    }, [
        filters
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-screen bg-surface-bg flex flex-col overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "shrink-0 h-14 flex items-center justify-between px-4 border-b border-surface-border bg-surface-bg z-30",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-display font-bold text-lg text-white leading-none",
                                children: "truckspot"
                            }, void 0, false, {
                                fileName: "[project]/app/(public)/explore/page.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-1.5 py-0.5 text-[10px] font-body font-semibold rounded bg-brand-500/20 text-brand-400 border border-brand-500/30",
                                children: "LIVE"
                            }, void 0, false, {
                                fileName: "[project]/app/(public)/explore/page.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(public)/explore/page.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-surface-border bg-surface-card text-xs font-body text-zinc-400 hover:text-zinc-200 hover:border-zinc-500 transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "h-3 w-3",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    fillRule: "evenodd",
                                    d: "M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.387 1.445-.966 2.274-1.765C15.302 15.1 17 12.462 17 9A7 7 0 103 9c0 3.462 1.698 6.1 3.354 7.584.829.799 1.653 1.378 2.274 1.766.311.192.571.336.757.432a5.742 5.742 0 00.281.14l.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z",
                                    clipRule: "evenodd"
                                }, void 0, false, {
                                    fileName: "[project]/app/(public)/explore/page.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(public)/explore/page.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            "Austin, TX",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "h-3 w-3",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    fillRule: "evenodd",
                                    d: "M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z",
                                    clipRule: "evenodd"
                                }, void 0, false, {
                                    fileName: "[project]/app/(public)/explore/page.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(public)/explore/page.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(public)/explore/page.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(public)/explore/page.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:flex flex-1 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[380px] shrink-0 flex flex-col border-r border-surface-border overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 py-3 border-b border-surface-border",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$truck$2f$FilterBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FilterBar"], {
                                    filters: filters,
                                    availableCuisines: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CUISINE_OPTIONS"],
                                    onFiltersChange: setFilters,
                                    resultCount: filteredTrucks.length
                                }, void 0, false, {
                                    fileName: "[project]/app/(public)/explore/page.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(public)/explore/page.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 overflow-y-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TruckList, {
                                    trucks: filteredTrucks
                                }, void 0, false, {
                                    fileName: "[project]/app/(public)/explore/page.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(public)/explore/page.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(public)/explore/page.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$map$2f$MapView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MapView"], {
                            trucks: filteredTrucks
                        }, void 0, false, {
                            fileName: "[project]/app/(public)/explore/page.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(public)/explore/page.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(public)/explore/page.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col flex-1 overflow-hidden md:hidden relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0 transition-all duration-300", sheetExpanded ? "bottom-[60vh]" : "bottom-[30vh]"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$map$2f$MapView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MapView"], {
                            trucks: filteredTrucks
                        }, void 0, false, {
                            fileName: "[project]/app/(public)/explore/page.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(public)/explore/page.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute bottom-0 left-0 right-0 bg-surface-bg rounded-t-2xl", "border-t border-surface-border shadow-xl shadow-black/50", "transition-all duration-300 flex flex-col overflow-hidden", sheetExpanded ? "h-[60vh]" : "h-[30vh]"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "flex-shrink-0 flex flex-col items-center pt-2.5 pb-2",
                                onClick: ()=>setSheetExpanded((p)=>!p),
                                "aria-label": sheetExpanded ? "Collapse list" : "Expand list",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-1 rounded-full bg-surface-muted"
                                }, void 0, false, {
                                    fileName: "[project]/app/(public)/explore/page.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(public)/explore/page.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 pb-2 shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$truck$2f$FilterBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FilterBar"], {
                                    filters: filters,
                                    availableCuisines: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CUISINE_OPTIONS"],
                                    onFiltersChange: setFilters,
                                    resultCount: filteredTrucks.length
                                }, void 0, false, {
                                    fileName: "[project]/app/(public)/explore/page.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(public)/explore/page.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 overflow-y-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TruckList, {
                                    trucks: filteredTrucks
                                }, void 0, false, {
                                    fileName: "[project]/app/(public)/explore/page.tsx",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(public)/explore/page.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(public)/explore/page.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(public)/explore/page.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(public)/explore/page.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
function TruckList({ trucks }) {
    if (trucks.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center h-40 px-6 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-zinc-400 font-body text-sm",
                    children: "No trucks match your filters."
                }, void 0, false, {
                    fileName: "[project]/app/(public)/explore/page.tsx",
                    lineNumber: 133,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-zinc-600 font-body text-xs mt-1",
                    children: "Try removing some filters or zooming out."
                }, void 0, false, {
                    fileName: "[project]/app/(public)/explore/page.tsx",
                    lineNumber: 134,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(public)/explore/page.tsx",
            lineNumber: 132,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        className: "flex flex-col gap-2 p-3",
        children: trucks.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$truck$2f$TruckCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TruckCard"], {
                    data: t
                }, void 0, false, {
                    fileName: "[project]/app/(public)/explore/page.tsx",
                    lineNumber: 143,
                    columnNumber: 11
                }, this)
            }, t.truck.id, false, {
                fileName: "[project]/app/(public)/explore/page.tsx",
                lineNumber: 142,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/app/(public)/explore/page.tsx",
        lineNumber: 140,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_0t2muk1._.js.map