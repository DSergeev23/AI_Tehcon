import React from 'react';

const logos = ['Сбербанк', 'Яндекс', 'VK Tech', 'Газпром', 'Тинькофф', 'МТС'];

export default function LogoBar() {
  return (
    <div className="border-y border-white/[0.08] bg-black">
      <div className="w-full max-w-[1920px] mx-auto px-5 md:px-8 2xl:px-16 3xl:px-24">
        <div className="grid grid-cols-3 md:grid-cols-6">
          {logos.map((name, i) =>
          <div
            key={i}
            className={`py-5 flex items-center justify-center border-r border-white/[0.08] last:border-r-0 hidden ${i >= 3 ? 'md:border-t-0 border-t border-white/[0.08]' : ''}`}>
            
              <span className="text-xs font-semibold text-white/75 tracking-wide uppercase">{name}</span>
            </div>
          )}
        </div>
      </div>
    </div>);

}
