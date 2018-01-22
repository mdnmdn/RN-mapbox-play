
const generatePoints = (numPoints, center, radius) => {

  const nodes = [];

  for(let i = 0; i < numPoints; i++ ) nodes.push({
    id: i+1,
    coords: [
      center[0] + Math.random() * radius - (radius / 2),
      center[1] + Math.random() * radius - (radius / 2),
    ],
  });

  return {
    type: "FeatureCollection",
    features: nodes.map(n => (
      {
        type: 'Feature',
        id: 'id' + n.id,
        properties: {
          icon: Math.random() > 0.5 ? 'blue' : 'yellow',
          id: 'id' + n.id,
        },
        geometry: {
          type: 'Point',
          coordinates: n.coords,
        },
      }
    ))
  };

};

export {
  generatePoints
};