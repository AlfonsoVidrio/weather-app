import {
  Sun, Moon, CloudSun, CloudMoon, Cloud,
  CloudDrizzle, CloudRain, CloudLightning,
  Snowflake, CloudFog
} from "lucide-react"
import type { ComponentType } from "react"

const iconMap: Record<string, ComponentType<{ className?: string; size?: number }>> = {
  "01d": Sun,
  "01n": Moon,
  "02d": CloudSun,
  "02n": CloudMoon,
  "03d": Cloud,
  "03n": Cloud,
  "04d": Cloud,
  "04n": Cloud,
  "09d": CloudDrizzle,
  "09n": CloudDrizzle,
  "10d": CloudRain,
  "10n": CloudRain,
  "11d": CloudLightning,
  "11n": CloudLightning,
  "13d": Snowflake,
  "13n": Snowflake,
  "50d": CloudFog,
  "50n": CloudFog,
}

type WeatherIconProps = {
  code: string
  size?: number
  className?: string
}

export const WeatherIcon = ({ code, size = 48, className }: WeatherIconProps) => {
  const Icon = iconMap[code] || Cloud
  return <Icon size={size} className={className} />
}
