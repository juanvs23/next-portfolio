'use client';
import React, { useEffect } from 'react'
import './honeyBackround.scss';
export default function HoneyBackround() {
    useEffect(() => {
        if(typeof window !== 'undefined'){

            const fadeIn = (el: HTMLElement, display: string)=> {
                el.style.opacity = '0';
                el.style.display = display || "block";
                (function fade() {
                    var val = parseFloat(el.style.opacity);
                    if (!((val += .1) > 1)) {
                        el.style.opacity = `${(val)}`;
                        requestAnimationFrame(fade);
                    }
                })();
            };
            const honeyBackround = document.querySelector('.honeyBackround .honeyBackround__container') as HTMLElement;
            const widthTablet = honeyBackround.clientWidth +80;
            const heightTablet = honeyBackround.clientHeight +80;

            const panelWidth = Math.ceil(widthTablet/80);
            const panelHeight = Math.ceil(heightTablet/80);
            const panels = Math.ceil(panelHeight*panelWidth);
            console.log(panelWidth);
            for (let i = 0; i < panels; i++) {
                const panel = document.createElement('div') as HTMLElement;
                panel.classList.add('panel');
                honeyBackround.appendChild(panel);
                panel.style.filter = 'drop-shadow(2px 4px 6px black) hue-rotate(0deg)';
                fadeIn(panel, 'block');
                panel.addEventListener('mouseover', () => {
                    panel.style.filter = `drop-shadow(2px 4px 6px black) brightness(1.5) hue-rotate(270deg)`;
                   
                    
                })
                panel.addEventListener('mouseout', () => {
                    panel.style.filter = 'drop-shadow(2px 4px 6px black)  brightness(1) hue-rotate(0deg)';
                   
                })
            }
            honeyBackround.style.gridTemplateColumns = `repeat(${panelWidth}, 1fr)`;

          
        }
        return () => {
           // console.clear();
        }
    },[])
  return (
    <div className='honeyBackround'>
      <div className="honeyBackround__container"></div>
    </div>
  )
}

