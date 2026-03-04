import { useState, useEffect, useCallback } from 'react'

const HOURS = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00']

function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function randomDelta(max = 2) {
  return randomInRange(-max, max)
}

export function useLiveSimulation() {
  const [state, setState] = useState({
    totalOccupancy: 34,
    activeFloors: 2,
    floorOccupancy: [18, 16, 0, 0, 0],
    energySavedPercent: 42,
    co2AvoidedKg: 127,
    todayPrediction: 34,
    occupancyHistory: [
      { time: '08:00', occupancy: 5 },
      { time: '09:00', occupancy: 18 },
      { time: '10:00', occupancy: 28 },
      { time: '11:00', occupancy: 32 },
      { time: '12:00', occupancy: 34 },
      { time: '13:00', occupancy: 30 },
      { time: '14:00', occupancy: 28 },
      { time: '15:00', occupancy: 22 },
      { time: '16:00', occupancy: 15 },
      { time: '17:00', occupancy: 8 },
    ],
    lastUpdated: new Date().toLocaleTimeString(),
  })

  const tick = useCallback(() => {
    setState((prev) => {
      const occupancyDelta = randomDelta(2)
      let newOccupancy = prev.totalOccupancy + occupancyDelta
      newOccupancy = Math.max(18, Math.min(48, newOccupancy))

      const activeFloors = newOccupancy >= 42 ? 3 : 2
      const floorOccupancy = [0, 0, 0, 0, 0]
      if (activeFloors === 2) {
        const f1 = Math.floor(newOccupancy * (0.5 + Math.random() * 0.2))
        floorOccupancy[0] = Math.min(f1, newOccupancy)
        floorOccupancy[1] = newOccupancy - floorOccupancy[0]
      } else if (activeFloors === 3) {
        floorOccupancy[0] = Math.floor(newOccupancy * 0.4)
        floorOccupancy[1] = Math.floor(newOccupancy * 0.35)
        floorOccupancy[2] = newOccupancy - floorOccupancy[0] - floorOccupancy[1]
      }

      const baseEnergy = 100 - activeFloors * 22
      const energySaved = Math.max(25, Math.min(55, baseEnergy + randomDelta(3)))
      const co2Kg = Math.max(90, Math.min(160, Math.floor(energySaved * 3) + randomDelta(15)))

      const newHistory = prev.occupancyHistory.map((h, i) =>
        i === prev.occupancyHistory.length - 1
          ? { ...h, occupancy: newOccupancy }
          : h
      )

      return {
        totalOccupancy: newOccupancy,
        activeFloors,
        floorOccupancy,
        energySavedPercent: energySaved,
        co2AvoidedKg: co2Kg,
        todayPrediction: prev.todayPrediction + randomDelta(1),
        occupancyHistory: newHistory,
        lastUpdated: new Date().toLocaleTimeString(),
      }
    })
  }, [])

  useEffect(() => {
    const interval = setInterval(tick, 3500)
    return () => clearInterval(interval)
  }, [tick])

  return state
}
