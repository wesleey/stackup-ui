import { getContrast } from 'polished'

export interface ColorsGridProps {
  color: {
    [x: string]: string
  }
}

export function ColorsGrid({ color }: ColorsGridProps) {
  return Object.entries(color).map(([key, color]) => {
    return (
      <div key={key} style={{ backgroundColor: color, padding: '2rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            color: getContrast(color, '#fff') < 3.5 ? '#000' : '#fff',
          }}
        >
          <strong>${key}</strong>
          <span>{color}</span>
        </div>
      </div>
    )
  })
}
