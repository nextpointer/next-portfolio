"use client";

import React, {
  useRef,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  type ScriptableContext,
  type ChartData,
  type ChartOptions,
  type TooltipItem,
  type Plugin,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Info, ChevronDown } from "lucide-react";

// --- REGISTER COMPONENTS ---
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

export default function Chart() {
  const chartRef = useRef<ChartJS<"bar">>(null);
  const originalArray = useRef([]);
  const [chartData, setChartData] = useState<ChartData<"bar">>({
    labels: [],
    datasets: [],
  });

  // Store random types for each bar
  const [barTypes, setBarTypes] = useState<string[]>([]);

  // --- DATA GENERATION ---
  useEffect(() => {
    const totalBars = 50;

    const labels = Array.from({ length: totalBars }, (_, i) => {
      return i % 1 === 0 ? `LBL${i + 1}` : "";
    });

    const dataPoints = Array.from({ length: totalBars }, (_, i) => {
      const progress = i / (totalBars - 1);
      let val = Math.pow(progress, 3.8) * 3800;

      val += Math.random() * (val * 0.2) + 50;
      val = Math.min(val, 4000);

      if (i < 20) val = 80 + Math.random() * 40;
      return val;
    });

    const types = dataPoints.map(() => {
      const r = Math.random();
      if (r > 0.66) return "WHITE";
      if (r > 0.33) return "YELLOW";
      return "ORANGE";
    });
    setBarTypes(types);

    setChartData({
      labels,
      datasets: [
        {
          data: dataPoints,
          // backgroundColor: createBarGradient,
          barPercentage: 0.5,
          categoryPercentage: 0.8,
          borderRadius: 1,
          borderSkipped: false,
        },
      ],
    });
  }, []);

  // --- REUSABLE GRADIENT FUNCTION ---
  const createBarGradient = useCallback(
    (context: ScriptableContext<"bar">) => {
      const { chart, dataIndex } = context;
      const { ctx, chartArea } = chart;
      if (!chartArea || !ctx) return "#ffffff";

      const meta = chart.getDatasetMeta(0);
      const bar = meta.data[dataIndex];

      if (!bar) return "#ffffff";

      const props = bar.getProps(["y", "base"], true);

      if (!props || !Number.isFinite(props.y) || !Number.isFinite(props.base)) {
        return "rgba(0,0,0,0)";
      }

      const { y, base } = props;
      const gradient = ctx.createLinearGradient(0, base, 0, y);

      const type = barTypes[dataIndex] || "ORANGE";

      if (type === "WHITE") {
        gradient.addColorStop(0.0, "#ffffff");
        gradient.addColorStop(0.5, "#ffffdf");
        gradient.addColorStop(1.0, "#ffffff");
      } else if (type === "YELLOW") {
        gradient.addColorStop(0.0, "#fef08a");
        gradient.addColorStop(0.5, "#d97706");
        gradient.addColorStop(1.0, "#fef08a");
      } else {
        gradient.addColorStop(0.0, "#fdba74");
        gradient.addColorStop(0.5, "#c2410c");
        gradient.addColorStop(1.0, "#fdba74");
      }

      return gradient;
    },
    [barTypes],
  );

  // --- PLUGIN 1: BACKGROUND GRID & SMOKY ATMOSPHERE ---
  const backgroundGridPlugin = useMemo<Plugin<"bar">>(
    () => ({
      id: "customBackgroundGrid",
      beforeDraw: (chart) => {
        const { ctx, chartArea } = chart;
        if (!chartArea) return;
        const { left, right, top, bottom, width, height } = chartArea;

        ctx.save();

        ctx.beginPath();
        ctx.rect(left, top, width, height);
        ctx.clip();

        ctx.fillStyle = "rgba(20, 10, 5, 0.6)";
        ctx.fillRect(left, top, width, height);

        if (Number.isFinite(bottom) && Number.isFinite(top)) {
          const smokeGradient = ctx.createLinearGradient(0, bottom, 0, top);
          // Slightly redder/darker base for the inner smoke
          smokeGradient.addColorStop(0, "rgba(234, 88, 12, 0.8"); // Red-600ish
          smokeGradient.addColorStop(0.3, "rgba(234, 88, 12, 0.35)"); // Orange-600
          smokeGradient.addColorStop(0.6, "rgba(251, 146, 60, 0.1)"); // Orange-400
          smokeGradient.addColorStop(1, "rgba(0, 0, 0, 0)");

          ctx.fillStyle = smokeGradient;
          ctx.fillRect(left, top, width, height);
        }

        const minorSize = width / 200;
        const majorSize = height / 5;

        ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        if (Number.isFinite(minorSize) && minorSize > 0) {
          for (let x = left; x <= right; x += minorSize) {
            ctx.moveTo(x, top);
            ctx.lineTo(x, bottom);
          }
          for (let y = bottom; y >= top; y -= minorSize) {
            ctx.moveTo(left, y);
            ctx.lineTo(right, y);
          }
          ctx.stroke();
        }

        ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        if (Number.isFinite(majorSize) && majorSize > 0) {
          for (let x = left; x <= right; x += majorSize) {
            ctx.moveTo(x, top);
            ctx.lineTo(x, bottom);
          }
          for (let y = bottom; y >= top; y -= majorSize) {
            ctx.moveTo(left, y);
            ctx.lineTo(right, y);
          }
          ctx.stroke();
        }

        ctx.restore();
      },
    }),
    [],
  );

  // --- PLUGIN 2: INTENSE BAR GLOW (AURA) ---
  const glowPlugin = useMemo<Plugin<"bar">>(
    () => ({
      id: "glowEffect",
      beforeDatasetsDraw: (chart) => {
        const { ctx, chartArea } = chart;
        if (!chartArea) return;

        const meta = chart.getDatasetMeta(0);

        ctx.save();

        ctx.beginPath();
        ctx.rect(
          chartArea.left,
          chartArea.top,
          chartArea.width,
          chartArea.height,
        );
        ctx.clip();

        meta.data.forEach((bar: any, index) => {
          const props = bar.getProps(["x", "y", "width", "base"]);
          if (!props.x) return;
          const { x, y, width, base } = props;

          if (
            !Number.isFinite(x) ||
            !Number.isFinite(y) ||
            !Number.isFinite(width) ||
            !Number.isFinite(base)
          ) {
            return;
          }

          const gradient = ctx.createLinearGradient(0, base, 0, y);
          const type = barTypes[index] || "ORANGE";

          if (type === "WHITE") {
            gradient.addColorStop(0.0, "#ffffff");
            gradient.addColorStop(0.5, "#ffffdf");
            gradient.addColorStop(1.0, "#ffffff");
          } else if (type === "YELLOW") {
            gradient.addColorStop(0.0, "#fef08a");
            gradient.addColorStop(0.5, "#d97706");
            gradient.addColorStop(1.0, "#fef08a");
          } else {
            gradient.addColorStop(0.0, "#fdba74");
            gradient.addColorStop(0.5, "#c2410c");
            gradient.addColorStop(1.0, "#fdba74");
          }

          ctx.fillStyle = gradient;
          ctx.fillRect(x, y, width, base);

          // ctx.shadowOffsetX = 0;
          // ctx.shadowOffsetY = 0;

          // ctx.beginPath();
          // ctx.rect(x - width / 2, y, width, base - y);
          // ctx.fill();
        });

        ctx.restore();
      },
    }),
    [barTypes],
  );

  // --- CHART OPTIONS ---
  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 1500,
      easing: "easeOutQuart",
    },
    layout: {
      padding: { left: 0, right: 10, top: 10, bottom: 5 },
    },
    interaction: {
      mode: "index",
      intersect: false,
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        backgroundColor: "#000",
        titleColor: "#fff",
        bodyColor: "#fb923c",
        borderColor: "#333",
        borderWidth: 1,
        padding: 12,
        displayColors: false,
        callbacks: {
          title: () => `SPREAD`,
          label: (context: TooltipItem<"bar">) =>
            `VOL: ${Math.round(Number(context.raw)).toString()}`,
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          display: true,
          color: "#525252",
          font: { family: "monospace", size: 9 },
          autoSkip: false,
          minRotation: 90,
          maxRotation: 90,
        },
        border: { display: false },
      },
      y: {
        position: "left",
        min: 0,
        max: 5000,
        grid: { display: false },
        ticks: {
          color: "#666",
          font: { family: "monospace", size: 10 },
          stepSize: 1000,
          padding: 10,
          callback: (val) => (val === 0 ? "0" : Number(val) / 1000 + "k"),
        },
        border: { display: false },
      },
    },
    elements: {
      bar: {
        // backgroundColor: createBarGradient,
        borderWidth: 0,
        hoverBorderWidth: 0,
      },
    },
  };

  return (
    <div className="flex items-center justify-center min-h-32 p-2 md:p-1 min-w-full bg-transparent mt-6">
      {/* MAIN CARD CONTAINER */}
      {/* Updated Shadow to Reddish-Orange to match request */}
      <div className="w-full max-w-[800px] h-[300px] bg-[#020202] border border-[#222] relative overflow-hidden font-sans flex flex-col shadow-[0_0_80px_rgba(220,38,38,0.2)]">
        {/* --- GLOBAL ATMOSPHERE --- */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* UPDATED: Red-biased gradient for the "slightly red glow" outside the bar box */}
          <div className="absolute bottom-[-50px] left-0 w-full h-[350px] bg-orange-600 opacity-20 blur-[120px]" />
        </div>

        {/* --- HEADER --- */}
        <div className="flex justify-between items-start p-5 pb-1 z-30 w-full relative">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <h2 className="text-orange-200 opacity-70 text-[10px] font-bold tracking-[0.15em] uppercase font-mono drop-shadow-md">
                BID-ASK SPREAD % BY CONTRA
              </h2>
              <Info className="w-3.5 h-3.5 text-orange-300 opacity-40 hover:text-[#a3a3a3] cursor-pointer transition-colors" />
            </div>
          </div>

          <button className="relative flex items-center gap-3 bg-[#0a0a0a] hover:bg-[#111] text-orange-100 text-[10px] font-bold px-3 py-2 border border-[#333] transition-all group active:scale-[0.98] overflow-hidden shadow-[0_0_20px_rgba(255,100,0,0.15)]">
            <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(255,100,0,0.3)] transition-shadow duration-300" />
            <span className="drop-shadow-sm z-10 group-hover:text-white transition-colors">
              Pair
            </span>
            <ChevronDown className="w-3 h-3 text-orange-400/70 group-hover:text-white transition-colors z-10" />
          </button>
        </div>

        {/* --- CHART SECTION --- */}
        <div className="flex-1 w-full min-h-0 relative z-10 flex px-2 pb-2">
          {/* CHART CANVAS */}
          <div className="w-full h-full">
            {chartData.labels && chartData.labels.length > 0 && (
              <Bar
                ref={chartRef}
                data={chartData}
                options={options}
                plugins={[backgroundGridPlugin, glowPlugin]}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
