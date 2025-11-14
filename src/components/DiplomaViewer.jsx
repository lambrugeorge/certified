import React from 'react'
import './DiplomaViewer.css'

export default function DiplomaViewer() {
  const diplomas = [
    {
      id: 1,
      image: '/1.jpg'
    },
    {
      id: 2,
      image: '/2.jpg'
    }
  ]

  return (
    <div className="diploma-viewer-container">
      {diplomas.map((diploma) => (
        <img
          key={diploma.id}
          src={diploma.image}
          alt={`Diploma ${diploma.id}`}
          className="diploma-image"
        />
      ))}
    </div>
  )
}
