export type Measurements = {
  id: number
  sensor_id: number
  description: string
  measured_at: Date
  value: number
}

export type Sensor = {
  id: number
  house_id: string
  type: string
  serial_number: string
  manufacturer: string
  model: string
  measurements: Array<Measurements>
}

export type House = {
  name: string
  address: string
  sensors: Array<Sensor>
}
