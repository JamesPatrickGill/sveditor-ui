export const generateCircle = (circleConfig, title) => {
  const shadowDef = `
        <defs>
             <filter id="${title}-drop-shadow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="${circleConfig.blurDeviation}"/>
                <feOffset dx="${circleConfig.xOffset}" dy="${circleConfig.yOffset}" result="offsetblur"/>
                <feFlood flood-color="${circleConfig.shadowColour}" flood-opacity="${circleConfig.shadowOpacity}"/>
                <feComposite in2="offsetblur" operator="in"/>
                <feMerge>
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
        </defs>`;

  return `
        ${shadowDef}
        <circle 
            cx="${circleConfig.x}" 
            cy="${circleConfig.y}" 
            r="${circleConfig.radius}" 
            fill="${circleConfig.fillColour}" 
            fill-opacity="${circleConfig.fillOpacity}" 
            stroke="${circleConfig.stroke}" 
            stroke-opacity="${circleConfig.strokeOpacity}" 
            stroke-width="${circleConfig.strokeWidth}"
            filter="url(#${title}-drop-shadow)"
        />`;
};
