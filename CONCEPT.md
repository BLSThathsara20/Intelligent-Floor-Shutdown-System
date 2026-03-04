# Intelligent Floor Shutdown System — Concept Document

## Executive Summary

An AI-powered building management system for Northumbria University that consolidates occupancy onto fewer floors on low-attendance days, shutting down lighting, HVAC, and equipment on unused floors — reducing energy use and CO₂ emissions.

---

## 1. Problem Statement

**NUL is a 5-floor urban building.** On low-attendance days (weekends, holidays, early/late hours), all 5 floors continue to run:

- Lighting
- HVAC (heating, ventilation, air conditioning)
- Lifts
- Computers and peripherals

Even when only **30 students** are in the building, the entire building operates at full capacity. This results in:

- Wasted electricity
- Unnecessary heating/cooling
- Higher operational costs
- Higher carbon footprint

---

## 2. Proposed Solution

### 2.1 Technology Layers

| Layer | Components | Purpose |
|-------|------------|---------|
| **IoT Sensors** | Occupancy (PIR/motion), temperature, humidity, CO₂ | Real-time floor/zone occupancy and environmental data |
| **Computer Vision** | Cameras at entrances and key zones | Verify occupancy counts, supplement sensor data |
| **Entry Systems** | Student swipe/card readers | Actual entry counts feed AI model |
| **Timetable API** | University scheduling system | Expected attendance by time/floor |
| **AI/ML Model** | Prediction engine | Forecast daily/hourly attendance |
| **Building Management (BMS)** | HVAC, lighting, lift controls | Execute shutdown/activation commands |
| **Digital Signage** | Displays at entrances | Direct students to active floors |

### 2.2 How It Works

1. **Prediction (pre-day):** AI model uses timetable, historical patterns, day-of-week, holidays → predicts attendance.
2. **Consolidation plan:** System decides minimum floors needed (e.g. 2 floors for 34 students).
3. **Shutdown:** Unused floors have lighting, HVAC, computers turned off or set to standby.
4. **Real-time:** Occupancy sensors + CV validate actual occupancy; adjustments made if needed.
5. **Guidance:** Digital signage shows "Active floors: 1–2" so students know where to go.

### 2.3 Data Flow

```
Timetable API ──┐
Student Swipes ─┼──► AI Model ──► Floor Plan ──► BMS (shutdown/activate)
Historical Data ─┤
Occupancy Sensors ──► Real-time validation
CV Cameras ──────────►
```

---

## 3. Why NUL?

- **Compact footprint:** 5 floors is manageable. Consolidation is feasible.
- **Larger campuses:** Cannot easily shut whole buildings; NUL's scale is ideal.
- **Urban setting:** Energy efficiency matters for city sustainability goals.
- **University context:** Timetable + swipe data already exist; low extra data cost.

---

## 4. SDG Alignment

| SDG | Contribution |
|-----|--------------|
| **SDG 7 — Affordable & Clean Energy** | Reduces electricity use; lower operational costs; supports clean energy targets. |
| **SDG 13 — Climate Action** | Lowers CO₂ from HVAC and lighting; direct decarbonisation contribution. |

---

## 5. Prototype Scope

This webapp is an **analytical dashboard prototype** that demonstrates:

- Floor status (active vs shutdown)
- IoT sensor network overview
- AI attendance predictions
- Energy savings vs full operation
- Real-time occupancy trends
- Technology stack overview
- SDG alignment

*Note: This is a UI/UX prototype. Real implementation would require backend APIs, BMS integration, and deployed sensors.*

---

## 6. Future Implementation Considerations

- **Privacy:** Computer vision must comply with GDPR; consider anonymised counts only.
- **Safety:** Emergency lighting and lift access must remain available.
- **Pilot:** Start with 1–2 floors, measure savings, then scale.
- **Stakeholders:** Facilities, IT, student services, sustainability team.

---

*Leadership for Sustainability — Northumbria University*
