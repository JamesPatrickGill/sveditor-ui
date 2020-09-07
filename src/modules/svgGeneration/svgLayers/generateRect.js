export const generateRect = (rectConfig, title) => {
  const shadowDef = `
        <defs>
             <filter id="${title}-drop-shadow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="${rectConfig.blurDeviation}"/>
                <feOffset dx="${rectConfig.xOffset}" dy="${rectConfig.yOffset}" result="offsetblur"/>
                <feFlood flood-color="${rectConfig.shadowColour}" flood-opacity="${rectConfig.shadowOpacity}"/>
                <feComposite in2="offsetblur" operator="in"/>
                <feMerge>
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
        </defs>`;

  return `
        ${shadowDef}
        <rect 
            x="${rectConfig.x}" 
            y="${rectConfig.y}" 
            width="${rectConfig.width}" 
            height="${rectConfig.height}" 
            rx="${rectConfig.rx}" 
            ry="${rectConfig.ry}" 
            fill="${rectConfig.fillColour}" 
            fill-opacity="${rectConfig.fillOpacity}" 
            stroke="${rectConfig.stroke}" 
            stroke-opacity="${rectConfig.strokeOpacity}" 
            stroke-width="${rectConfig.strokeWidth}"
            filter="url(#${title}-drop-shadow)"
        />`;
};
