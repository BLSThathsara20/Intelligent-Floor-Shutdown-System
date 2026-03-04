# Intelligent Floor Shutdown System — Analytics Dashboard

A prototype analytical dashboard for Northumbria University's **Intelligent Floor Shutdown System** — an AI-driven solution to reduce energy waste in a 5-floor urban building.

## The Problem

NUL is a 5-floor urban building. On low-attendance days (weekends, holidays), all 5 floors run lighting, HVAC, lifts, and computers — even if only 30 students are in the building.

## The AI Solution

- **Occupancy sensors + computer vision cameras** on each floor
- **AI model** predicts daily attendance using:
  - Timetable data
  - Student entry swipes
  - Historical patterns
- **Automatic consolidation** of students onto the minimum number of floors
- **Shutdown** of unused floors (lighting, heating, computers)
- **Digital signage** directs students to active floors

## Why It's Unique to NUL

This works perfectly for a compact 5-floor building. Larger campuses cannot consolidate as effectively — NUL's small footprint makes it ideal.

## SDG Alignment

- **SDG 7** — Affordable & Clean Energy
- **SDG 13** — Climate Action

## Technology Stack (Concept)

| Layer | Technology |
|-------|------------|
| IoT | Occupancy sensors, temperature sensors, lighting control |
| Vision | Computer vision cameras for occupancy verification |
| AI/ML | Attendance prediction model |
| Building | BMS integration (HVAC, lifts) |
| UX | Digital signage, analytics dashboard |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Dashboard.jsx      # Main layout
│   ├── Header.jsx
│   ├── FloorStatus.jsx    # 5-floor status
│   ├── IoTOverview.jsx    # Sensor network
│   ├── AIPredictions.jsx  # ML predictions
│   ├── EnergySavings.jsx  # Energy charts
│   ├── AttendanceChart.jsx
│   ├── TechnologyStack.jsx
│   └── SDGAlignment.jsx
├── App.jsx
├── main.jsx
└── index.css
```

---

*Leadership for Sustainability — Northumbria University*
