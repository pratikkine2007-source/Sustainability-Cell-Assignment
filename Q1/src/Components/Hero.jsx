import FloatingClouds from "./FloatingClouds";
import FloatingLeaves from "./FloatingLeaves";
import Globe from "./Globe";
import StatsCard from "./StatsCard";
import SustainabilityNode from "./SustainabilityNode";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 70% 15%, #bfe8ff 0%, #82c8ff 18%, #4f8fe6 40%, #1c4da8 70%, #0b2b6b 100%)",
        }}
      />
      <div
        className="
        absolute
        top-[-300px]
        right-[-250px]
        w-[800px]
        h-[800px]
        rounded-full
        pointer-events-none
        "
        style={{
          background:
            "radial-gradient(circle, rgba(255,245,210,0.18) 0%, rgba(255,245,210,0.06) 35%, transparent 70%)",
          filter: "blur(120px)",
        }}
/>
      {/* Light Glow */}
      <div
        className="
        absolute
        top-[-20%]
        right-[-10%]
        w-[900px]
        h-[900px]
        bg-blue-200/15
        blur-[250px]
        rounded-full
      "
      />
      {/*additional lighting*/}
      <div
        className="
        absolute
        bottom-[-200px]
        left-[20%]
        w-[700px]
        h-[700px]
        rounded-full
        bg-cyan-300/20
        blur-[220px]
        "
/>
      

      <FloatingClouds />
      <FloatingLeaves />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 min-h-screen flex items-center">

        <div className="w-1/2">

          <h1 className="text-7xl font-bold text-white">
            Sustainability Cell
          </h1>

          <h2
            className="
            text-6xl
            font-bold
            mt-2
            leading-[1.3]
            bg-gradient-to-r
            from-green-300
            via-emerald-400
            to-cyan-300
            bg-clip-text
            text-transparent
            "
          >
            IIT Bombay
          </h2>

          <p className="text-white/80 text-xl mt-8 max-w-xl">
            Empowering sustainable practices and environmental
            consciousness through innovation, education,
            and action.
          </p>

<div className="flex items-center gap-5 mt-10">

  <button
    className="
    px-8
    py-4
    rounded-full
    bg-blue-500
    hover:bg-blue-400
    text-white
    font-semibold
    transition-all
    duration-300
    shadow-lg
    hover:scale-105
    "
  >
    Explore Initiatives

  <span
    className="
    transition-transform
    duration-300
    group-hover:translate-x-2
    "
  >
    →
  </span>
  </button>

  <button
    className="
    px-8
    py-4
    rounded-full
    bg-white/10
    backdrop-blur-md
    border
    border-white/20
    text-white
    font-semibold
    transition-all
    duration-300
    hover:bg-white/20
    hover:scale-105
    "
  >
    Join Us
  </button>

</div>

{/* STATS PANEL */}

<div
  className="
  mt-12
  p-6
  rounded-3xl
  bg-white/12
  backdrop-blur-md
  border
  border-white/20
  shadow-[0_8px_40px_rgba(0,0,0,0.15)]
  flex
  justify-between
  gap-6
  "
>
  <StatsCard
    icon="👥"
    value="20"
    label="Active Members"
  />

  <StatsCard
    icon="📅"
    value="15"
    label="Events Organized"
  />

  <StatsCard
    icon="🌱"
    value="10"
    label="Projects Completed"
  />

  <StatsCard
    icon="🎓"
    value="1000"
    label="Students Impacted"
  />
</div>

</div>

     {/* Globe Placeholder */}
<div className="w-1/2 flex justify-end items-center relative">

        {/* Globe Glow */}
        <div
            className="
            absolute
            w-[800px]
            h-[800px]
            rounded-full
            bg-cyan-300/20
            blur-[140px]
            "
        />
        
        {/* ORBIT RING */}

        <div
            className="
            absolute
            w-[580px]
            h-[580px]
            rounded-full
            border
            border-dashed
            border-white/20
            "
        />

        {/* TREE */}

            <SustainabilityNode
            icon="🌳"
            value="1500+"
            title="Trees Planted"
            className="top-36 left-44"
            />

            {/* RECYCLE */}

            <SustainabilityNode
            icon="♻️"
            value="20 Tonnes+"
            title="Waste Recycled"
            className="bottom-28 right-28"
            />

            {/* WATER */}

            <SustainabilityNode
            icon="💧"
            value="2L+"
            title="Water Saved"
            className="top-80 right-10"
            />

            {/* ENERGY */}

            <SustainabilityNode
            icon="⚡"
            value="35%"
            title="Energy Saved"
            className="top-36 right-40"
            />

            {/* SOLAR */}

            <SustainabilityNode
            icon="☀️"
            value="Clean Energy"
            title="Promoted"
            className="bottom-28 left-44"
         />
         {/* ORBIT DOTS */}

        <div className="absolute top-8 left-1/2 w-2 h-2 rounded-full bg-cyan-300 shadow-lg" />

        <div className="absolute top-32 right-10 w-2 h-2 rounded-full bg-cyan-300 shadow-lg" />

        <div className="absolute top-1/2 right-0 w-2 h-2 rounded-full bg-cyan-300 shadow-lg" />

        <div className="absolute bottom-32 right-10 w-2 h-2 rounded-full bg-cyan-300 shadow-lg" />

        <div className="absolute bottom-8 left-1/2 w-2 h-2 rounded-full bg-cyan-300 shadow-lg" />

        <div className="absolute bottom-32 left-10 w-2 h-2 rounded-full bg-cyan-300 shadow-lg" />

        <div className="absolute top-1/2 left-0 w-2 h-2 rounded-full bg-cyan-300 shadow-lg" />

        <div className="absolute top-32 left-10 w-2 h-2 rounded-full bg-cyan-300 shadow-lg" />
        
        <div
        className="
        absolute
        top-24
        left-1/2
        -translate-x-1/2
        w-[700px]
        h-[250px]
        rounded-full
        bg-white/10
        blur-[120px]
        "
      />
      {/* Sustainability Green Aura */}
      <div
        className="
        absolute
        right-[100px]
        top-[100px]
        w-[500px]
        h-[500px]
        rounded-full
        pointer-events-none
        "
        style={{
          background:
            "radial-gradient(circle, rgba(140,255,140,0.15) 0%, transparent 70%)",
          filter: "blur(180px)",
        }}
      />


        <Globe />

        </div>
        


      </div>
    </section>
  );
}